package com.architecture.client.ui;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.activity.CreateAccountActivity;
import com.architecture.client.service.AccountService;
import com.architecture.client.service.AccountServiceAsync;
import com.architecture.client.ui.composite.LoaderViewImpl;
import com.architecture.shared.model.Account;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

public class CreateAccountViewImpl extends Composite implements CreateAccountView {

	private static CreateAccountViewUiBinder uiBinder = GWT.create(CreateAccountViewUiBinder.class);
	private static AccountServiceAsync service = GWT.create(AccountService.class);
	private static Account account = GWT.create(Account.class);
	@UiField
	TextBox login;
	@UiField
	Button create;
	CreateAccountActivity activity;

	interface CreateAccountViewUiBinder extends UiBinder<Widget, CreateAccountViewImpl> {
	}

	public CreateAccountViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public void setActivity(CreateAccountActivity activity) {
		this.activity = activity;
	}

	@UiHandler("create")
	void onCreateClick(ClickEvent event) {
		RootPanel.get().insert(new LoaderViewImpl(), 0);
		if (validateClient()) {
			service.create(login.getText(), "pwd", new AsyncCallback<Void>() {

				@Override
				public void onSuccess(Void result) {
					// Window.Location.replace(Window.Location.getHref().replaceAll("#.*", "#!SignInPlace:"));
					History.newItem("!SignInPlace:");
				}

				@Override
				public void onFailure(Throwable caught) {
					removeLoader();
					Window.alert(caught.getMessage());
				}
			});
		} else {
			removeLoader();
			Window.alert("Violation des contraintes de création de compte côté Client.");
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
		account.setMail(login.getText());
		Set<ConstraintViolation<Account>> violations = ClientFactoryImpl.getInstance().getValidator().validate(account);
		if (violations.isEmpty()) {
			validate = true;
		} else {
			validate = false;
		}
		return validate;
	}
}
