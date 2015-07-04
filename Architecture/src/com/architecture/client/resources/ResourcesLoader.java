package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;

public interface ResourcesLoader extends ClientBundle {
	public static final ResourcesLoader INSTANCE = GWT.create(ResourcesLoader.class);

	@NotStrict
	@Source("css/Loader.css")
	Style css();

	public interface Style extends CssResource {
	}
}
