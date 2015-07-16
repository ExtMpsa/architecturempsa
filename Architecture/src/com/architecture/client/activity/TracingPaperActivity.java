package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.event.PageViewEvent;
import com.architecture.client.place.TracingPaperPlace;
import com.architecture.client.ui.TracingPaperView;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class TracingPaperActivity extends ArchitectureActivity {
	private ClientFactory clientFactory;

	public TracingPaperActivity(TracingPaperPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		TracingPaperView tracingPaperView = this.clientFactory.getTracingPaperView();
		tracingPaperView.setActivity(this);
		containerWidget.setWidget(tracingPaperView.asWidget());
		removeLoader();
		clientFactory.getEventBus().fireEvent(new PageViewEvent());
	}

	@Override
	public void goTo(Place place) {
		this.clientFactory.getPlaceController().goTo(place);
	}

}
