package com.architecture.client.ui.account;

import com.architecture.client.activity.CreateAccountActivity;
import com.architecture.client.exception.AttackHackingException;
import com.architecture.client.exception.MailAlreadyUsedException;
import com.architecture.client.resources.ResourcesAccount;
import com.architecture.client.resources.txt.AccountText;
import com.architecture.client.resources.txt.ExceptionText;
import com.architecture.client.service.AccountService;
import com.architecture.client.service.AccountServiceAsync;
import com.architecture.client.ui.composite.LoaderViewImpl;
import com.architecture.shared.model.Account;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.dom.client.PreElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyPressEvent;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.MouseOutEvent;
import com.google.gwt.event.dom.client.MouseOverEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DecoratedPopupPanel;
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
	Label loginErrorClient;
	@UiField
	HTMLPanel panel;
	@UiField
	Label loginErrorServer;
	@UiField
	DecoratedPopupPanel asideNext;
	@UiField
	PreElement preNext;
	CreateAccountActivity activity;
	String category;
	String action;
	String label;
	boolean alreadyTryGoToPassword = false;
	String lastMailFailedServer = null;
	boolean failByServer = false;
	AccountText createAccountText = GWT.create(AccountText.class);

	interface CreateAccountViewUiBinder extends UiBinder<Widget, CreateAccountViewImpl> {
	}

	public CreateAccountViewImpl() {
		ResourcesAccount.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		createAccount.setInnerText(createAccountText.title());
		login.getElement().setAttribute("placeholder", createAccountText.placeholderMail());
		loginErrorClient.setVisible(false);
		loginErrorServer.setVisible(false);
		next.setText(createAccountText.next());

		// TODO : Begin
		// Contournement du bug de masquage de la popup
		asideNext.show();
		asideNext.hide();
		asideNext.setAnimationEnabled(true);
		// End
		// Contournement du bug de masquage de la popup

		firstFocus();
	}

	public void firstFocus() {
		Scheduler.get().scheduleDeferred(new ScheduledCommand() {
			@Override
			public void execute() {
				login.setFocus(true);
			}
		});
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
	void onNextMouseOver(MouseOverEvent event) {
		Widget source = (Widget) event.getSource();
		int left = source.getAbsoluteLeft() + source.getOffsetWidth() + 20;
		int top = source.getAbsoluteTop() + source.getOffsetHeight() - 120;
		asideNext.setPopupPosition(left, top);
		/*@formatter:off*/
		preNext.setInnerText("Au clic si l'action réussit :"
				+ "\ndataLayer.push({"
				+ "\n	event : \"event\","
				+ "\n	eventCategory : \"Check Mail for Create Account\","
				+ "\n	eventAction : \"Click\","
				+ "\n	eventLabel : \"" + login.getText() + "\""
				+ "\n});"
				+ "\n"
				+ "\nSinon l'event category change en fonction de l'échec."
				+ "\nExemple:"
				+ "\ndataLayer.push({"
				+ "\n	event : \"event\","
				+ "\n	eventCategory : \"Check Mail for Create Account\","
				+ "\n	eventAction : \"Click Failed Client Constraint Mail Not Valid\","
				+ "\n	eventLabel : \"" + login.getText() + "\""
				+ "\n});");
		/*@formatter:on*/
		asideNext.show();
	}

	@UiHandler("next")
	void onNextMouseOut(MouseOutEvent event) {
		asideNext.hide();
	}

	@UiHandler("next")
	void onNextClick(ClickEvent event) {
		category = "Check Mail for Create Account";
		action = "Click";
		label = login.getText();
		goToPassword();
	}

	@UiHandler("login")
	void onLoginKeyPress(KeyPressEvent event) {
		if (event.getCharCode() == KeyCodes.KEY_ENTER) {
			category = "Check Mail for Create Account";
			action = "Key Press Enter";
			label = login.getText();
			goToPassword();
		}
	}

	@UiHandler("login")
	void onLoginKeyUp(KeyUpEvent event) {
		if (alreadyTryGoToPassword) {
			validateShowError(login.getText());
		}
	}

	@UiHandler("login")
	void onLoginMouseOver(MouseOverEvent event) {
		Widget source = (Widget) event.getSource();
		int left = source.getAbsoluteLeft() + source.getOffsetWidth() + 20;
		int top = source.getAbsoluteTop() + source.getOffsetHeight() - 140;
		asideNext.setPopupPosition(left, top);
		/*@formatter:off*/
		preNext.setInnerText("Si l'utilisateur appuye sur la touche entrée"
				+ "\net si l'action réussit :"
				+ "\ndataLayer.push({"
				+ "\n	event : \"event\","
				+ "\n	eventCategory : \"Check Mail for Create Account\","
				+ "\n	eventAction : \"Key Press Enter\","
				+ "\n	eventLabel : \"" + login.getText() + "\""
				+ "\n});"
				+ "\n"
				+ "\nSinon l'event category change en fonction de l'échec."
				+ "\nExemple:"
				+ "\ndataLayer.push({"
				+ "\n	event : \"event\","
				+ "\n	eventCategory : \"Check Mail for Create Account\","
				+ "\n	eventAction : \"Key Press Enter Failed Client Constraint Mail Not Valid\","
				+ "\n	eventLabel : \"" + login.getText() + "\""
				+ "\n});");
		/*@formatter:on*/
		asideNext.show();
	}

	@UiHandler("login")
	void onLoginMouseOut(MouseOutEvent event) {
		asideNext.hide();
	}

	private void goToPassword() {
		RootPanel.get().insert(new LoaderViewImpl(), 0);
		String mail = login.getText();
		if (validateShowError(mail)) {
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
					pushEvent("event", category, action, label);
					loginErrorServer.setVisible(true);
					loginErrorServer.setText(details);
					login.addStyleName("input-Error");
					lastMailFailedServer = login.getText();
				}
			});
		} else {
			action = action + " Failed Client Constraint Mail Not Valid";
			pushEvent("event", category, action, label);
			removeLoader();
		}
		alreadyTryGoToPassword = true;
	}

	public boolean validateShowError(String mail) {
		boolean validatedClient = false;
		if (activity.validateMailClient(mail)) {
			loginErrorClient.setVisible(false);
			login.removeStyleName("input-Error");
			validatedClient = true;
		} else {
			loginErrorClient.setVisible(true);
			loginErrorClient.setText(createAccountText.invalidMail());
			login.addStyleName("input-Error");
			validatedClient = false;
		}
		if (lastMailFailedServer != null && mail.equalsIgnoreCase(lastMailFailedServer)) {
			login.addStyleName("input-Error");
			loginErrorServer.setVisible(true);
			login.addStyleName("input-Error");
		} else {
			loginErrorServer.setVisible(false);
			if (validatedClient) {
				login.removeStyleName("input-Error");
			}
		}
		return validatedClient;
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
