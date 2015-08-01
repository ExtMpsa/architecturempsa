package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;

public interface ResourcesForms extends ClientBundle {
	public static final ResourcesForms INSTANCE = GWT.create(ResourcesForms.class);

	@NotStrict
	@Source("css/Forms.css")
	Style css();

	public interface Style extends CssResource {
	}
}
