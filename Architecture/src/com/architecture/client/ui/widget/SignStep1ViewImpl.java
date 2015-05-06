package com.architecture.client.ui.widget;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.event.ModifySignStep1Event;
import com.architecture.client.event.ValidateSignStep1Event;
import com.architecture.client.resources.txt.SignText;
import com.architecture.shared.proxy.PersonProxy;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

public class SignStep1ViewImpl extends Composite {

	private static SignStep1ViewImplUiBinder uiBinder = GWT.create(SignStep1ViewImplUiBinder.class);
	@UiField
	HeadingElement step;
	@UiField
	Button modify;
	@UiField
	Label name;
	@UiField
	TextBox nameValue;
	@UiField
	Label firstName;
	@UiField
	TextBox firstNameValue;
	@UiField
	TextBox mailValue;
	@UiField
	Label mail;
	@UiField
	Label psaEntity;
	@UiField
	TextBox psaEntityValue;
	@UiField
	Button validate;
	@UiField
	HorizontalPanel content;
	PersonProxy person;

	interface SignStep1ViewImplUiBinder extends UiBinder<Widget, SignStep1ViewImpl> {
	}

	public SignStep1ViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
		init();
		setOpen();
	}

	private void init() {
		SignText signText = GWT.create(SignText.class);
		step.setTitle(signText.step1());
		step.setInnerHTML(signText.step1());
		modify.setText(signText.modify());
		name.setText(signText.name());
		nameValue.getElement().setAttribute("placeholder", signText.eg() + " : Dupont");
		firstName.setText(signText.firstName());
		firstNameValue.getElement().setAttribute("placeholder", signText.eg() + " : Jean");
		mail.setText(signText.mail());
		mailValue.getElement().setAttribute("placeholder", signText.eg() + " : jean.dupont@mpsa.com");
		psaEntity.setText(signText.psaEntity());
		psaEntityValue.getElement().setAttribute("placeholder", signText.eg() + " : DSIN/SPCD/D4U");
		validate.setText(signText.validate());
	}

	public PersonProxy getUpdatedPerson(PersonProxy p) {
		if (p != null) {
			p.setFirstName(firstNameValue.getValue());
			p.setLastName(nameValue.getValue());
			p.setEmail(mailValue.getValue());
			p.setDepartment(psaEntityValue.getValue());
		}
		return p;
	}

	public PersonProxy getPerson() {
		return person;
	}

	public void setPerson(PersonProxy person) {
		this.person = person;
	}

	@UiHandler("validate")
	void onValidateClick(ClickEvent event) {
		getUpdatedPerson(person);
		Set<ConstraintViolation<PersonProxy>> violations = ClientFactoryImpl.getInstance().getValidator().validate(person);
		if (!violations.isEmpty()) {
			for (ConstraintViolation<PersonProxy> constraintViolation : violations) {
				Window.alert(constraintViolation.getMessage());
			}
		} else {
			ClientFactoryImpl.getInstance().getEventBus().fireEvent(new ValidateSignStep1Event());
		}
	}

	public HorizontalPanel getContent() {
		return content;
	}

	public Button getValidate() {
		return validate;
	}

	public void setOpen() {
		modify.setVisible(false);
		content.setVisible(true);
		validate.setVisible(true);
	}

	public void setClose() {
		modify.setVisible(true);
		content.setVisible(false);
		validate.setVisible(false);
	}

	public void reset() {
		nameValue.setValue(null);
		firstNameValue.setValue(null);
		mailValue.setValue(null);
		psaEntityValue.setValue(null);
	}

	@UiHandler("modify")
	void onModifyClick(ClickEvent event) {
		ClientFactoryImpl.getInstance().getEventBus().fireEvent(new ModifySignStep1Event());
	}

	public TextBox getNameValue() {
		return nameValue;
	}

	public TextBox getFirstNameValue() {
		return firstNameValue;
	}

	public TextBox getMailValue() {
		return mailValue;
	}

	public TextBox getPsaEntityValue() {
		return psaEntityValue;
	}
}
