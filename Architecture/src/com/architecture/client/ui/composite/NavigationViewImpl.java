package com.architecture.client.ui.composite;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.place.CreateAccountPlace;
import com.architecture.client.place.SignInPlace;
import com.architecture.client.resources.txt.NavigationText;
import com.architecture.client.ui.widget.Anchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Document;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.place.shared.Place;
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

	interface NavigationViewImplUiBinder extends UiBinder<Widget, NavigationViewImpl> {
	}

	public NavigationViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	private void init() {
		NavigationText navigationText = GWT.create(NavigationText.class);

		training.setText(navigationText.training());
		training.setHash("#!TrainingPlace:");
		training.getElement().setId("training");

		webApp.setText(navigationText.webApp());
		webApp.setHash("#!WebApplication:");
		webApp.getElement().setId("webApp");

		performance.setText(navigationText.performance());
		performance.setHash("#!PerformancePlace:");
		performance.getElement().setId("performance");

		seo.setText(navigationText.seo());
		seo.setHash("#!SEOPlace:");
		seo.getElement().setId("seo");

		webAnalytics.setText(navigationText.webAnalytics());
		webAnalytics.setHash("#!WebAnalyticsPlace:");
		webAnalytics.getElement().setId("webAnalytics");

		userExperience.setText(navigationText.userExperience());
		userExperience.setHash("#!UserExperiencePlace:");
		userExperience.getElement().setId("userExperience");

		signUp.setText(navigationText.signUp());
		signUp.setHash("#!SignUpPlace:");
		signUp.getElement().setId("signUp");

		signIn.setText(navigationText.signIn());
		signIn.setHash("#!SignInPlace:");
		signIn.getElement().setId("signIn");

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
		if (!loaderExist() && !(current instanceof CreateAccountPlace)) {
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
