package com.architecture.client.ui.composite;

import com.architecture.client.resources.txt.MenuText;
import com.architecture.client.ui.widget.Anchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

public class MenuViewImpl extends Composite {

	private static MenuViewImplUiBinder uiBinder = GWT.create(MenuViewImplUiBinder.class);
	@UiField
	Anchor formMultipleUrl;
	@UiField
	Anchor formSingleUrl;
	@UiField
	Anchor eCommerce;
	@UiField
	Anchor iFrame;
	@UiField
	Anchor tracingPaper;
	@UiField
	Anchor connexion;
	@UiField
	Anchor home;

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
		String url = Window.Location.getHref();
		String pathWithParameterWithoutHash = url.substring(url.indexOf(Window.Location.getPath()));
		if (!Window.Location.getHash().equalsIgnoreCase("")) {
			pathWithParameterWithoutHash = url.substring(url.indexOf(Window.Location.getPath()), url.indexOf(Window.Location.getHash()));
		}

		home.setText(menuText.home());
		home.setHref(pathWithParameterWithoutHash + "#HomePlace:");
		home.getElement().setId("home");

		formMultipleUrl.setText(menuText.formMultipleUrl());
		formMultipleUrl.setHref(pathWithParameterWithoutHash + "#FormsPlace:step1");
		formMultipleUrl.getElement().setId("formMultipleUrl");

		formSingleUrl.setText(menuText.formSingleUrl());
		formSingleUrl.setHref(pathWithParameterWithoutHash + "#FormsPlace:");
		formSingleUrl.getElement().setId("formSingleUrl");

		eCommerce.setText(menuText.eCommerce());
		eCommerce.getElement().setId("eCommerce");

		iFrame.setText(menuText.iFrame());
		iFrame.getElement().setId("iFrame");

		tracingPaper.setText(menuText.tracingPaper());
		tracingPaper.setHref(pathWithParameterWithoutHash + "#TracingPaperPlace:");
		tracingPaper.getElement().setId("tracingPaper");

		connexion.setText(menuText.connexion());
		connexion.setHref(pathWithParameterWithoutHash + "#SignInPlace:");
		connexion.getElement().setId("connexion");
	}
}
