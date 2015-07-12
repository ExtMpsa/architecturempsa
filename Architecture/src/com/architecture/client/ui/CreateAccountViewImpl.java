package com.architecture.client.ui;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.exception.AttackHackingException;
import com.architecture.client.exception.MailAlreadyUsedException;
import com.architecture.client.resources.ResourcesCreateAccount;
import com.architecture.client.resources.txt.CreateAccountText;
import com.architecture.client.resources.txt.ExceptionText;
import com.architecture.client.service.AccountService;
import com.architecture.client.service.AccountServiceAsync;
import com.architecture.client.ui.composite.LoaderViewImpl;
import com.architecture.shared.model.Account;
import com.google.gwt.activity.shared.Activity;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyPressEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

public class CreateAccountViewImpl extends Composite implements CreateAccountView {

	private static CreateAccountViewUiBinder uiBinder = GWT.create(CreateAccountViewUiBinder.class);
	private static AccountServiceAsync service = GWT.create(AccountService.class);
	private static Account account = GWT.create(Account.class);
	@UiField
	HeadingElement createAccount;
	@UiField
	TextBox login;
	@UiField
	Button create;
	@UiField
	Label loginError;
	Activity activity;

	interface CreateAccountViewUiBinder extends UiBinder<Widget, CreateAccountViewImpl> {
	}

	public CreateAccountViewImpl() {
		ResourcesCreateAccount.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		CreateAccountText createAccountText = GWT.create(CreateAccountText.class);
		this.createAccount.setInnerText(createAccountText.title());
		this.loginError.setVisible(false);
		this.create.setText(createAccountText.create());
	}

	@Override
	public void setActivity(Activity activity) {
		this.activity = activity;
	}

	@UiHandler("create")
	void onCreateClick(ClickEvent event) {
		create();
		pushEvent("event", "Create Account Mail Next", "Click", "Click on Next");
	}

	@UiHandler("login")
	void onLoginKeyPress(KeyPressEvent event) {
		if(event.getCharCode()== KeyCodes.KEY_ENTER){
			create();
			pushEvent("event", "Create Account Mail Next", "Key press Enter", "Keyboard pressed enter");
		}
	}
	
	private void create(){
		RootPanel.get().insert(new LoaderViewImpl(), 0);
		if (validateClient()) {
			service.create(this.login.getText(), "pwd", new AsyncCallback<Void>() {

				@Override
				public void onSuccess(Void result) {
					History.newItem("!SignInPlace:");
				}

				@Override
				public void onFailure(Throwable caught) {
					ExceptionText exceptionText = GWT.create(ExceptionText.class);
					removeLoader();
					String details;
					if (caught instanceof AttackHackingException) {
						details = exceptionText.attackHackingGeneric();
					} else if (caught instanceof MailAlreadyUsedException) {
						details = exceptionText.mailAlreadyUsed();
					} else {
						details = exceptionText.internalServerError() + caught.getClass().toString();
					}
					Window.alert(details);
				}
			});
		} else {
			removeLoader();
		}
	}
	
	public void removeLoader() {
		Element loader = Document.get().getElementById("loader");
		if (loader != null) {
			loader.removeFromParent();
		}
	}

	public boolean validateClient() {
		boolean validate = false;
		account.setMail(this.login.getText());
		account.setPassword("pwd");
		Set<ConstraintViolation<Account>> violations = ClientFactoryImpl.getInstance().getValidator().validate(account);
		if (violations.isEmpty()) {
			validate = true;
			this.loginError.setVisible(false);
		} else {
			validate = false;
			for (ConstraintViolation<Account> constraintViolation : violations) {
				switch (constraintViolation.getPropertyPath().toString()) {
				case "mail":
					this.loginError.setVisible(true);
					this.loginError.setText(constraintViolation.getMessage());
					break;
				case "password":
					break;
				}
			}
		}
		return validate;
	}
	
	private native void pushEvent(String event, String category, String action, String label) /*-{
	try {
		$wnd["dataLayer"] = $wnd["dataLayer"] || [];
		$wnd.dataLayer.push({
			event : event,
			eventCategory : category,
			eventAction : action,
			eventLabel : label,
			ni: ni
		});
	} catch (e) {
		$wnd.dataLayer.push({
			event : launcher,
		});
	}
}-*/;
}
