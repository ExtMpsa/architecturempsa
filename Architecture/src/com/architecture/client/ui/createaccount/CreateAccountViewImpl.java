package com.architecture.client.ui.createaccount;

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
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

public class CreateAccountViewImpl extends Composite implements CreateAccountView {

	private static CreateAccountViewUiBinder uiBinder = GWT.create(CreateAccountViewUiBinder.class);
	private static AccountServiceAsync service = GWT.create(AccountService.class);

	@UiField
	HeadingElement createAccount;
	@UiField
	TextBox login;
	@UiField
	Button next;
	@UiField
	Label loginError;
	@UiField
	HTMLPanel panel;
	CreateAccountActivity activity;
	String category;
	String action;
	String label;
	CreateAccountText createAccountText = GWT.create(CreateAccountText.class);

	interface CreateAccountViewUiBinder extends UiBinder<Widget, CreateAccountViewImpl> {
	}

	public CreateAccountViewImpl() {
		ResourcesCreateAccount.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		createAccount.setInnerText(createAccountText.title());
		login.getElement().setAttribute("placeholder", createAccountText.placeholderMail());
		loginError.setVisible(false);
		next.setText(createAccountText.next());
	}

	@Override
	public void setAccount(Account account) {
		login.setText(account.getMail());
	}

	@Override
	public void setActivity(CreateAccountActivity activity) {
		this.activity = activity;
	}

	@UiHandler("next")
	void onNextClick(ClickEvent event) {
		category = "Check Mail for Create Account";
		action = "Click";
		goToPassword();
	}

	@UiHandler("login")
	void onLoginKeyPress(KeyPressEvent event) {
		if (event.getCharCode() == KeyCodes.KEY_ENTER) {
			category = "Check Mail for Create Account";
			action = "Key Press Enter";
			goToPassword();
		}
	}

	private void goToPassword() {
		RootPanel.get().insert(new LoaderViewImpl(), 0);
		String mail = login.getText();
		if (activity.validateMailClient(mail)) {
			loginError.setVisible(false);
			login.removeStyleName("input-Error");
			service.checkMail(mail, new AsyncCallback<Void>() {

				@Override
				public void onSuccess(Void result) {
					action = action + " Success";
					pushEvent("event", category, action, login.getText());
					activity.getAccount().setMail(login.getText());
					History.newItem("!CreateAccountPlace:password");
				}

				@Override
				public void onFailure(Throwable caught) {
					ExceptionText exceptionText = GWT.create(ExceptionText.class);
					removeLoader();
					String details;
					if (caught instanceof AttackHackingException) {
						details = exceptionText.attackHackingGeneric();
						action = action + " Failed Server Constraints Mail Not Valid";
					} else if (caught instanceof MailAlreadyUsedException) {
						action = action + " Failed Mail Already Registered";
						details = exceptionText.mailAlreadyUsed();
					} else {
						action = action + " Failed Internal Server Error";
						details = exceptionText.internalServerError() + caught.getClass().toString();
					}
					pushEvent("event", category, action, login.getText());
					loginError.setVisible(true);
					loginError.setText(details);
					login.addStyleName("input-Error");
				}

			});
		} else {
			loginError.setVisible(true);
			loginError.setText(createAccountText.invalidMail());
			login.addStyleName("input-Error");
			action = action + " Failed Client Constraint Mail Not Valid";
			pushEvent("event", category, action, login.getText());
			removeLoader();
		}
	}

	public void removeLoader() {
		Element loader = Document.get().getElementById("loader");
		if (loader != null) {
			loader.removeFromParent();
		}
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
