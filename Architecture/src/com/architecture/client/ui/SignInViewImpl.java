package com.architecture.client.ui;

import com.architecture.client.activity.SignInActivity;
import com.architecture.client.resources.ResourcesAccount;
import com.architecture.client.resources.txt.SignText;
import com.architecture.client.service.AccountService;
import com.architecture.client.service.AccountServiceAsync;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.Composite;
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
	SignInActivity activity;

	interface SignInViewImplUiBinder extends UiBinder<Widget, SignInViewImpl> {
	}

	public SignInViewImpl() {
		ResourcesAccount.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	private void init() {
		SignText signText = GWT.create(SignText.class);
		this.connexion.setInnerText(signText.signIn());
		this.login.getElement().setAttribute("placeholder", signText.mail());
		this.password.getElement().setAttribute("placeholder", signText.password());
		this.register.setText(signText.register());
		this.signIn.setText(signText.signIn());
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
}
