package com.architecture.client;

import javax.validation.Validator;

import com.architecture.client.requestfactory.ArchitectureRequestFactory;
import com.architecture.client.ui.ArchitectureView;
import com.architecture.client.ui.FormsView;
import com.architecture.client.ui.HomeView;
import com.architecture.client.ui.SignInView;
import com.architecture.client.ui.TracingPaperView;
import com.architecture.client.ui.widget.BannerFlagViewImpl;
import com.architecture.client.ui.widget.BannerViewImpl;
import com.architecture.client.ui.widget.MenuViewImpl;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.PlaceController;

public interface ClientFactory {
	EventBus getEventBus();

	PlaceController getPlaceController();

	ArchitectureRequestFactory getArchitectureRequestFactory();

	Validator getValidator();

	/*
	 * Views
	 */
	HomeView getHomeView();

	BannerFlagViewImpl getBannerFlagView();

	BannerViewImpl getBannerView();

	MenuViewImpl getMenuView();

	FormsView getFormsView();

	TracingPaperView getTracingPaperView();

	ArchitectureView getArchitectureView();

	SignInView getSignInView();

	/*
	 * Google Tag Manager
	 */
	void eventGtm(String description, String launcher);
}
