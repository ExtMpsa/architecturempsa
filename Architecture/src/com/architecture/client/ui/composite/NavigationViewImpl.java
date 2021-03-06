package com.architecture.client.ui.composite;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.mvp.AppToken;
import com.architecture.client.place.SignInPlace;
import com.architecture.client.place.SignUpPlace;
import com.architecture.client.resources.ResourcesNavigation;
import com.architecture.client.resources.txt.NavigationText;
import com.architecture.client.ui.widget.Anchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Document;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.place.shared.Place;
import com.google.gwt.storage.client.Storage;
import com.google.gwt.storage.client.StorageMap;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

public class NavigationViewImpl extends Composite {

	private static NavigationViewImplUiBinder uiBinder = GWT.create(NavigationViewImplUiBinder.class);
	@UiField
	HTMLPanel wrapper;
	@UiField
	HTMLPanel content;
	@UiField
	Anchor training;
	@UiField
	Anchor webApp;
	@UiField
	Anchor performance;
	@UiField
	Anchor seo;
	@UiField
	Anchor webAnalytics;
	@UiField
	Anchor userExperience;
	@UiField
	Anchor signUp;
	@UiField
	Anchor signIn;
	@UiField
	HTMLPanel navRight;
	@UiField
	Anchor methodology;
	@UiField
	Anchor tools;
	@UiField
	HTMLPanel navLeft;
	@UiField
	Anchor accountSetting;
	@UiField
	Anchor disconnection;

	interface NavigationViewImplUiBinder extends UiBinder<Widget, NavigationViewImpl> {
	}

	public NavigationViewImpl() {
		ResourcesNavigation.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	private void init() {
		NavigationText navigationText = GWT.create(NavigationText.class);

		training.setText(navigationText.training().toUpperCase());
		training.setHash("#" + AppToken.TRAINING.getToken());
		training.getElement().setId("training");

		webApp.setText(navigationText.webApp().toUpperCase());
		webApp.setHash("#" + AppToken.WEBAPPLICATION.getToken());
		webApp.getElement().setId("webApp");

		performance.setText(navigationText.performance().toUpperCase());
		performance.setHash("#" + AppToken.PERFORMANCE.getToken());
		performance.getElement().setId("performance");

		seo.setText(navigationText.seo().toUpperCase());
		seo.setHash("#" + AppToken.SEO.getToken());
		seo.getElement().setId("seo");

		webAnalytics.setText(navigationText.webAnalytics().toUpperCase());
		webAnalytics.setHash("#" + AppToken.WEBANALYTICS.getToken());
		webAnalytics.getElement().setId("webAnalytics");

		tools.setText(navigationText.tools().toUpperCase());
		tools.setHash("#" + AppToken.TOOLS.getToken());
		tools.getElement().setId("tools");

		methodology.setText(navigationText.methodology().toUpperCase());
		methodology.setHash("#" + AppToken.METHODS.getToken());
		methodology.getElement().setId("methodology");

		userExperience.setText(navigationText.userExperience().toUpperCase());
		userExperience.setHash("#" + AppToken.UX.getToken());
		userExperience.getElement().setId("userExperience");

		signUp.setText(navigationText.signUp().toUpperCase());
		signUp.setHash("#" + AppToken.SIGNUPLOGIN.getToken());
		signUp.getElement().setId("signUp");
		signUp.getElement().addClassName("signUp");

		signIn.setText(navigationText.signIn().toUpperCase());
		signIn.setHash("#" + AppToken.SIGNIN.getToken());
		signIn.getElement().setId("signIn");

		accountSetting.setText(navigationText.settings().toUpperCase());
		accountSetting.setHash("#" + AppToken.ACCOUNTSETTING.getToken());
		accountSetting.getElement().setId("parameter");

		disconnection.setText(navigationText.disconnection().toUpperCase());
		disconnection.setHash("#");
		disconnection.getElement().setId("disconnection");

		connected(ClientFactoryImpl.getInstance().isUserConnected());
	}

	public void connected(boolean userConnected) {
		if (userConnected) {
			signIn.setVisible(false);
			signUp.setVisible(false);
			accountSetting.setVisible(true);
			disconnection.setVisible(true);
		} else {
			signIn.setVisible(true);
			signUp.setVisible(true);
			accountSetting.setVisible(false);
			disconnection.setVisible(false);
		}
	}

	public void selected(AppToken token) {
		removeClassSelected();
		switch (token) {
		case ACCOUNTSETTING:
			accountSetting.getElement().addClassName("selected");
			break;
		case HOME:
			// Do nothing
			break;
		case METHODS:
			methodology.getElement().addClassName("selected");
			break;
		case PERFORMANCE:
			performance.getElement().addClassName("selected");
			break;
		case SEO:
			seo.getElement().addClassName("selected");
			break;
		case SIGNIN:
			signIn.getElement().addClassName("selected");
			break;
		case SIGNUP:
			signUp.getElement().addClassName("selected");
			break;
		case SIGNUPLOGIN:
			signUp.getElement().addClassName("selected");
			break;
		case SIGNUPPASSWORD:
			signUp.getElement().addClassName("selected");
			break;
		case SIGNUPPASSWORDVERIFY:
			signUp.getElement().addClassName("selected");
			break;
		case TOOLS:
			tools.getElement().addClassName("selected");
			break;
		case TRACINGPAPER:
			break;
		case TRAINING:
			training.getElement().addClassName("selected");
			break;
		case UX:
			userExperience.getElement().addClassName("selected");
			break;
		case WEBANALYTICS:
			webAnalytics.getElement().addClassName("selected");
			break;
		case WEBAPPLICATION:
			webApp.getElement().addClassName("selected");
			break;
		default:
			break;
		}
	}

	private void removeClassSelected() {
		training.getElement().removeClassName("selected");
		webApp.getElement().removeClassName("selected");
		performance.getElement().removeClassName("selected");
		seo.getElement().removeClassName("selected");
		webAnalytics.getElement().removeClassName("selected");
		tools.getElement().removeClassName("selected");
		methodology.getElement().removeClassName("selected");
		userExperience.getElement().removeClassName("selected");
		signUp.getElement().removeClassName("selected");
		signIn.getElement().removeClassName("selected");
		accountSetting.getElement().removeClassName("selected");
	}

	public void disconnect() {
		Storage storage = Storage.getLocalStorageIfSupported();
		final String connected = "connected";
		String mail = "";
		if (storage != null) {
			StorageMap stockMap = new StorageMap(storage);
			if (stockMap.containsKey(connected) == true) {
				mail = storage.getItem(connected);
			}
			storage.removeItem(mail);
			storage.removeItem(connected);
		}
		connected(false);
	}

	@UiHandler("training")
	void onTrainingClick(ClickEvent event) {
		// Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
		// if (!loaderExist() && !(current instanceof HomePlace)) {
		// RootPanel.get().insert(new LoaderViewImpl(), 0);
		// }
	}

	@UiHandler("webApp")
	void onWebAppClick(ClickEvent event) {
		// Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
		// if (!loaderExist() && !(current instanceof FormsPlace)) {
		// RootPanel.get().insert(new LoaderViewImpl(), 0);
		// }
	}

	@UiHandler("performance")
	void onPerformanceClick(ClickEvent event) {
		// Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
		// if (!loaderExist() && !(current instanceof FormsPlace)) {
		// RootPanel.get().insert(new LoaderViewImpl(), 0);
		// }
	}

	@UiHandler("seo")
	void onSeoClick(ClickEvent event) {
		// Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
		// if (!loaderExist() && !(current instanceof TracingPaperPlace)) {
		// RootPanel.get().insert(new LoaderViewImpl(), 0);
		// }
	}

	@UiHandler("webAnalytics")
	void onWebAnalyticsClick(ClickEvent event) {
		// Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
		// if (!loaderExist() && !(current instanceof SignInPlace)) {
		// RootPanel.get().insert(new LoaderViewImpl(), 0);
		// }
	}

	@UiHandler("tools")
	void onToolsClick(ClickEvent event) {
	}

	@UiHandler("methodology")
	void onMethodologyClick(ClickEvent event) {
	}

	@UiHandler("userExperience")
	void onUserExperienceClick(ClickEvent event) {
		// Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
		// if (!loaderExist() && !(current instanceof SignInPlace)) {
		// RootPanel.get().insert(new LoaderViewImpl(), 0);
		// }
	}

	@UiHandler("signUp")
	void onSignUpClick(ClickEvent event) {
		Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
		if (!loaderExist() && !(current instanceof SignUpPlace)) {
			RootPanel.get().insert(new LoaderViewImpl(), 0);
		}
	}

	@UiHandler("signIn")
	void onSignInClick(ClickEvent event) {
		Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
		if (!loaderExist() && !(current instanceof SignInPlace)) {
			RootPanel.get().insert(new LoaderViewImpl(), 0);
		}
	}

	@UiHandler("disconnection")
	void onDisconnectionClick(ClickEvent event) {
		disconnect();
	}

	@UiHandler("accountSetting")
	void onAccountSettingClick(ClickEvent event) {
	}

	private boolean loaderExist() {
		boolean check = true;
		if (Document.get().getElementById("loader") != null) {
			check = true;
		} else {
			check = false;
		}
		return check;
	}
}
