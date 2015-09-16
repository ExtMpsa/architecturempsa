package com.architecture.server.appcache;

import com.googlecode.mgwt.linker.server.Html5ManifestServletBase;
import com.googlecode.mgwt.linker.server.propertyprovider.UserAgentPropertyProvider;

public class ManifestServlet extends Html5ManifestServletBase {
	private static final long serialVersionUID = 3027999903018474841L;

	public ManifestServlet() {
		addPropertyProvider(new LocalePropertyProvider());
		addPropertyProvider(new UserAgentPropertyProvider());
	}
}
