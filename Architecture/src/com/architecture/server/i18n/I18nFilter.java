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

public class I18nFilter implements Filter {
	private final static Logger LOGGER = Logger.getLogger(I18nFilter.class.getName());

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain filterChain) throws IOException, ServletException {
		final HttpServletRequest httpRequest = (HttpServletRequest) req;
		String requestURI = httpRequest.getRequestURI();
		LOGGER.log(Level.INFO, "request = " + httpRequest.getRequestURL());
		LOGGER.log(Level.INFO, "request uri = " + httpRequest.getRequestURI());

		if (requestURI.startsWith("/fr/")) {
			String toReplace = "/fr/";
			String newURI = requestURI.replace(toReplace, "/ArchitectureFr.html");
			LOGGER.log(Level.INFO, "newURI = " + newURI);
			req.getRequestDispatcher(newURI).forward(req, resp);
		} else {
			filterChain.doFilter(req, resp);
		}
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
	}

}
