package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.event.AccountParamsEvent;
import com.architecture.client.place.AccountParamsPlace;
import com.architecture.client.ui.account.AccountParamsView;
import com.architecture.client.ui.account.AccountParamsViewImpl;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class AccountParamsActivity extends ArchitectureActivity {
	private ClientFactory clientFactory;

	public AccountParamsActivity(AccountParamsPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		AccountParamsView accountParamsView = new AccountParamsViewImpl();
		accountParamsView.setActivity(this);
		containerWidget.setWidget(accountParamsView.asWidget());
		clientFactory.getEventBus().fireEvent(new AccountParamsEvent());
		removeLoader();
	}

	@Override
	public void goTo(Place place) {
		clientFactory.getPlaceController().goTo(place);
	}

	public ClientFactory getClientFactory() {
		return clientFactory;
	}

	public native void pushEvent(String event, String category, String action, String label) /*-{
		$wnd["dataLayer"] = $wnd["dataLayer"] || [];
		$wnd.dataLayer.push({
			event : event,
			eventCategory : category,
			eventAction : action,
			eventLabel : label
		});
	}-*/;
}
