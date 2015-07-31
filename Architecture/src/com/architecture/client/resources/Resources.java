package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;

public interface Resources extends ClientBundle {
	public static final Resources INSTANCE = GWT.create(Resources.class);

	@NotStrict
	@Source("css/Architecture.css")
	Style css();

	// @Source("js/gtm-PJ7D96.js")
	// TextResource gtmJs();
	//
	// @Source("js/analytics.js")
	// TextResource analyticsJs();
	//
	// @Source("js/linkid.js")
	// TextResource linkidJs();
	//
	// @Source("js/ec.js")
	// TextResource ecJs();

	public interface Style extends CssResource {
	}
}
