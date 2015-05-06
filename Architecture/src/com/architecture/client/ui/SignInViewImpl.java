package com.architecture.client.ui;

import com.architecture.client.activity.SignInActivity;
import com.architecture.client.resources.Resources;
import com.architecture.client.resources.txt.SignText;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

public class SignInViewImpl extends Composite implements SignInView {

	private static SignInViewImplUiBinder uiBinder = GWT.create(SignInViewImplUiBinder.class);
	@UiField
	TextBox login;
	@UiField
	PasswordTextBox password;
	@UiField
	CheckBox register;
	@UiField
	HeadingElement connexion;
	SignInActivity activity;

	interface SignInViewImplUiBinder extends UiBinder<Widget, SignInViewImpl> {
	}

	public SignInViewImpl() {
		Resources.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	private void init() {
		SignText signText = GWT.create(SignText.class);
		this.connexion.setInnerText(signText.signIn());
		this.login.getElement().setAttribute("placeholder", signText.mail());
		this.password.getElement().setAttribute("placeholder", signText.password());
		this.register.setText(signText.register());
	}

	@Override
	public void setActivity(SignInActivity activity) {
		this.activity = activity;
	}
}
