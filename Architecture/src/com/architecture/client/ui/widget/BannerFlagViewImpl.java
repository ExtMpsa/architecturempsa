package com.architecture.client.ui.widget;

import com.architecture.client.resources.Resources;
import com.architecture.client.resources.txt.BannerFlagText;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.AnchorElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.i18n.client.LocaleInfo;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window.Location;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Widget;

public class BannerFlagViewImpl extends Composite {

	private static BannerFlagViewImplUiBinder uiBinder = GWT.create(BannerFlagViewImplUiBinder.class);
	@UiField
	AnchorElement frLink;
	@UiField
	Image frFlag;
	@UiField
	AnchorElement enLink;
	@UiField
	Image enFlag;

	interface BannerFlagViewImplUiBinder extends UiBinder<Widget, BannerFlagViewImpl> {
	}

	/** Constructeur privé */
	private BannerFlagViewImpl() {
		Resources.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	/** Holder */
	private static class BannerFlagViewImplHolder {
		/** Instance unique non préinitialisée */
		private final static BannerFlagViewImpl instance = new BannerFlagViewImpl();
	}

	/** Point d'accès pour l'instance unique du singleton */
	public static BannerFlagViewImpl getInstance() {
		return BannerFlagViewImplHolder.instance;
	}

	private void init() {
		BannerFlagText bannerFlagText = GWT.create(BannerFlagText.class);
		this.frLink.setTitle(bannerFlagText.titleFrFlag());
		this.enLink.setTitle(bannerFlagText.titleEnFlag());
		if (LocaleInfo.getCurrentLocale().getLocaleName() != "fr") {
			this.frLink.setHref(Location.createUrlBuilder().setParameter("locale", "fr").buildString());
		}
		if (LocaleInfo.getCurrentLocale().getLocaleName() != "en") {
			this.enLink.setHref(Location.createUrlBuilder().setParameter("locale", "en").buildString());
		}
	}

	@UiHandler("frFlag")
	void onFrFlagClick(ClickEvent event) {
		if (LocaleInfo.getCurrentLocale().getLocaleName() != "fr") {
			this.frLink.setHref(Location.createUrlBuilder().setParameter("locale", "fr").buildString());
		}
	}

	@UiHandler("enFlag")
	void onEnFlagClick(ClickEvent event) {
		if (LocaleInfo.getCurrentLocale().getLocaleName() != "en") {
			this.enLink.setHref(Location.createUrlBuilder().setParameter("locale", "en").buildString());
		}
	}
}
