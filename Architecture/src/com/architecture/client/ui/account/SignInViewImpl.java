package com.architecture.client.ui.account;

import com.architecture.client.activity.SignInActivity;
import com.architecture.client.resources.ResourcesAccount;
import com.architecture.client.resources.txt.AccountText;
import com.architecture.client.resources.txt.SignText;
import com.architecture.client.service.AccountService;
import com.architecture.client.service.AccountServiceAsync;
import com.architecture.shared.model.Account;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.event.dom.client.BlurEvent;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

public class SignInViewImpl extends Composite implements SignInView {

	private static SignInViewImplUiBinder uiBinder = GWT.create(SignInViewImplUiBinder.class);
	private static AccountServiceAsync service = GWT.create(AccountService.class);
	@UiField
	TextBox login;
	@UiField
	PasswordTextBox password;
	@UiField
	CheckBox register;
	@UiField
	HeadingElement connexion;
	@UiField
	Button signIn;
	@UiField
	Label loginError;
	@UiField
	Label signInError;
	@UiField
	Label sizeMinError;
	@UiField
	Label sizeMaxError;
	@UiField
	Label noDigitError;
	@UiField
	Label noLowercaseError;
	@UiField
	Label noUppercaseError;
	@UiField
	Label noSpecialError;
	@UiField
	Label whitespaceError;
	SignInActivity activity;
	String category;
	String action;
	String label;
	boolean alreadyTryToValidateMail;
	AccountText accountText = GWT.create(AccountText.class);

	interface SignInViewImplUiBinder extends UiBinder<Widget, SignInViewImpl> {
	}

	public SignInViewImpl() {
		ResourcesAccount.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	private void init() {
		SignText signText = GWT.create(SignText.class);
		connexion.setInnerText(signText.signIn());

		login.getElement().setAttribute("placeholder", signText.mail());
		loginError.setVisible(false);

		password.getElement().setAttribute("placeholder", signText.password());

		signIn.setText(signText.signIn());
		signInError.setVisible(false);
		sizeMinError.setVisible(false);
		sizeMaxError.setVisible(false);
		noDigitError.setVisible(false);
		noLowercaseError.setVisible(false);
		noUppercaseError.setVisible(false);
		noUppercaseError.setVisible(false);
		noSpecialError.setVisible(false);
		whitespaceError.setVisible(false);

		register.setText(signText.register());

		Scheduler.get().scheduleDeferred(new ScheduledCommand() {
			@Override
			public void execute() {
				login.setFocus(true);
			}
		});
	}

	@Override
	public void setActivity(SignInActivity activity) {
		this.activity = activity;
	}

	@UiHandler("signIn")
	void onSignInClick(ClickEvent event) {
		service.signIn(login.getText(), password.getText(), new AsyncCallback<Boolean>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert(caught.getMessage());
			}

			@Override
			public void onSuccess(Boolean result) {
				if (result) {
					Window.alert("Connecté");
				} else {
					Window.alert("Echec");
				}
			}

		});
	}

	@Override
	public void setAccountToSignIn(Account account) {
		login.setText(account.getMail());
	}

	@UiHandler("login")
	void onLoginBlur(BlurEvent event) {
		category = "Check Mail for Sign In";
		action = "Blur";
		String mail = login.getText();
		if (mailValidatedShowError(mail)) {

		} else {
			action = action + " Failed Client Constraint Mail Not Valid";
			activity.pushEvent("event", category, action, mail);
		}
		alreadyTryToValidateMail = true;
	}

	@UiHandler("login")
	void onLoginKeyUp(KeyUpEvent event) {
		if (alreadyTryToValidateMail) {
			mailValidatedShowError(login.getText());
		}
	}

	public boolean mailValidatedShowError(String mail) {
		boolean mailValidated = false;
		if (activity.validateMailClient(mail)) {
			loginError.setVisible(false);
			login.removeStyleName("input-Error");
			mailValidated = true;
		} else {
			loginError.setVisible(true);
			loginError.setText(accountText.invalidMail());
			login.addStyleName("input-Error");
			mailValidated = false;
		}
		return mailValidated;
	}
}
