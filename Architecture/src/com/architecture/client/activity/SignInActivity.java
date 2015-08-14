package com.architecture.client.activity;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.architecture.client.ClientFactory;
import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.event.SignInEvent;
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
		SignInView signInView = clientFactory.getSignInView();
		signInView.setAccountToSignIn(account);
		signInView.setActivity(this);
		if (account.getMail().equals("")) {
			signInView.resetLoginError();
		}
		if (account.getPassword().equals("")) {
			signInView.resetPasswordError();
		}
		containerWidget.setWidget(signInView.asWidget());
		clientFactory.getEventBus().fireEvent(new SignInEvent());
		removeLoader();
	}

	@Override
	public void goTo(Place place) {
		clientFactory.getPlaceController().goTo(place);
	}

	public boolean validateMailClient(String mail) {
		boolean validate = false;
		account.setMail(mail);
		Set<ConstraintViolation<Account>> violations = ClientFactoryImpl.getInstance().getValidator().validateProperty(account, "mail");
		if (violations.isEmpty()) {
			validate = true;
		} else {
			validate = false;
		}
		return validate;
	}

	public Set<ConstraintViolation<Account>> validatePasswordClient(String password) {
		account.setPassword(password);
		Set<ConstraintViolation<Account>> violations = ClientFactoryImpl.getInstance().getValidator().validateProperty(account, "password");
		return violations;
	}

	public boolean validateAccountClient() {
		boolean validate = false;
		Set<ConstraintViolation<Account>> violations = ClientFactoryImpl.getInstance().getValidator().validate(account);
		if (violations.isEmpty()) {
			validate = true;
		} else {
			validate = false;
			for (ConstraintViolation<Account> constraintViolation : violations) {
				switch (constraintViolation.getPropertyPath().toString()) {
				case "mail":
					break;
				case "password":
					break;
				}
			}
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
