package com.architecture.client.activity;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.architecture.client.ClientFactory;
import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.event.ActivityEvent;
import com.architecture.client.mvp.AppToken;
import com.architecture.client.place.AccountParamsPlace;
import com.architecture.client.ui.account.AccountParamsView;
import com.architecture.client.ui.account.AccountParamsViewImpl;
import com.architecture.shared.model.GoogleTagManager;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class AccountParamsActivity extends ArchitectureActivity {
	private ClientFactory clientFactory;
	private GoogleTagManager gtm = GWT.create(GoogleTagManager.class);
	String token;

	public AccountParamsActivity(AccountParamsPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
		token = place.getToken();
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		AccountParamsView accountParamsView = new AccountParamsViewImpl();
		accountParamsView.setActivity(this);
		containerWidget.setWidget(accountParamsView.asWidget());
		switch (token) {
		case "":
			clientFactory.getEventBus().fireEvent(new ActivityEvent(AppToken.ACCOUNTSETTING));
			break;
		case "editGtm":
			accountParamsView.editGtm();
			clientFactory.getEventBus().fireEvent(new ActivityEvent(AppToken.ACCOUNTSETTINGEDITGTM));
			break;
		default:
			break;
		}
		removeLoader();
	}

	public ClientFactory getClientFactory() {
		return clientFactory;
	}

	public boolean validateGtmIdClient(String gtmId) {
		boolean validate = false;
		gtm.setGtmId(gtmId);
		Set<ConstraintViolation<GoogleTagManager>> violations = ClientFactoryImpl.getInstance().getValidator().validateProperty(gtm, "gtmId");
		if (violations.isEmpty()) {
			validate = true;
		} else {
			validate = false;
		}
		return validate;
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
