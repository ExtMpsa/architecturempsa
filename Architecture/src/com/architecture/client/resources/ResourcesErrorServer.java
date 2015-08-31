package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;

public interface ResourcesErrorServer extends ClientBundle {
	public static final ResourcesErrorServer INSTANCE = GWT.create(ResourcesErrorServer.class);

	@NotStrict
	@Source("css/ErrorServer.css")
	Style css();

	public interface Style extends CssResource {
	}
}
