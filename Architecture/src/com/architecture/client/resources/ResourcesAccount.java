package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;
import com.google.gwt.resources.client.ImageResource;

public interface ResourcesAccount extends ClientBundle {
	public static final ResourcesAccount INSTANCE = GWT.create(ResourcesAccount.class);

	@NotStrict
	@Source("css/Account.css")
	Style css();

	@Source("images/help.png")
	ImageResource helpLoginLogo();

	public interface Style extends CssResource {
	}
}
