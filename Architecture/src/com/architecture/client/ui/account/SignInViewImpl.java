package com.architecture.client.ui.account;

import java.util.Set;

import javax.validation.ConstraintViolation;

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
	boolean alreadyTryToValidateMail = false;
	boolean alreadyCheckPassword = false;
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
		sizeMinError.setText(accountText.errorSizeMinPassword());
		sizeMinError.setVisible(false);
		sizeMaxError.setText(accountText.errorSizeMaxPassword());
		sizeMaxError.setVisible(false);
		noDigitError.setText(accountText.errorDigitPassword());
		noDigitError.setVisible(false);
		noLowercaseError.setText(accountText.errorLowercasePassword());
		noLowercaseError.setVisible(false);
		noUppercaseError.setText(accountText.errorUppercasePassword());
		noUppercaseError.setVisible(false);
		noSpecialError.setText(accountText.errorSpecialPassword());
		noSpecialError.setVisible(false);
		whitespaceError.setText(accountText.errorWhiteSpace());
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
		if (login.getText().equals("")) {
			mailValidatedShowError("");
		}
		if (password.getText().equals("")) {
			verifyShowError("");
		}
		if (createShowError()) {
			service.signIn(login.getText(), password.getText(), new AsyncCallback<Boolean>() {
				@Override
				public void onSuccess(Boolean result) {
					if (result) {
						Window.alert("Connecté");
					} else {
						Window.alert("Echec");
					}
				}

				@Override
				public void onFailure(Throwable caught) {
					Window.alert(caught.getMessage());
				}
			});
		}
	}

	@Override
	public void setAccountToSignIn(Account account) {
		login.setText(account.getMail());
	}

	@UiHandler("login")
	void onLoginBlur(BlurEvent event) {
		if (!login.getText().equals("")) {
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

	@UiHandler("password")
	void onPasswordBlur(BlurEvent event) {
		if (!password.getText().equals("")) {
			verifyShowError(password.getText());
		}
	}

	@UiHandler("password")
	void onPasswordKeyUp(KeyUpEvent event) {
		if (alreadyCheckPassword) {
			verifyShowError(password.getText());
		}
	}

	public Set<ConstraintViolation<Account>> verifyShowError(String pwd) {
		boolean sizeMin = false;
		boolean sizeMax = false;
		boolean noDigit = false;
		boolean noLowercase = false;
		boolean noUppercase = false;
		boolean noSpecial = false;
		boolean whitespace = false;
		Set<ConstraintViolation<Account>> violations = activity.validatePasswordClient(pwd);
		if (violations.isEmpty()) {
			password.removeStyleName("input-Error");
		} else {
			password.addStyleName("input-Error");
			for (ConstraintViolation<Account> constraintViolation : violations) {
				switch (constraintViolation.getMessage()) {
				case "Size min":
					sizeMin = true;
					break;
				case "Size max":
					sizeMax = true;
					break;
				case "Digit":
					noDigit = true;
					break;
				case "Lowercase":
					noLowercase = true;
					break;
				case "Uppercase":
					noUppercase = true;
					break;
				case "Special":
					noSpecial = true;
					break;
				case "Whitespace":
					whitespace = true;
					break;
				}
			}
		}
		sizeMinError.setVisible(sizeMin);
		sizeMaxError.setVisible(sizeMax);
		noDigitError.setVisible(noDigit);
		noLowercaseError.setVisible(noLowercase);
		noUppercaseError.setVisible(noUppercase);
		noSpecialError.setVisible(noSpecial);
		whitespaceError.setVisible(whitespace);
		alreadyCheckPassword = true;
		return violations;
	}

	public boolean createShowError() {
		boolean validateAccountClient = false;
		if (activity.validateAccountClient()) {
			validateAccountClient = true;
		} else {
			validateAccountClient = false;
		}
		return validateAccountClient;
	}

	public void resetLoginError() {
		login.removeStyleName("input-Error");
		loginError.setVisible(false);
	}

	public void resetPasswordError() {
		password.removeStyleName("input-Error");
		sizeMinError.setVisible(false);
		sizeMaxError.setVisible(false);
		noDigitError.setVisible(false);
		noLowercaseError.setVisible(false);
		noUppercaseError.setVisible(false);
		noSpecialError.setVisible(false);
		whitespaceError.setVisible(false);
	}
}
