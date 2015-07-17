package com.architecture.client.ui.createaccount;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.architecture.client.activity.CreateAccountActivity;
import com.architecture.client.exception.AttackHackingException;
import com.architecture.client.exception.MailAlreadyUsedException;
import com.architecture.client.resources.ResourcesCreateAccount;
import com.architecture.client.resources.txt.CreateAccountText;
import com.architecture.client.resources.txt.ExceptionText;
import com.architecture.client.service.AccountService;
import com.architecture.client.service.AccountServiceAsync;
import com.architecture.client.ui.composite.LoaderViewImpl;
import com.architecture.shared.model.Account;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyPressEvent;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

public class CreateAccountPasswordViewImpl extends Composite implements CreateAccountView {

	private static CreateAccountPasswordViewImplUiBinder uiBinder = GWT.create(CreateAccountPasswordViewImplUiBinder.class);
	private static AccountServiceAsync service = GWT.create(AccountService.class);

	@UiField
	HTMLPanel panel;
	@UiField
	HeadingElement createAccount;
	@UiField
	PasswordTextBox password;
	@UiField
	Label sizeMinError;
	@UiField
	Button verify;
	@UiField
	PasswordTextBox passwordVerify;
	@UiField
	Label passwordVerifyError;
	@UiField
	Button create;
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
	@UiField
	Label createError;
	String category;
	String action;
	String label;
	boolean alreadyTryGoToPasswordVerify = false;
	boolean alreadyTryCreate = false;
	CreateAccountText createAccountText = GWT.create(CreateAccountText.class);
	CreateAccountActivity activity;
	ExceptionText exceptionText = GWT.create(ExceptionText.class);

	interface CreateAccountPasswordViewImplUiBinder extends UiBinder<Widget, CreateAccountPasswordViewImpl> {
	}

	public CreateAccountPasswordViewImpl() {
		ResourcesCreateAccount.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		createAccount.setInnerText(createAccountText.title());

		password.getElement().setAttribute("placeholder", createAccountText.placeholderPassword());
		sizeMinError.setText(createAccountText.errorSizeMinPassword());
		sizeMinError.setVisible(false);
		sizeMaxError.setText(createAccountText.errorSizeMaxPassword());
		sizeMaxError.setVisible(false);
		noDigitError.setText(createAccountText.errorDigitPassword());
		noDigitError.setVisible(false);
		noLowercaseError.setText(createAccountText.errorLowercasePassword());
		noLowercaseError.setVisible(false);
		noUppercaseError.setText(createAccountText.errorUppercasePassword());
		noUppercaseError.setVisible(false);
		noSpecialError.setText(createAccountText.errorSpecialPassword());
		noSpecialError.setVisible(false);
		whitespaceError.setText(createAccountText.errorWhiteSpace());
		whitespaceError.setVisible(false);
		createError.setVisible(false);
		verify.setText(createAccountText.passwordVerify());

		passwordVerify.getElement().setAttribute("placeholder", createAccountText.placeholderPasswordVerify());
		passwordVerifyError.setText(createAccountText.passwordVerifyError());

		create.setText(createAccountText.create());
		String token = History.getToken();
		if (token.equalsIgnoreCase("!CreateAccountPlace:password")) {
			setPasswordStep();
		} else if (token.equalsIgnoreCase("!CreateAccountPlace:passwordVerify")) {
			setPasswordVerifyStep();
		}
	}

	@Override
	public void setActivity(CreateAccountActivity activity) {
		this.activity = activity;
	}

	@Override
	public void setAccount(Account account) {
		password.setText(account.getPassword());
	}

	public void setPasswordStep() {
		password.setEnabled(true);
		sizeMinError.setVisible(false);
		verify.setVisible(true);
		passwordVerify.setVisible(false);
		passwordVerifyError.setVisible(false);
		create.setVisible(false);
	}

	public void setPasswordVerifyStep() {
		password.setEnabled(false);
		sizeMinError.setVisible(false);
		verify.setVisible(false);
		passwordVerify.setVisible(true);
		passwordVerifyError.setVisible(false);
		whitespaceError.setVisible(false);
		create.setVisible(true);
	}

	@UiHandler("verify")
	void onVerifyClick(ClickEvent event) {
		category = "Check Constraints Password for Create Account";
		action = "Click";
		goToPasswordVerify();
	}

	@UiHandler("password")
	void onPasswordKeyPress(KeyPressEvent event) {
		if (event.getCharCode() == KeyCodes.KEY_ENTER) {
			category = "Check Constraints Password for Create Account";
			action = "Key Press Enter";
			goToPasswordVerify();
		}
	}

	@UiHandler("password")
	void onPasswordKeyUp(KeyUpEvent event) {
		if (alreadyTryGoToPasswordVerify) {
			verifyShowError(password.getText());
		}
	}

	public void goToPasswordVerify() {
		RootPanel.get().insert(new LoaderViewImpl(), 0);
		String pwd = password.getText();
		Set<ConstraintViolation<Account>> violations = verifyShowError(pwd);
		if (violations.isEmpty()) {
			action = action + " Success";
			activity.pushEvent("event", category, action, password.getText());
			activity.getAccount().setPassword(password.getText());
			History.newItem("!CreateAccountPlace:passwordVerify");
		} else {
			action = action + " Failed Client Constraint Password Not Valid";
			activity.pushEvent("event", category, action, "********");
			activity.removeLoader();
		}
		alreadyTryGoToPasswordVerify = true;
	}

	public Set<ConstraintViolation<Account>> verifyShowError(String pwd) {
		Set<ConstraintViolation<Account>> violations = activity.validatePasswordClient(pwd);
		if (violations.isEmpty()) {
			sizeMinError.setVisible(false);
			password.removeStyleName("input-Error");
		} else {
			boolean sizeMin = false;
			boolean sizeMax = false;
			boolean noDigit = false;
			boolean noLowercase = false;
			boolean noUppercase = false;
			boolean noSpecial = false;
			boolean whitespace = false;
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

			sizeMinError.setVisible(sizeMin);
			sizeMaxError.setVisible(sizeMax);
			noDigitError.setVisible(noDigit);
			noLowercaseError.setVisible(noLowercase);
			noUppercaseError.setVisible(noUppercase);
			noSpecialError.setVisible(noSpecial);
			whitespaceError.setVisible(whitespace);

			password.addStyleName("input-Error");
		}
		return violations;
	}

	@UiHandler("create")
	void onCreateClick(ClickEvent event) {
		category = "Check same Password for Create Account";
		action = "Click";
		create();
	}

	@UiHandler("passwordVerify")
	void onPasswordVerifyKeyPress(KeyPressEvent event) {
		if (event.getCharCode() == KeyCodes.KEY_ENTER) {
			category = "Check same Password for Create Account";
			action = "Key Press Enter";
			create();
		}
	}

	@UiHandler("passwordVerify")
	void onPasswordVerifyKeyUp(KeyUpEvent event) {
		if (alreadyTryCreate) {
			samePasswordShowError();
		}
	}

	public void create() {
		RootPanel.get().insert(new LoaderViewImpl(), 0);
		String pwd = password.getText();
		activity.getAccount().setPassword(pwd);

		if (samePasswordShowError()) {
			if (createShowError()) {
				service.create(activity.getAccount().getMail(), pwd, new AsyncCallback<Void>() {
					@Override
					public void onSuccess(Void result) {
						action = action + " Success";
						pushEvent("event", category, action, activity.getAccount().getMail());
						History.newItem("!SignInPlace:");
					}

					@Override
					public void onFailure(Throwable caught) {
						ExceptionText exceptionText = GWT.create(ExceptionText.class);
						activity.removeLoader();
						String details;
						if (caught instanceof AttackHackingException) {
							details = exceptionText.attackHackingGeneric();
							action = action + " Failed Server Constraints Mail Not Valid";
							// TODO :
							// rediriger vers un CreateAccountPlace:login avec erreur.
						} else if (caught instanceof MailAlreadyUsedException) {
							action = action + " Failed Mail Already Registered";
							details = exceptionText.mailAlreadyUsed();
							// TODO :
							// rediriger vers un CreateAccountPlace:login avec erreur.
						} else {
							action = action + " Failed Internal Server Error";
							details = exceptionText.internalServerError() + caught.getClass().toString();
						}
						pushEvent("event", category, action, activity.getAccount().getMail());
						createError.setVisible(true);
						createError.setText(details);
						passwordVerify.setText("");
					}
				});
			} else {
				action = action + " Failed Client Constraint Account";
				activity.pushEvent("event", category, action, "********");
				activity.removeLoader();
			}
		} else {
			action = action + " Failed Client Password Not the same";
			activity.pushEvent("event", category, action, "********");
			activity.removeLoader();
		}
		alreadyTryCreate = true;
	}

	public boolean createShowError() {
		boolean validateAccountClient = false;
		if (activity.validateAccountClient()) {
			validateAccountClient = true;
		} else {
			createError.setText(exceptionText.accountClientNotValidated());
			validateAccountClient = false;
		}
		return validateAccountClient;
	}

	public boolean samePasswordShowError() {
		boolean samePassword = false;
		String pwd = password.getText();
		String pwdVerify = passwordVerify.getText();
		if (pwd.equals(pwdVerify)) {
			passwordVerifyError.setVisible(false);
			samePassword = true;
		} else {
			passwordVerifyError.setVisible(true);
			samePassword = false;
		}
		return samePassword;
	}

	private native void pushEvent(String event, String category, String action, String label) /*-{
		$wnd["dataLayer"] = $wnd["dataLayer"] || [];
		$wnd.dataLayer.push({
			event : event,
			eventCategory : category,
			eventAction : action,
			eventLabel : label
		});
	}-*/;
}
