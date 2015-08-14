package com.architecture.client.ui;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.resources.Resources;
import com.architecture.client.ui.composite.BannerLanguageViewImpl;
import com.architecture.client.ui.composite.BannerViewImpl;
import com.architecture.client.ui.composite.BreadCrumbViewImpl;
import com.architecture.client.ui.composite.DisclamerViewImpl;
import com.architecture.client.ui.composite.FooterViewImpl;
import com.architecture.client.ui.composite.NavigationViewImpl;
import com.google.gwt.core.client.GWT;
import com.google.gwt.storage.client.Storage;
import com.google.gwt.storage.client.StorageEvent;
import com.google.gwt.storage.client.StorageMap;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Widget;

public class ArchitectureViewImpl extends Composite implements ArchitectureView {

	private static ArchitectureViewImplUiBinder uiBinder = GWT.create(ArchitectureViewImplUiBinder.class);
	@UiField
	BannerViewImpl banner;
	@UiField
	HTMLPanel appContainer;
	@UiField
	BannerLanguageViewImpl bannerLanguage;
	@UiField
	HTMLPanel main;
	@UiField
	DisclamerViewImpl disclaimer;
	@UiField
	NavigationViewImpl nav;
	@UiField
	FooterViewImpl footer;
	@UiField
	HTMLPanel header;
	@UiField
	BreadCrumbViewImpl breadCrumb;
	Widget widget;
	@SuppressWarnings("unused")
	private ClientFactoryImpl clientFactory;
	private Storage storage = null;

	interface ArchitectureViewImplUiBinder extends UiBinder<Widget, ArchitectureViewImpl> {
	}

	public ArchitectureViewImpl() {
		Resources.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	private void init() {
		storage = Storage.getLocalStorageIfSupported();
		final String privacyKey = "isPrivacyValidated";
		String privacyValue = "";
		if (storage != null) {
			StorageMap stockMap = new StorageMap(storage);
			if (stockMap.containsKey(privacyKey) == true) {
				privacyValue = storage.getItem(privacyKey);
				if (privacyValue.equals("true")) {
					disclaimer.setVisible(false);
				}
			}
			Storage.addStorageEventHandler(new StorageEvent.Handler() {

				@Override
				public void onStorageChange(StorageEvent event) {
					switch (event.getKey()) {
					case privacyKey:
						if (!event.getOldValue().equals(event.getNewValue())) {
							if (event.getNewValue().equals("true")) {
								disclaimer.setVisible(false);
							} else {
								disclaimer.setVisible(true);
							}
						}
						break;
					}
				}
			});
		}

		// ScriptInjector.fromString(Resources.INSTANCE.gtmJs().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
		// ScriptInjector.fromString(Resources.INSTANCE.gtmJs().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
		// ScriptInjector.fromString(Resources.INSTANCE.gtmJs().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
		// ScriptInjector.fromString(Resources.INSTANCE.gtmJs().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
	}

	@Override
	public void setClientFactory(ClientFactoryImpl clientFactory) {
		this.clientFactory = clientFactory;
	}

	@Override
	public BannerViewImpl getBanner() {
		return banner;
	}

	@Override
	public BannerLanguageViewImpl getLanguageView() {
		return bannerLanguage;
	}

	@Override
	public NavigationViewImpl getNavigationView() {
		return nav;
	}

	@Override
	public BreadCrumbViewImpl getBreadCrumbView() {
		return breadCrumb;
	}

	@Override
	public void setWidget(IsWidget w) {
		setWidget(asWidgetOrNull(w));
	}

	@Override
	public Widget getWidget() {
		return widget;
	}

	@Override
	public void setWidget(Widget w) {
		if (w != null) {
			main.clear();
			main.add(w);
			widget = w;
		}
	}
}
