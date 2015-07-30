package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;

public interface ResourcesNavigation extends ClientBundle {
	public static final ResourcesNavigation INSTANCE = GWT.create(ResourcesNavigation.class);

	@NotStrict
	@Source("css/Navigation.css")
	Style css();

	public interface Style extends CssResource {
	}
}
