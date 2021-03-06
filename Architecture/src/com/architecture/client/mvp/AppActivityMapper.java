package com.architecture.client.mvp;

import com.architecture.client.ClientFactory;
import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.activity.AccountParamsActivity;
import com.architecture.client.activity.HomeActivity;
import com.architecture.client.activity.SignInActivity;
import com.architecture.client.activity.SignUpActivity;
import com.architecture.client.activity.TracingPaperActivity;
import com.architecture.client.activity.TrainingActivity;
import com.architecture.client.activity.WebAnalyticsActivity;
import com.architecture.client.place.AccountParamsPlace;
import com.architecture.client.place.HomePlace;
import com.architecture.client.place.SignInPlace;
import com.architecture.client.place.SignUpPlace;
import com.architecture.client.place.TracingPaperPlace;
import com.architecture.client.place.TrainingPlace;
import com.architecture.client.place.WebAnalyticsPlace;
import com.google.gwt.activity.shared.Activity;
import com.google.gwt.activity.shared.ActivityMapper;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.place.shared.Place;

public class AppActivityMapper implements ActivityMapper {
	private ClientFactory clientFactory;
	private static double random;

	public AppActivityMapper(ClientFactory clientFactory) {
		super();
		this.clientFactory = clientFactory;
	}

	@Override
	public Activity getActivity(Place place) {
		// Première instruction lors d'un chargement ajax suite à une modification d'url.
		if (!ClientFactoryImpl.redirect) {
			getActivityStartTime();
		}

		Activity activity = null;
		if (place instanceof HomePlace) {
			activity = new HomeActivity((HomePlace) place, clientFactory);
		} else if (place instanceof SignInPlace) {
			activity = new SignInActivity((SignInPlace) place, clientFactory);
		} else if (place instanceof SignUpPlace) {
			activity = new SignUpActivity((SignUpPlace) place, clientFactory);
		} else if (place instanceof TrainingPlace) {
			activity = new TrainingActivity((TrainingPlace) place, clientFactory);
		} else if (place instanceof WebAnalyticsPlace) {
			activity = new WebAnalyticsActivity((WebAnalyticsPlace) place, clientFactory);
		} else if (place instanceof AccountParamsPlace) {
			activity = new AccountParamsActivity((AccountParamsPlace) place, clientFactory);
		} else if (place instanceof TracingPaperPlace) {
			activity = new TracingPaperActivity((TracingPaperPlace) place, clientFactory);
		} else {
			removeLoader();
		}
		clientFactory.eventGtm("Récupération de la vue", this.getClass().toString());
		ClientFactoryImpl.redirectFirstLoad = false;
		return activity;
	}

	public void removeLoader() {
		Element loader = Document.get().getElementById("loader");
		if (loader != null) {
			loader.removeFromParent();
		}
	}

	public static native void getActivityStartTime() /*-{
		$wnd["getActivityStartTime"] = new Date().getTime();
	}-*/;
}