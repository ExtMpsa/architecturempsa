package com.architecture.client.mvp;

import com.architecture.client.ClientFactory;
import com.architecture.client.activity.EPrivacyActivity;
import com.architecture.client.activity.FormsActivity;
import com.architecture.client.activity.HomeActivity;
import com.architecture.client.activity.SignInActivity;
import com.architecture.client.activity.TracingPaperActivity;
import com.architecture.client.place.EPrivacyPlace;
import com.architecture.client.place.FormsPlace;
import com.architecture.client.place.HomePlace;
import com.architecture.client.place.SignInPlace;
import com.architecture.client.place.TracingPaperPlace;
import com.google.gwt.activity.shared.Activity;
import com.google.gwt.activity.shared.ActivityMapper;
import com.google.gwt.place.shared.Place;

public class AppActivityMapper implements ActivityMapper {
	private ClientFactory clientFactory;

	public AppActivityMapper(ClientFactory clientFactory) {
		super();
		this.clientFactory = clientFactory;
	}

	@Override
	public Activity getActivity(Place place) {
		// Première instruction lors d'un chargement ajax suite à une modification d'url.
		getActivityStartTime();

		Activity activity = null;

		if (place instanceof HomePlace) {
			activity = new HomeActivity((HomePlace) place, clientFactory);
		} else if (place instanceof FormsPlace) {
			activity = new FormsActivity((FormsPlace) place, clientFactory);
		} else if (place instanceof TracingPaperPlace) {
			activity = new TracingPaperActivity((TracingPaperPlace) place, clientFactory);
		} else if (place instanceof EPrivacyPlace) {
			activity = new EPrivacyActivity((EPrivacyPlace) place, clientFactory);
		} else if (place instanceof SignInPlace) {
			activity = new SignInActivity((SignInPlace) place, clientFactory);
		}
		clientFactory.eventGtm("getActivity", this.getClass().toString());
		return activity;
	}

	public static native void getActivityStartTime() /*-{
		$wnd["getActivityStartTime"] = new Date().getTime();
	}-*/;
}