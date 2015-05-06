package com.architecture.client.ui.widget;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.event.ValidateSignStep2Event;
import com.architecture.client.resources.txt.SignText;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;

public class SignStep2ViewImpl extends Composite {

	private static SignStep2ViewImplUiBinder uiBinder = GWT.create(SignStep2ViewImplUiBinder.class);

	@UiField
	HeadingElement step;
	@UiField
	Button modify;
	@UiField
	Button validate;
	@UiField
	Label passwordLabel;
	@UiField
	HTMLPanel signStep2;
	@UiField
	VerticalPanel content;
	@UiField
	PasswordTextBox passwordValue;

	interface SignStep2ViewImplUiBinder extends UiBinder<Widget, SignStep2ViewImpl> {
	}

	public SignStep2ViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	private void init() {
		SignText signText = GWT.create(SignText.class);
		step.setTitle(signText.step2());
		step.setInnerHTML(signText.step2());
		modify.setText(signText.modify());
		validate.setText(signText.validate());
		passwordLabel.setText(signText.password());
		this.passwordValue.getElement().setAttribute("placeholder", signText.password());
	}

	@Override
	public void setVisible(boolean v) {
		signStep2.setVisible(v);
	}

	public void setOpen() {
		content.setVisible(true);
		modify.setVisible(false);
	}

	public void setClose() {
		content.setVisible(false);
		modify.setVisible(true);
	}

	@UiHandler("validate")
	void onValidateClick(ClickEvent event) {
		ClientFactoryImpl.getInstance().getEventBus().fireEvent(new ValidateSignStep2Event());
	}
}
