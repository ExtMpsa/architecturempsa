package com.architecture.server.i18n;

import java.io.IOException;
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

public class I18nFilter implements Filter {
	private final static Logger LOGGER = Logger.getLogger(I18nFilter.class.getName());

	@Override
	public void destroy() {
		// do nothing
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain filterChain) throws IOException, ServletException {
		final HttpServletRequest httpRequest = (HttpServletRequest) req;
		String requestURI = httpRequest.getRequestURI();
		LOGGER.log(Level.INFO, "request = " + httpRequest.getRequestURL());
		LOGGER.log(Level.INFO, "request uri = " + httpRequest.getRequestURI());

		final HttpServletResponse httpResponse = (HttpServletResponse) resp;
		httpResponse.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1
		httpResponse.setHeader("Pragma", "no-cache"); // HTTP 1.0
		httpResponse.setDateHeader("Expires", 0);
		httpResponse.setHeader("Vary", "Accept-Encoding");

		if (requestURI.toLowerCase().startsWith("/fr")) {
			String newURI = "/ArchitectureFr.html";
			httpResponse.setContentType("text/html; charset=UTF-8");
			req.getRequestDispatcher(newURI).forward(req, resp);
		} else if (requestURI.toLowerCase().startsWith("/en")) {
			String newURI = "/ArchitectureEn.html";
			httpResponse.setContentType("text/html; charset=UTF-8");
			req.getRequestDispatcher(newURI).forward(req, resp);
		} else {
			filterChain.doFilter(req, resp);
		}
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// do nothing
	}

}
