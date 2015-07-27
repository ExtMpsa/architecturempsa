package com.architecture.client.ui.composite;

import com.architecture.client.resources.Resources;
import com.architecture.client.resources.txt.LanguageChooserText;
import com.architecture.client.ui.widget.Anchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.i18n.client.LocaleInfo;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.Window.Location;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.Widget;

public class BannerLanguageViewImpl extends Composite {

	private static BannerFlagViewImplUiBinder uiBinder = GWT.create(BannerFlagViewImplUiBinder.class);
	@UiField
	ListBox langChooser;
	@UiField
	Anchor logo;
	@UiField
	HTMLPanel wrapper;
	@UiField
	HTMLPanel content;

	interface BannerFlagViewImplUiBinder extends UiBinder<Widget, BannerLanguageViewImpl> {
	}

	/** Constructeur privé */
	private BannerLanguageViewImpl() {
		Resources.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	/** Holder */
	private static class BannerLanguageViewImplHolder {
		/** Instance unique non préinitialisée */
		private final static BannerLanguageViewImpl instance = new BannerLanguageViewImpl();
	}

	/** Point d'accès pour l'instance unique du singleton */
	public static BannerLanguageViewImpl getInstance() {
		return BannerLanguageViewImplHolder.instance;
	}

	private void init() {
		LanguageChooserText languageChooserText = GWT.create(LanguageChooserText.class);

		logo.setHash("#");
		logo.getElement().setId("logo");

		langChooser.setStyleName("langChooser");
		langChooser.addItem(languageChooserText.fr());
		langChooser.addItem(languageChooserText.en());

		switch (LocaleInfo.getCurrentLocale().getLocaleName()) {
		case "fr":
			langChooser.setSelectedIndex(0);
			break;
		case "en":
			langChooser.setSelectedIndex(1);
			break;
		}
	}

	@UiHandler("langChooser")
	void onLangChooserChange(ChangeEvent event) {
		switch (langChooser.getItemText(langChooser.getSelectedIndex())) {
		case "Français (France)":
			if (LocaleInfo.getCurrentLocale().getLocaleName() != "fr") {
				Window.Location.assign(Location.createUrlBuilder().setParameter("locale", "fr").buildString());
			}
			break;
		case "English (United States)":
			if (LocaleInfo.getCurrentLocale().getLocaleName() != "en") {
				Window.Location.assign(Location.createUrlBuilder().setParameter("locale", "en").buildString());
			}
			break;
		}

	}
}
