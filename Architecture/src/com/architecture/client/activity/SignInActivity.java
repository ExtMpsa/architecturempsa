package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.event.PageViewEvent;
import com.architecture.client.place.SignInPlace;
import com.architecture.client.ui.SignInView;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class SignInActivity extends ArchitectureActivity {
	private ClientFactory clientFactory;

	public SignInActivity(SignInPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		SignInView signInView = this.clientFactory.getSignInView();
		signInView.setActivity(this);
		containerWidget.setWidget(signInView.asWidget());
		removeLoader();
		clientFactory.getEventBus().fireEvent(new PageViewEvent());
	}

	@Override
	public void goTo(Place place) {
		this.clientFactory.getPlaceController().goTo(place);
	}
}
