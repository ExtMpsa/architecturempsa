package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.place.SignInPlace;
import com.architecture.client.ui.account.SignInView;
import com.architecture.shared.model.Account;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class SignInActivity extends ArchitectureActivity {
	private ClientFactory clientFactory;
	private Account account = GWT.create(Account.class);
	
	public SignInActivity(SignInPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
		if (clientFactory.getAccountToSignIn() != null) {
			account = clientFactory.getAccountToSignIn();
		} else {
			account = new Account();
			clientFactory.setAccountToSignIn(account);
		}
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		SignInView signInView = this.clientFactory.getSignInView();
		signInView.setAccountToSignIn(account);
		signInView.setActivity(this);
		containerWidget.setWidget(signInView.asWidget());
		removeLoader();
	}

	@Override
	public void goTo(Place place) {
		this.clientFactory.getPlaceController().goTo(place);
	}
}
