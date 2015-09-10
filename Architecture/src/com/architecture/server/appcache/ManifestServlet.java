package com.architecture.server.appcache;

import javax.servlet.annotation.WebServlet;

import com.architecture.server.appcache.propertyprovider.UserAgentPropertyProvider;

@WebServlet(urlPatterns = { "/architecture.appcache" })
public class ManifestServlet extends AbstractManifestServlet {
	private static final long serialVersionUID = 1L;

	public ManifestServlet() {
		addPropertyProvider(new UserAgentPropertyProvider());
	}
}