package com.architecture.client.activity;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.architecture.client.ClientFactory;
import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.place.CreateAccountPlace;
import com.architecture.client.ui.createaccount.CreateAccountPasswordViewImpl;
import com.architecture.client.ui.createaccount.CreateAccountView;
import com.architecture.client.ui.createaccount.CreateAccountViewImpl;
import com.architecture.shared.model.Account;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class CreateAccountActivity extends ArchitectureActivity {
	private ClientFactory clientFactory;
	String step;
	private Account account = GWT.create(Account.class);
	private AcceptsOneWidget containerWidget;

	public CreateAccountActivity(CreateAccountPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
		step = place.getCreateAccountStep();
		if (clientFactory.getAccount() != null) {
			account = clientFactory.getAccount();
		} else {
			account = new Account();
			clientFactory.setAccount(account);
		}

	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		this.containerWidget = containerWidget;
		setStep(step);
	}

	@Override
	public void goTo(Place place) {
		this.clientFactory.getPlaceController().goTo(place);
	}

	public void setStep(String step) {
		CreateAccountView createAccountView;
		if (step.equalsIgnoreCase("password")) {
			Window.Location.replace(Window.Location.getHref().replaceFirst(History.getToken(), "!CreateAccountPlace:password"));
			createAccountView = new CreateAccountPasswordViewImpl();
		} else if (step.equalsIgnoreCase("passwordVerify")) {
			Window.Location.replace(Window.Location.getHref().replaceFirst(History.getToken(), "!CreateAccountPlace:passwordVerify"));
			createAccountView = new CreateAccountPasswordViewImpl();
		} else {
			Window.Location.replace(Window.Location.getHref().replaceFirst(History.getToken(), "!CreateAccountPlace:login"));
			createAccountView = new CreateAccountViewImpl();
		}
		createAccountView.setAccount(account);
		createAccountView.setActivity(this);
		removeLoader();
		containerWidget.setWidget(createAccountView.asWidget());
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
		clientFactory.setAccount(account);
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
}
