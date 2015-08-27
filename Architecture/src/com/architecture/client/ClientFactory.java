package com.architecture.client;

import java.util.HashMap;

import javax.validation.Validator;

import com.architecture.client.ui.ArchitectureView;
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

	Validator getValidator();

	/*
	 * Models
	 */
	void setAccountToCreate(Account account);

	Account getAccountToCreate();

	void setAccountToSignIn(Account account);

	Account getAccountToSignIn();

	HashMap<String, String> getMailAlreadyChecked();

	void setMailAlreadyChecked(HashMap<String, String> mailAlreadyChecked);

	/*
	 * Views
	 */
	BannerLanguageViewImpl getLanguageView();

	BannerViewImpl getBannerView();

	NavigationViewImpl getNavigationView();

	BreadCrumbViewImpl getBreadCrumbView();

	HomeView getHomeView();

	TracingPaperView getTracingPaperView();

	ArchitectureView getArchitectureView();

	SignInView getSignInView();

	/*
	 * Utilities
	 */
	boolean isUserConnected();

	/*
	 * Google Tag Manager
	 */
	void eventGtm(String description, String launcher);
}
