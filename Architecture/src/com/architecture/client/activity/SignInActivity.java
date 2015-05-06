package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.place.SignInPlace;
import com.architecture.client.ui.SignInView;
import com.google.gwt.activity.shared.AbstractActivity;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class SignInActivity extends AbstractActivity implements Activity {
	private ClientFactory clientFactory;

	public SignInActivity(SignInPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		SignInView signInView = clientFactory.getSignInView();
		signInView.setActivity(this);
		containerWidget.setWidget(signInView.asWidget());
		// temps d'affichage poussé dans le dataLayer
		clientFactory.eventGtm(this.getClass().toString());
	}

	@Override
	public void goTo(Place place) {
		clientFactory.getPlaceController().goTo(place);
	}
}
