package com.architecture.client.mvp;

import com.architecture.client.ClientFactory;
import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.activity.SignUpActivity;
import com.architecture.client.activity.EPrivacyActivity;
import com.architecture.client.activity.FormsActivity;
import com.architecture.client.activity.HomeActivity;
import com.architecture.client.activity.SignInActivity;
import com.architecture.client.activity.TracingPaperActivity;
import com.architecture.client.place.SignUpPlace;
import com.architecture.client.place.EPrivacyPlace;
import com.architecture.client.place.FormsPlace;
import com.architecture.client.place.HomePlace;
import com.architecture.client.place.SignInPlace;
import com.architecture.client.place.TracingPaperPlace;
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
		pushKrux();

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
		} else if (place instanceof SignUpPlace) {
			activity = new SignUpActivity((SignUpPlace) place, clientFactory);
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

	public static double getRandom() {
		return random;
	}

	public static native void getActivityStartTime() /*-{
		$wnd["getActivityStartTime"] = new Date().getTime();
	}-*/;

	public void pushKrux() {
		random = Math.random() * 100;
		if (random < 30) {
			pushRealTimeKrux(random);
		} else if (random < 60) {
			pushNonRealTimeKrux(random);
		} else {
			pushWithoutKrux(random);
		}
	}

	public static native void pushRealTimeKrux(double time) /*-{
		$wnd["dateDDM"] = new Date().getTime();
		$wnd["useCase"] = "Utilisation par le Moteur de Perso des segments Cross-Domain temps réels fournis par la DMP";
		$wnd["dmpTime"] = time;
	}-*/;

	public static native void pushNonRealTimeKrux(double time) /*-{
		$wnd["dateDDM"] = new Date().getTime();
		$wnd["useCase"] = "Utilisation par le Moteur de Perso des segments temps réel du même domaine et des segments Cross-Domain fournis (par la DMP) sur la page précédente.";
		$wnd["dmpTime"] = time;
	}-*/;

	public static native void pushWithoutKrux(double time) /*-{
		$wnd["dateDDM"] = new Date().getTime();
		$wnd["useCase"] = "Utilisation du Moteur de Perso sans les segments de la DMP.";
		$wnd["dmpTime"] = time;
	}-*/;

}