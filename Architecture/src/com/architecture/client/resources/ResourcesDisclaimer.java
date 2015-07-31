package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;

public interface ResourcesDisclaimer extends ClientBundle {
	public static final ResourcesDisclaimer INSTANCE = GWT.create(ResourcesDisclaimer.class);

	@NotStrict
	@Source("css/Disclaimer.css")
	Style css();

	public interface Style extends CssResource {
	}
}
