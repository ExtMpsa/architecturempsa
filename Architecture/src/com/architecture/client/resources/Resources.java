package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;
import com.google.gwt.resources.client.ImageResource;
import com.google.gwt.resources.client.TextResource;

public interface Resources extends ClientBundle {
	public static final Resources INSTANCE = GWT.create(Resources.class);

	@NotStrict
	@Source("css/Architecture.css")
	Style css();

	@Source("images/logo_citroen.jpg")
	ImageResource logoCitroen();

	@Source("images/logo_ds.png")
	ImageResource logoDs();

	@Source("images/logo_peugeot.png")
	ImageResource logoPeugeot();
	
	@Source("js/gtm-PJ7D96.js")
	TextResource gtmJs();
	
	@Source("js/analytics.js")
	TextResource analyticsJs();
	
	@Source("js/linkid.js")
	TextResource linkidJs();
	
	@Source("js/ec.js")
	TextResource ecJs();

	public interface Style extends CssResource {
		String logoPeugeotSprite();

		String logoCitroenSprite();

		String logoDsSprite();
	}
}
