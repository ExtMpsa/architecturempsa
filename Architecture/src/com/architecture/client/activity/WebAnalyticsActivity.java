package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.event.ActivityEvent;
import com.architecture.client.mvp.AppToken;
import com.architecture.client.place.WebAnalyticsPlace;
import com.architecture.client.ui.webanalytics.WebAnalyticsViewImpl;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class WebAnalyticsActivity extends ArchitectureActivity {
	private ClientFactory clientFactory;

	public WebAnalyticsActivity(WebAnalyticsPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		WebAnalyticsViewImpl webAnalyticsView = new WebAnalyticsViewImpl();
		containerWidget.setWidget(webAnalyticsView.asWidget());
		clientFactory.getEventBus().fireEvent(new ActivityEvent(AppToken.WEBANALYTICS));
		removeLoader();
	}
}
