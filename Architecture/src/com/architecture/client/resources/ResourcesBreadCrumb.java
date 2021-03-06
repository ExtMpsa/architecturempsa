package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;

public interface ResourcesBreadCrumb extends ClientBundle {
	public static final ResourcesBreadCrumb INSTANCE = GWT.create(ResourcesBreadCrumb.class);

	@NotStrict
	@Source("css/BreadCrumb.css")
	Style css();

	public interface Style extends CssResource {
	}
}
