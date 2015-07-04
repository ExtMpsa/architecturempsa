package com.architecture.client.ui.composite;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.place.FormsPlace;
import com.architecture.client.place.HomePlace;
import com.architecture.client.place.SignInPlace;
import com.architecture.client.place.TracingPaperPlace;
import com.architecture.client.resources.txt.MenuText;
import com.architecture.client.ui.widget.Anchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Document;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.place.shared.Place;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.RootPanel;
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

		home.setText(menuText.home());
		home.setHash("#!HomePlace:");
		home.getElement().setId("home");

		formMultipleUrl.setText(menuText.formMultipleUrl());
		formMultipleUrl.setHash("#!FormsPlace:step1");
		formMultipleUrl.getElement().setId("formMultipleUrl");

		formSingleUrl.setText(menuText.formSingleUrl());
		formSingleUrl.setHash("#!FormsPlace:");
		formSingleUrl.getElement().setId("formSingleUrl");

		eCommerce.setText(menuText.eCommerce());
		eCommerce.getElement().setId("eCommerce");

		iFrame.setText(menuText.iFrame());
		iFrame.getElement().setId("iFrame");

		tracingPaper.setText(menuText.tracingPaper());
		tracingPaper.setHash("#!TracingPaperPlace:");
		tracingPaper.getElement().setId("tracingPaper");

		connexion.setText(menuText.connexion());
		connexion.setHash("#!SignInPlace:");
		connexion.getElement().setId("connexion");
	}
	@UiHandler("home")
	void onHomeClick(ClickEvent event) {
		Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
		if(!loaderExist() && !(current instanceof HomePlace)){
			RootPanel.get().insert(new LoaderViewImpl(), 0);
		}
	}
	@UiHandler("formMultipleUrl")
	void onFormMultipleUrlClick(ClickEvent event) {
		Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
		if(!loaderExist() && !(current instanceof FormsPlace)){
			RootPanel.get().insert(new LoaderViewImpl(), 0);
		}
	}
	
	@UiHandler("formSingleUrl")
	void onFormSingleUrlClick(ClickEvent event) {
		Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
		if(!loaderExist() && !(current instanceof FormsPlace)){
			RootPanel.get().insert(new LoaderViewImpl(), 0);
		}
	}
	@UiHandler("tracingPaper")
	void onTracingPaperClick(ClickEvent event) {
		Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
		if(!loaderExist() && !(current instanceof TracingPaperPlace)){
			RootPanel.get().insert(new LoaderViewImpl(), 0);
		}
	}
	@UiHandler("connexion")
	void onConnexionClick(ClickEvent event) {
		Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
		if(!loaderExist() && !(current instanceof SignInPlace)){
			RootPanel.get().insert(new LoaderViewImpl(), 0);
		}
	}

	private boolean loaderExist(){
		boolean check = true;
		if (Document.get().getElementById("loader") != null){
			check = true;
		}else{
			check = false;
		}
		return check;
	}
}
