package com.architecture.client.ui;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.resources.Resources;
import com.architecture.client.ui.composite.BannerLanguageViewImpl;
import com.architecture.client.ui.composite.BannerViewImpl;
import com.architecture.client.ui.composite.DisclamerViewImpl;
import com.architecture.client.ui.composite.MenuViewImpl;
import com.google.gwt.core.client.GWT;
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
	MenuViewImpl menu;
	@UiField
	HTMLPanel main;
	@UiField
	BannerLanguageViewImpl bannerLanguage;
	@UiField
	HTMLPanel content;
	@UiField
	DisclamerViewImpl disclaimer;
	Widget widget;
	@SuppressWarnings("unused")
	private ClientFactoryImpl clientFactory;

	interface ArchitectureViewImplUiBinder extends UiBinder<Widget, ArchitectureViewImpl> {
	}

	public ArchitectureViewImpl() {
		Resources.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	private void init() {
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
	public MenuViewImpl getMenu() {
		return menu;
	}

	@Override
	public BannerLanguageViewImpl getBannerFlag() {
		return bannerLanguage;
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
			content.clear();
			content.add(w);
			widget = w;
		}
	}
}
