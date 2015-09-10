package com.architecture.server.appcache.mgwt;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import javax.servlet.http.HttpServletRequest;

import com.architecture.server.appcache.propertyprovider.PropertyProvider;

public final class PhoneGapPropertyProvider implements PropertyProvider {
	@Nonnull
	@Override
	public String getPropertyName() {
		return "phonegap.env";
	}

	@Nullable
	@Override
	public String getPropertyValue(@Nonnull final HttpServletRequest request) {
		return "no";
	}
}