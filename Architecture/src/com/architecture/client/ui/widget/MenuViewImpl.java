package com.architecture.client.ui.widget;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.event.FormsMultipleUrlEvent;
import com.architecture.client.event.FormsSingleUrlEvent;
import com.architecture.client.event.HomeEvent;
import com.architecture.client.event.SignInEvent;
import com.architecture.client.event.TracingPaperEvent;
import com.architecture.client.resources.txt.MenuText;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

public class MenuViewImpl extends Composite {

	private static MenuViewImplUiBinder uiBinder = GWT.create(MenuViewImplUiBinder.class);
	@UiField
	Button home;
	@UiField
	Button formMultipleUrl;
	@UiField
	Button formSingleUrl;
	@UiField
	Button eCommerce;
	@UiField
	Button iFrame;
	@UiField
	Button tracingPaper;
	@UiField
	Button connexion;

	interface MenuViewImplUiBinder extends UiBinder<Widget, MenuViewImpl> {
	}

	private MenuViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	/** Holder */
	private static class MenuViewImplHolder {
		/** Instance unique non préinitialisée */
		private final static MenuViewImpl instance = new MenuViewImpl();
	}

	/** Point d'accès pour l'instance unique du singleton */
	public static MenuViewImpl getInstance() {
		return MenuViewImplHolder.instance;
	}

	private void init() {
		MenuText menuText = GWT.create(MenuText.class);
		home.setText(menuText.home());
		formMultipleUrl.setText(menuText.formMultipleUrl());
		formSingleUrl.setText(menuText.formSingleUrl());
		eCommerce.setText(menuText.eCommerce());
		iFrame.setText(menuText.iFrame());
		tracingPaper.setText(menuText.tracingPaper());
		connexion.setText(menuText.connexion());
	}

	@UiHandler("home")
	void onHomeClick(ClickEvent event) {
		ClientFactoryImpl.getInstance().getEventBus().fireEvent(new HomeEvent());
	}

	@UiHandler("formMultipleUrl")
	void onFormMultipleUrlClick(ClickEvent event) {
		ClientFactoryImpl.getInstance().getEventBus().fireEvent(new FormsMultipleUrlEvent());
	}

	@UiHandler("formSingleUrl")
	void onFormSingleUrlClick(ClickEvent event) {
		ClientFactoryImpl.getInstance().getEventBus().fireEvent(new FormsSingleUrlEvent());
	}

	@UiHandler("eCommerce")
	void onECommerceClick(ClickEvent event) {
		Window.alert("Not implemented");
	}

	@UiHandler("iFrame")
	void onIFrameClick(ClickEvent event) {
		Window.alert("Not implemented");
	}

	@UiHandler("tracingPaper")
	void onTracingPaperClick(ClickEvent event) {
		ClientFactoryImpl.getInstance().getEventBus().fireEvent(new TracingPaperEvent());
	}

	@UiHandler("connexion")
	void onConnexionClick(ClickEvent event) {
		ClientFactoryImpl.getInstance().getEventBus().fireEvent(new SignInEvent());
	}
}
