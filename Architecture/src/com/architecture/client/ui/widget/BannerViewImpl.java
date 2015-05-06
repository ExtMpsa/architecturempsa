package com.architecture.client.ui.widget;

import com.architecture.client.resources.Resources;
import com.architecture.client.resources.txt.BannerText;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.AnchorElement;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Widget;

public class BannerViewImpl extends Composite {

	private static BannerViewImplUiBinder uiBinder = GWT.create(BannerViewImplUiBinder.class);
	@UiField
	Image citroenLogo;
	@UiField
	AnchorElement citroenLink;
	@UiField
	Image dsLogo;
	@UiField
	AnchorElement dsLink;
	@UiField
	Image peugeotLogo;
	@UiField
	AnchorElement peugeotLink;
	@UiField
	HeadingElement title;

	interface BannerViewImplUiBinder extends UiBinder<Widget, BannerViewImpl> {
	}

	private BannerViewImpl() {
		Resources.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	/** Holder */
	private static class BannerViewImplHolder {
		/** Instance unique non préinitialisée */
		private final static BannerViewImpl instance = new BannerViewImpl();
	}

	/** Point d'accès pour l'instance unique du singleton */
	public static BannerViewImpl getInstance() {
		return BannerViewImplHolder.instance;
	}

	private void init() {
		BannerText bannerText = GWT.create(BannerText.class);
		this.title.setInnerText(bannerText.title());
		this.citroenLink.setTitle(bannerText.titleLogoCitroen());
		this.citroenLink.setHref(bannerText.hrefCitroen());
		this.dsLink.setTitle(bannerText.titleLogoDs());
		this.dsLink.setHref(bannerText.hrefDs());
		this.peugeotLink.setTitle(bannerText.titleLogoPeugeot());
		this.peugeotLink.setHref(bannerText.hrefPeugeot());
	}
}
