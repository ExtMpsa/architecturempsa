package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.place.CreateAccountPlace;
import com.architecture.client.ui.CreateAccountView;
import com.architecture.client.ui.CreateAccountViewImpl;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class CreateAccountActivity extends ArchitectureActivity {
	private ClientFactory clientFactory;

	public CreateAccountActivity(CreateAccountPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		CreateAccountView createAccountView = new CreateAccountViewImpl();
		createAccountView.setActivity(this);
		containerWidget.setWidget(createAccountView.asWidget());
		removeLoader();
	}

	@Override
	public void goTo(Place place) {
		this.clientFactory.getPlaceController().goTo(place);
	}
}