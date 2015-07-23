package com.architecture.client.ui.composite;

import com.architecture.client.resources.Resources;
import com.architecture.client.resources.txt.BannerText;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.AnchorElement;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.dom.client.Style.Float;
import com.google.gwt.dom.client.Style.Unit;
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
	HeadingElement title;
	@UiField
	HTMLPanel content;
	@UiField
	HTMLPanel wrapper;

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
		citroenLink.getStyle().setFloat(Float.LEFT);
		citroenLink.getStyle().setMarginTop(12, Unit.PX);
		citroenLink.getStyle().setMarginBottom(12, Unit.PX);
		this.dsLink.setTitle(bannerText.titleLogoDs());
		this.dsLink.setHref(bannerText.hrefDs());
		dsLink.getStyle().setFloat(Float.LEFT);
		dsLink.getStyle().setMarginTop(12, Unit.PX);
		dsLink.getStyle().setMarginBottom(12, Unit.PX);
		this.peugeotLink.setTitle(bannerText.titleLogoPeugeot());
		this.peugeotLink.setHref(bannerText.hrefPeugeot());
		peugeotLink.getStyle().setFloat(Float.RIGHT);
		peugeotLink.getStyle().setMarginTop(12, Unit.PX);
		peugeotLink.getStyle().setMarginBottom(12, Unit.PX);
	}
}
