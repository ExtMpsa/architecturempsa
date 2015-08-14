package com.architecture.client;

import javax.validation.Validator;

import com.architecture.client.requestfactory.ArchitectureRequestFactory;
import com.architecture.client.ui.ArchitectureView;
import com.architecture.client.ui.FormsView;
import com.architecture.client.ui.HomeView;
import com.architecture.client.ui.TracingPaperView;
import com.architecture.client.ui.account.SignInView;
import com.architecture.client.ui.composite.BannerLanguageViewImpl;
import com.architecture.client.ui.composite.BannerViewImpl;
import com.architecture.client.ui.composite.BreadCrumbViewImpl;
import com.architecture.client.ui.composite.NavigationViewImpl;
import com.architecture.shared.model.Account;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.PlaceController;

public interface ClientFactory {
	EventBus getEventBus();

	PlaceController getPlaceController();

	ArchitectureRequestFactory getArchitectureRequestFactory();

	Validator getValidator();

	/*
	 * Models
	 */
	void setAccountToCreate(Account account);

	Account getAccountToCreate();

	void setAccountToSignIn(Account account);

	Account getAccountToSignIn();

	/*
	 * Views
	 */
	BannerLanguageViewImpl getLanguageView();

	BannerViewImpl getBannerView();

	NavigationViewImpl getNavigationView();

	BreadCrumbViewImpl getBreadCrumbView();

	HomeView getHomeView();

	FormsView getFormsView();

	TracingPaperView getTracingPaperView();

	ArchitectureView getArchitectureView();

	SignInView getSignInView();

	/*
	 * Google Tag Manager
	 */
	void eventGtm(String description, String launcher);
}
