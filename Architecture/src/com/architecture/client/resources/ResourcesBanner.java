package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;
import com.google.gwt.resources.client.ImageResource;

public interface ResourcesBanner extends ClientBundle {
	public static final ResourcesBanner INSTANCE = GWT.create(ResourcesBanner.class);

	@NotStrict
	@Source("css/Banner.css")
	Style css();

	@Source("images/logo_citroen.jpg")
	ImageResource logoCitroen();

	@Source("images/logo_ds.png")
	ImageResource logoDs();

	@Source("images/logo_peugeot.png")
	ImageResource logoPeugeot();

	public interface Style extends CssResource {
		String logoPeugeotSprite();

		String logoCitroenSprite();

		String logoDsSprite();
	}
}
