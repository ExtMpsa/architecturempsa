package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;

public interface ResourcesFooter extends ClientBundle {
	public static final ResourcesFooter INSTANCE = GWT.create(ResourcesFooter.class);

	@NotStrict
	@Source("css/Footer.css")
	Style css();

	public interface Style extends CssResource {
	}
}
