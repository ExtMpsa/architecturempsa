package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;

public interface ResourcesTraining extends ClientBundle {
	public static final ResourcesTraining INSTANCE = GWT.create(ResourcesTraining.class);

	@NotStrict
	@Source("css/Training.css")
	Style css();

	public interface Style extends CssResource {
	}
}
