package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.event.PageViewEvent;
import com.architecture.client.place.HomePlace;
import com.architecture.client.ui.HomeView;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class HomeActivity extends ArchitectureActivity {
	private ClientFactory clientFactory;

	public HomeActivity(HomePlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		HomeView homeView = this.clientFactory.getHomeView();
		homeView.setActivity(this);
		containerWidget.setWidget(homeView.asWidget());
		removeLoader();
		clientFactory.getEventBus().fireEvent(new PageViewEvent());
	}

	@Override
	public void goTo(Place place) {
		this.clientFactory.getPlaceController().goTo(place);
	}
}
