package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.place.TrainingPlace;
import com.architecture.client.ui.TrainingViewImpl;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class TrainingActivity extends ArchitectureActivity {
	private ClientFactory clientFactory;

	public TrainingActivity(TrainingPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		TrainingViewImpl templateView = new TrainingViewImpl();
		templateView.setActivity(this);
		containerWidget.setWidget(templateView.asWidget());
		removeLoader();
	}

	@Override
	public void goTo(Place place) {
		this.clientFactory.getPlaceController().goTo(place);
	}
}
