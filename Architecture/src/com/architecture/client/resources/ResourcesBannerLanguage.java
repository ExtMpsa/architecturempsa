package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;

public interface ResourcesBannerLanguage extends ClientBundle {
	public static final ResourcesBannerLanguage INSTANCE = GWT.create(ResourcesBannerLanguage.class);

	@NotStrict
	@Source("css/BannerLanguage.css")
	Style css();

	public interface Style extends CssResource {
	}
}
