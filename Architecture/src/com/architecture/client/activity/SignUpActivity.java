package com.architecture.client.activity;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.architecture.client.ClientFactory;
import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.event.HomeEvent;
import com.architecture.client.place.SignUpPlace;
import com.architecture.client.ui.account.SignUpPasswordViewImpl;
import com.architecture.client.ui.account.SignUpView;
import com.architecture.client.ui.account.SignUpViewImpl;
import com.architecture.shared.model.Account;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class SignUpActivity extends ArchitectureActivity {
	private ClientFactory clientFactory;
	String step;
	private Account account = GWT.create(Account.class);
	private AcceptsOneWidget containerWidget;

	public SignUpActivity(SignUpPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
		step = place.getCreateAccountStep();
		if (clientFactory.getAccountToCreate() != null) {
			account = clientFactory.getAccountToCreate();
		} else {
			account = new Account();
			clientFactory.setAccountToCreate(account);
		}
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		this.containerWidget = containerWidget;
		setStep(step);
		clientFactory.getEventBus().fireEvent(new HomeEvent());
		removeLoader();
	}

	@Override
	public void goTo(Place place) {
		clientFactory.getPlaceController().goTo(place);
	}

	public void setStep(String step) {
		SignUpView signUpView;
		if (step.equalsIgnoreCase("password") && validateMailClient(clientFactory.getAccountToCreate().getMail())) {
			// Window.Location.replace(Window.Location.getHref().replaceFirst(History.getToken(), "!CreateAccountPlace:password"));
			if (!step.equals("password")) {
				ClientFactoryImpl.redirect = true;
				if (!ClientFactoryImpl.isLoaded()) {
					ClientFactoryImpl.redirectFirstLoad = true;
				}
				historyReplaceState("!SignUp:password");
			}
			signUpView = new SignUpPasswordViewImpl();
		} else if (step.equalsIgnoreCase("passwordVerify") && validateMailClient(clientFactory.getAccountToCreate().getMail())
				&& validatePasswordClient(clientFactory.getAccountToCreate().getPassword()).isEmpty()) {
			// Window.Location.replace(Window.Location.getHref().replaceFirst(History.getToken(), "!SignUp:passwordVerify"));
			if (!step.equals("passwordVerify")) {
				ClientFactoryImpl.redirect = true;
				if (!ClientFactoryImpl.isLoaded()) {
					ClientFactoryImpl.redirectFirstLoad = true;
				}
				historyReplaceState("!SignUp:passwordVerify");
			}
			signUpView = new SignUpPasswordViewImpl();
		} else {
			// Window.Location.replace(Window.Location.getHref().replaceFirst(History.getToken(), "!SignUp:login"));
			if (!step.equals("login")) {
				ClientFactoryImpl.redirect = true;
				if (!ClientFactoryImpl.isLoaded()) {
					ClientFactoryImpl.redirectFirstLoad = true;
				}
				historyReplaceState("!SignUp:login");
			}
			signUpView = new SignUpViewImpl();
		}
		signUpView.setAccount(account);
		signUpView.setActivity(this);
		containerWidget.setWidget(signUpView.asWidget());
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
		clientFactory.setAccountToCreate(account);
	}

	public void setAccountToSignIn(Account account) {
		account.setPassword(null);
		clientFactory.setAccountToSignIn(account);
	}

	@Override
	public void removeLoader() {
		Element loader = Document.get().getElementById("loader");
		if (loader != null) {
			loader.removeFromParent();
		}
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

	public native void historyReplaceState(String token) /*-{
		$wnd.history.replaceState("", "", "#" + token);
	}-*/;
}
