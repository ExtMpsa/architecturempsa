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
		double random = Math.random();
		if (random < 0.3) {
			pushRealTimeKrux(random);
		} else if (random < 0.6) {
			pushNonRealTimeKrux(random);
		} else {
			pushWithoutKrux(random);
		}

		Activity activity = null;

		if (place instanceof HomePlace) {
			activity = new HomeActivity((HomePlace) place, this.clientFactory);
		} else if (place instanceof FormsPlace) {
			activity = new FormsActivity((FormsPlace) place, this.clientFactory);
		} else if (place instanceof TracingPaperPlace) {
			activity = new TracingPaperActivity((TracingPaperPlace) place, this.clientFactory);
		} else if (place instanceof EPrivacyPlace) {
			activity = new EPrivacyActivity((EPrivacyPlace) place, this.clientFactory);
		} else if (place instanceof SignInPlace) {
			activity = new SignInActivity((SignInPlace) place, this.clientFactory);
		}
		this.clientFactory.eventGtm("Récupération de la vue", this.getClass().toString());
		return activity;
	}

	public static native void getActivityStartTime() /*-{
		$wnd["getActivityStartTime"] = new Date().getTime();
	}-*/;

	public static native void pushRealTimeKrux(double time) /*-{
		$wnd.dataLayer
				.push({
					event : "time",
					time : time,
					tools : "real time cross domain segment",
					description : "Temps entre la mise à disposition des segments Cross Domain de Krux et le début du traitement de la page par le navigateur."
				});
	}-*/;

	public static native void pushNonRealTimeKrux(double time) /*-{
		$wnd.dataLayer
				.push({
					event : "time",
					time : time,
					tools : "non time cross domain segment",
					description : "Temps entre la mise à disposition des segments Cross Domain de Krux et le début du traitement de la page par le navigateur."
				});
	}-*/;

	public static native void pushWithoutKrux(double time) /*-{
		$wnd.dataLayer
				.push({
					event : "time",
					time : time,
					tools : "no segment",
					description : "Temps entre la mise à disposition des segments Cross Domain de Krux et le début du traitement de la page par le navigateur."
				});
	}-*/;

}