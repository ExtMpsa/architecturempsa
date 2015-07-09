package com.architecture.client.ui;

import com.architecture.client.activity.CreateAccountActivity;
import com.architecture.client.service.AccountService;
import com.architecture.client.service.AccountServiceAsync;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

public class CreateAccountViewImpl extends Composite implements CreateAccountView {

	private static CreateAccountViewUiBinder uiBinder = GWT.create(CreateAccountViewUiBinder.class);
	private static AccountServiceAsync service = GWT.create(AccountService.class);
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
		service.create(login.getText(), "pwd", new AsyncCallback<Void>() {

			@Override
			public void onSuccess(Void result) {
				Window.Location.replace(Window.Location.getHref().replaceAll("#.*", "#!SignInPlace:"));
			}

			@Override
			public void onFailure(Throwable caught) {
				Window.alert(caught.getMessage());
			}
		});
	}
}
