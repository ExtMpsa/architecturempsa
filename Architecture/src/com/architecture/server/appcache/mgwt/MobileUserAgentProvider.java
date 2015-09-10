package com.architecture.server.appcache.mgwt;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import javax.servlet.http.HttpServletRequest;

import com.architecture.server.appcache.propertyprovider.PropertyProvider;

public final class MobileUserAgentProvider implements PropertyProvider {
	@Nonnull
	@Override
	public String getPropertyName() {
		return "mobile.user.agent";
	}

	@Override
	@Nullable
	public String getPropertyValue(@Nonnull final HttpServletRequest request) {
		final String userAgent = request.getHeader("User-Agent").toLowerCase();
		if (userAgent.contains("android") || userAgent.contains("iphone") || userAgent.contains("ipad")) {
			return "mobilesafari";
		} else {
			return "not_mobile";
		}
	}
}