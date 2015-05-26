package com.architecture.client.ui.composite;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.event.ModifySignStep2Event;
import com.architecture.client.event.ValidateSignStep2Event;
import com.architecture.client.resources.txt.SignText;
import com.architecture.client.ui.widget.Anchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
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
	Anchor modify;
	@UiField
	Anchor validate;
	@UiField
	Label passwordLabel;
	@UiField
	HTMLPanel signStep2;
	@UiField
	VerticalPanel content;
	@UiField
	PasswordTextBox passwordValue;
	HandlerRegistration disabledValidate = null;
	HandlerRegistration validateSingleUrl = null;
	HandlerRegistration modifySingleUrl = null;

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
		passwordValue.getElement().setAttribute("placeholder", signText.password());
		passwordValue.setFocus(true);
	}

	@Override
	public void setVisible(boolean v) {
		signStep2.setVisible(v);
	}

	public void setOpen(boolean singlePage) {
		content.setVisible(true);
		passwordValue.setFocus(true);
		modify.setVisible(false);
		if (singlePage) {
			validate.getElement().removeAttribute("href");
			if (validateSingleUrl == null) {
				validateSingleUrl = validate.addClickHandler(new ClickHandler() {
					@Override
					public void onClick(ClickEvent event) {
						ClientFactoryImpl.getInstance().getEventBus().fireEvent(new ValidateSignStep2Event());
					}
				});
			}
		} else {
			validate.setHash("#FormsPlace:signSuccess");
			if (validateSingleUrl != null) {
				validateSingleUrl.removeHandler();
				validateSingleUrl = null;
			}
		}
	}

	public void setClose(boolean singlePage) {
		content.setVisible(false);
		modify.setVisible(true);
		if (singlePage) {
			modify.getElement().removeAttribute("href");
			if (modifySingleUrl == null) {
				modifySingleUrl = modify.addClickHandler(new ClickHandler() {
					@Override
					public void onClick(ClickEvent event) {
						ClientFactoryImpl.getInstance().getEventBus().fireEvent(new ModifySignStep2Event());
					}
				});
			}
		} else {
			modify.setHash("#FormsPlace:step2");
			if (modifySingleUrl != null) {
				modifySingleUrl.removeHandler();
				modifySingleUrl = null;
			}
		}
	}
}
