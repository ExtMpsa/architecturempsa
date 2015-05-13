package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.place.EPrivacyPlace;
import com.architecture.client.ui.composite.EPrivacyViewImpl;
import com.google.gwt.activity.shared.AbstractActivity;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class EPrivacyActivity extends AbstractActivity implements Activity {
	private ClientFactory clientFactory;
	private String token;

	public EPrivacyActivity(EPrivacyPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
		this.token = place.getEPrivacyName();
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		EPrivacyViewImpl ePrivacyView = new EPrivacyViewImpl();
		ePrivacyView.setToken(this.token);
		containerWidget.setWidget(ePrivacyView.asWidget());
	}

	@Override
	public void goTo(Place place) {
		this.clientFactory.getPlaceController().goTo(place);
	}
}
