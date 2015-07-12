package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;

public interface ResourcesCreateAccount extends ClientBundle {
	public static final ResourcesCreateAccount INSTANCE = GWT.create(ResourcesCreateAccount.class);

	@NotStrict
	@Source("css/CreateAccount.css")
	Style css();

	public interface Style extends CssResource {
	}
}
