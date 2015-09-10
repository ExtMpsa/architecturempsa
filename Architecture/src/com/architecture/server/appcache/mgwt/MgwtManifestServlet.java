package com.architecture.server.appcache.mgwt;

import com.architecture.server.appcache.propertyprovider.UserAgentPropertyProvider;

public class MgwtManifestServlet extends AbstractMgwtManifestServlet {
	private static final long serialVersionUID = 1L;

	public MgwtManifestServlet() {
		addPropertyProvider(new MgwtOsPropertyProvider());
		addPropertyProvider(new UserAgentPropertyProvider());
		addPropertyProvider(new MobileUserAgentProvider());
	}
}