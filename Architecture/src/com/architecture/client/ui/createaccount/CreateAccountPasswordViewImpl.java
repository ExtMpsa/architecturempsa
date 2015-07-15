package com.architecture.client.ui.createaccount;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.architecture.client.activity.CreateAccountActivity;
import com.architecture.client.resources.ResourcesCreateAccount;
import com.architecture.client.resources.txt.CreateAccountText;
import com.architecture.client.service.AccountService;
import com.architecture.client.service.AccountServiceAsync;
import com.architecture.client.ui.composite.LoaderViewImpl;
import com.architecture.shared.model.Account;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.History;
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
	String category;
	String action;
	String label;
	CreateAccountText createAccountText = GWT.create(CreateAccountText.class);
	CreateAccountActivity activity;

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
		create.setVisible(true);
	}

	@UiHandler("verify")
	void onVerifyClick(ClickEvent event) {
		category = "Check Constraints Password for Create Account";
		action = "Click";
		goToPasswordVerify();
	}

	public void goToPasswordVerify() {
		RootPanel.get().insert(new LoaderViewImpl(), 0);
		String pwd = password.getText();
		Set<ConstraintViolation<Account>> violations = activity.validatePasswordClient(pwd);
		if (violations.isEmpty()) {
			sizeMinError.setVisible(false);
			password.removeStyleName("input-Error");
			action = action + " Success";
			activity.pushEvent("event", category, action, password.getText());
			activity.getAccount().setPassword(password.getText());
			History.newItem("!CreateAccountPlace:passwordVerify");
		} else {
			boolean sizeMin = false;
			boolean sizeMax = false;
			boolean noDigit = false;
			boolean noLowercase = false;
			boolean noUppercase = false;
			boolean noSpecial = false;
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
				}
			}

			sizeMinError.setVisible(sizeMin);
			sizeMaxError.setVisible(sizeMax);
			noDigitError.setVisible(noDigit);
			noLowercaseError.setVisible(noLowercase);
			noUppercaseError.setVisible(noUppercase);
			noSpecialError.setVisible(noSpecial);

			password.addStyleName("input-Error");
			action = action + " Failed Client Constraint Password Not Valid";
			activity.pushEvent("event", category, action, "********");
			activity.removeLoader();
		}
	}
}
