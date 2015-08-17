package com.architecture.client.ui.composite;

import com.architecture.client.resources.ResourcesBanner;
import com.architecture.client.resources.txt.BannerText;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.AnchorElement;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
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
	HTMLPanel title;
	@UiField
	HTMLPanel content;
	@UiField
	HTMLPanel wrapper;
	@UiField
	HTMLPanel left;
	@UiField
	HTMLPanel right;

	interface BannerViewImplUiBinder extends UiBinder<Widget, BannerViewImpl> {
	}

	private BannerViewImpl() {
		ResourcesBanner.INSTANCE.css().ensureInjected();
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
		title.getElement().setInnerText(bannerText.title());
		citroenLink.setTitle(bannerText.titleLogoCitroen());
		citroenLink.setHref(bannerText.hrefCitroen());
		dsLink.setTitle(bannerText.titleLogoDs());
		dsLink.setHref(bannerText.hrefDs());
		peugeotLink.setTitle(bannerText.titleLogoPeugeot());
		peugeotLink.setHref(bannerText.hrefPeugeot());
	}
}
