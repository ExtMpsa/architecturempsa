package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;

public interface ResourcesWebAnalytics extends ClientBundle {
	public static final ResourcesWebAnalytics INSTANCE = GWT.create(ResourcesWebAnalytics.class);

	@NotStrict
	@Source("css/WebAnalytics.css")
	Style css();

	public interface Style extends CssResource {
	}
}
