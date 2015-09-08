package com.architecture.server;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLDecoder;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.NicelyResynchronizingAjaxController;
import com.gargoylesoftware.htmlunit.SilentCssErrorHandler;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.WebRequest;
import com.gargoylesoftware.htmlunit.html.HtmlPage;

/**
 * Servlet that makes this application crawlable. ({@link https://developers.google.com/webmasters/ajax-crawling/docs/getting-started}
 */
public final class GoogleCrawlerFilter implements Filter {
	private final static Logger LOGGER = Logger.getLogger(GoogleCrawlerFilter.class.getName());

	/**
	 * Special URL token that gets passed from the crawler to the servlet filter. This token is used in case there are already existing query parameters.
	 */
	private static final String ESCAPED_FRAGMENT_FORMAT1 = "_escaped_fragment_=";
	private static final int ESCAPED_FRAGMENT_LENGTH1 = ESCAPED_FRAGMENT_FORMAT1.length();
	/**
	 * Special URL token that gets passed from the crawler to the servlet filter. This token is used in case there are not already existing query parameters.
	 */
	private static final String ESCAPED_FRAGMENT_FORMAT2 = "&" + ESCAPED_FRAGMENT_FORMAT1;
	private static final int ESCAPED_FRAGMENT_LENGTH2 = ESCAPED_FRAGMENT_FORMAT2.length();

	private class SyncAllAjaxController extends NicelyResynchronizingAjaxController {
		private static final long serialVersionUID = 1L;

		@Override
		public boolean processSynchron(HtmlPage page, WebRequest request, boolean async) {
			return true;
		}
	}

	private WebClient webClient = null;

	private static final long _pumpEventLoopTimeoutMillis = 200;
	private static final long _jsTimeoutMillis = 200;
	private static final long _pageWaitMillis = 100;
	final int _maxLoopChecks = 2;

	@Override
	public void destroy() {
		if (webClient != null) {
			webClient.closeAllWindows();
		}
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
		LOGGER.setLevel(Level.INFO);
		// Grab the request uri and query strings.
		final HttpServletRequest httpRequest = (HttpServletRequest) request;
		final String requestURI = httpRequest.getRequestURI();
		final String queryString = httpRequest.getQueryString();
		final HttpServletResponse httpResponse = (HttpServletResponse) response;

		if ((queryString != null) && (queryString.contains(ESCAPED_FRAGMENT_FORMAT1))) {
			// This is a Googlebot crawler request, let's return a static indexable html page
			// post javascript execution, as rendered in the browser.
			final String domain = httpRequest.getServerName();
			final int port = httpRequest.getServerPort();

			// Rewrite the URL back to the original #! version
			// -- basically remove _escaped_fragment_ from the query.
			// Unescape any %XX characters as need be.
			final String urlStringWithHashFragment = requestURI + rewriteQueryString(queryString);
			final String protocol = httpRequest.getScheme();
			final URL urlWithHashFragment = new URL(protocol, domain, port, urlStringWithHashFragment);
			final WebRequest webRequest = new WebRequest(urlWithHashFragment);

			// Use the headless browser to obtain an HTML snapshot.
			webClient = new WebClient(BrowserVersion.getDefault());
			webClient.getCache().clear();
			webClient.getOptions().setJavaScriptEnabled(true);
			webClient.getOptions().setThrowExceptionOnScriptError(false);
			webClient.getOptions().setRedirectEnabled(false);
			webClient.setAjaxController(new SyncAllAjaxController());
			webClient.setCssErrorHandler(new SilentCssErrorHandler());

			final HtmlPage page = webClient.getPage(webRequest);

			// Important! Give the headless browser enough time to execute JavaScript
			// The exact time to wait may depend on your application.

			webClient.getJavaScriptEngine().pumpEventLoop(_pumpEventLoopTimeoutMillis);

			int waitForBackgroundJavaScript = webClient.waitForBackgroundJavaScript(_jsTimeoutMillis);
			int loopCount = 0;
			while (waitForBackgroundJavaScript > 0 && loopCount < _maxLoopChecks) {
				++loopCount;
				waitForBackgroundJavaScript = webClient.waitForBackgroundJavaScript(_jsTimeoutMillis);
				if (waitForBackgroundJavaScript == 0) {
					break;
				}
				synchronized (page) {
					try {
						page.wait(_pageWaitMillis);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
			webClient.getAjaxController().processSynchron(page, webRequest, false);
			if (webClient.getJavaScriptEngine().isScriptRunning()) {
				webClient.getJavaScriptEngine().shutdownJavaScriptExecutor();
			}

			// Return the static snapshot.
			final String staticSnapshotHtml = page.asXml();
			httpResponse.setContentType("text/html;charset=UTF-8");
			final PrintWriter out = httpResponse.getWriter();
			out.println("<hr />");
			out.println("<center><h3>Page non-interactive pour le crawler.");
			out.println("La page interactive est: <a href=\"" + urlWithHashFragment + "\">" + urlWithHashFragment + "</a></h3></center>");
			out.println("<hr />");
			out.println(staticSnapshotHtml);
			// Close web client.
			webClient.closeAllWindows();
			out.println("");
			out.flush();
			out.close();
		} else {
			if (requestURI.contains(".nocache.")) {
				LOGGER.log(Level.INFO, "Set Header Uri requested : " + requestURI);
				// Ensure the gwt nocache bootstrapping file is never cached.
				// References:
				// http://stackoverflow.com/questions/4274053/how-to-clear-cache-in-gwt
				// http://seewah.blogspot.com/2009/02/gwt-tips-2-nocachejs-getting-cached-in.html
				//
				final Date now = new Date();
				httpResponse.setDateHeader("Date", now.getTime());
				httpResponse.setDateHeader("Expires", now.getTime() - 86400000L); // One day old.
				httpResponse.setHeader("Pragma", "no-cache");
				httpResponse.setHeader("Cache-control", "no-cache, no-store, must-revalidate");
				httpResponse.setHeader("Vary", "Accept-Encoding");
			} else if (requestURI.equalsIgnoreCase("/") || requestURI.equalsIgnoreCase("/Architecture.html")) {
				final Date now = new Date();
				httpResponse.setContentType("text/html; charset=UTF-8");
				httpResponse.setDateHeader("Expires", now.getTime() + 30 * 86400000L);
			} else if (requestURI.contains(".cache.")) {
				final Date now = new Date();
				httpResponse.setDateHeader("Expires", now.getTime() + 30 * 86400000L);
			} else if (requestURI.contains("service.s3gwt")) {
				final Date now = new Date();
				httpResponse.setDateHeader("Expires", now.getTime() + 30 * 86400000L);
				httpResponse.setDateHeader("Last-Modified", now.getTime());
			}

			filterChain.doFilter(request, response);
		}
	}

	/**
	 * Maps from the query string that contains _escaped_fragment_ to one that doesn't, but is instead followed by a hash fragment. It also unescapes any characters that were escaped by the crawler.
	 * If the query string does not contain _escaped_fragment_, it is not modified.
	 * 
	 * @param queryString
	 * @return A modified query string followed by a hash fragment if applicable. The non-modified query string otherwise.
	 * @throws UnsupportedEncodingException
	 */
	private static String rewriteQueryString(String queryString) throws UnsupportedEncodingException {
		// Seek the escaped fragment.
		int index = queryString.indexOf(ESCAPED_FRAGMENT_FORMAT2);
		int length = ESCAPED_FRAGMENT_LENGTH2;
		if (index == -1) {
			index = queryString.indexOf(ESCAPED_FRAGMENT_FORMAT1);
			length = ESCAPED_FRAGMENT_LENGTH1;
		}
		if (index != -1) {
			// Found the escaped fragment, so build back the original decoded one.
			final StringBuilder queryStringSb = new StringBuilder();
			// Add url parameters if any.
			if (index > 0) {
				queryStringSb.append("?");
				queryStringSb.append(queryString.substring(0, index));
			}
			// Add the hash fragment as a replacement for the escaped fragment.
			queryStringSb.append("#!");
			// Add the decoded token.
			final String token2Decode = queryString.substring(index + length, queryString.length());
			final String tokenDecoded = URLDecoder.decode(token2Decode, "UTF-8");
			queryStringSb.append(tokenDecoded);
			return queryStringSb.toString();
		}
		return queryString;
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
	}
}