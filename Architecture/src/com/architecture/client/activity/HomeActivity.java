package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.event.ActivityEvent;
import com.architecture.client.mvp.AppToken;
import com.architecture.client.place.HomePlace;
import com.architecture.client.ui.HomeView;
import com.google.gwt.event.shared.EventBus;
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
		clientFactory.getEventBus().fireEvent(new ActivityEvent(AppToken.HOME));
		removeLoader();
	}
}
