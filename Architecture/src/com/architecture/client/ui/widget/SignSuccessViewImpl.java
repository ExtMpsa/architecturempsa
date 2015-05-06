package com.architecture.client.ui.widget;

import com.architecture.client.resources.txt.SignText;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;

public class SignSuccessViewImpl extends Composite {

	private static SignSuccessImplUiBinder uiBinder = GWT.create(SignSuccessImplUiBinder.class);
	@UiField
	HeadingElement step;
	@UiField
	Label name;
	@UiField
	Label nameValue;
	@UiField
	Label firstNameValue;
	@UiField
	Label firstName;
	@UiField
	Label mail;
	@UiField
	Label mailValue;
	@UiField
	Label psaEntity;
	@UiField
	Label psaEntityValue;

	interface SignSuccessImplUiBinder extends UiBinder<Widget, SignSuccessViewImpl> {
	}

	public SignSuccessViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	void init() {
		SignText signText = GWT.create(SignText.class);
		step.setTitle(signText.stepConfirm());
		step.setInnerHTML(signText.stepConfirm());
	}

	public Label getNameValue() {
		return nameValue;
	}

	public Label getFirstNameValue() {
		return firstNameValue;
	}

	public Label getMailValue() {
		return mailValue;
	}

	public Label getPsaEntityValue() {
		return psaEntityValue;
	}

}
