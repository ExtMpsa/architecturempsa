package com.architecture.server.appcache;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.googlecode.mgwt.linker.server.Html5ManifestServletBase;
import com.googlecode.mgwt.linker.server.propertyprovider.UserAgentPropertyProvider;

public class ManifestServlet extends Html5ManifestServletBase {
	private static final long serialVersionUID = 3027999903018474841L;

	public ManifestServlet() {
		addPropertyProvider(new LocalePropertyProvider());
		addPropertyProvider(new UserAgentPropertyProvider());
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		super.doGet(req, resp);
		resp.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1
		resp.setHeader("Pragma", "no-cache"); // HTTP 1.0
		resp.setDateHeader("Expires", 0);
	}
}
