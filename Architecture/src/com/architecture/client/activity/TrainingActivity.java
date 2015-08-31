package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.event.TrainingEvent;
import com.architecture.client.place.TrainingPlace;
import com.architecture.client.ui.TrainingViewImpl;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class TrainingActivity extends ArchitectureActivity {
	private String token;
	private ClientFactory clientFactory;

	public TrainingActivity(TrainingPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
		this.token = place.getToken();
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		TrainingViewImpl templateView = new TrainingViewImpl();
		templateView.setActivity(this);
		if (!token.equals("")) {
			templateView.setAside(token);
		}
		containerWidget.setWidget(templateView.asWidget());
		clientFactory.getEventBus().fireEvent(new TrainingEvent());
		removeLoader();
	}
}
