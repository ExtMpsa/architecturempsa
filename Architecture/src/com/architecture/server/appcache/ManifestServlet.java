package com.architecture.server.appcache;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.googlecode.mgwt.linker.server.Html5ManifestServletBase;
import com.googlecode.mgwt.linker.server.propertyprovider.UserAgentPropertyProvider;

public class ManifestServlet extends Html5ManifestServletBase {
	private static final long serialVersionUID = 3027999903018474841L;
	private final static Logger LOGGER = Logger.getLogger(ManifestServlet.class.getName());

	public ManifestServlet() {
		addPropertyProvider(new LocalePropertyProvider());
		addPropertyProvider(new UserAgentPropertyProvider());
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		try {
			super.doGet(req, resp);
			resp.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1
			resp.setHeader("Pragma", "no-cache"); // HTTP 1.0
			resp.setDateHeader("Expires", 0);
			LOGGER.log(Level.INFO, "req = " + req.getRequestURL());
		} catch (Exception e) {
			LOGGER.log(Level.INFO, e.getMessage());
			resp.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1
			resp.setHeader("Pragma", "no-cache"); // HTTP 1.0
			resp.setDateHeader("Expires", 0);
		}

	}
}
