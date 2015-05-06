package com.architecture.client.ui.widget;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;

public class SignRecapViewImpl extends Composite {

	private static SignRecapViewImplUiBinder uiBinder = GWT.create(SignRecapViewImplUiBinder.class);
	@UiField
	HeadingElement step;
	@UiField
	Button modify;
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
	@UiField
	HTML comments;

	interface SignRecapViewImplUiBinder extends UiBinder<Widget, SignRecapViewImpl> {
	}

	public SignRecapViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

}
