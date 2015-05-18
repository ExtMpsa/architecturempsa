package com.architecture.client.ui.composite;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.event.ModifySignStep1Event;
import com.architecture.client.event.ValidateSignStep1Event;
import com.architecture.client.resources.txt.SignText;
import com.architecture.client.ui.widget.Anchor;
import com.architecture.shared.proxy.PersonProxy;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.event.dom.client.BlurEvent;

public class SignStep1ViewImpl extends Composite {

	private static SignStep1ViewImplUiBinder uiBinder = GWT.create(SignStep1ViewImplUiBinder.class);
	@UiField
	HeadingElement step;
	@UiField
	Button modify;
	@UiField
	Button validate;
	@UiField
	Anchor validate1;
	@UiField
	FieldViewImpl lastName;
	@UiField
	FieldViewImpl mail;
	@UiField
	FieldViewImpl firstName;
	@UiField
	FieldViewImpl psaEntity;
	@UiField
	Grid content;
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
		lastName.setLabel(signText.name());
		lastName.setPlaceHolder(signText.eg() + " : Dupont");
		lastName.setTextValidation("Le nom doit contenir au moins 7 caractères.");
		lastName.setValidationVisible(false);

		firstName.setLabel(signText.firstName());
		firstName.setPlaceHolder(signText.eg() + " : Jean");
		firstName.setTextValidation("Le nom doit contenir au moins 1 caractère.");
		firstName.setValidationVisible(false);

		mail.setLabel(signText.mail());
		mail.setPlaceHolder(signText.eg() + " : jean.dupont@mpsa.com");
		mail.setTextValidation("Le nom doit contenir au moins 1 caractère.");
		mail.setValidationVisible(false);

		psaEntity.setLabel(signText.psaEntity());
		psaEntity.setPlaceHolder(signText.eg() + " : DSIN/SPCD/D4U");
		psaEntity.setTextValidation("Le nom doit contenir au moins 1 caractère.");
		psaEntity.setValidationVisible(false);

		validate.setText(signText.validate());
		validate1.setText(signText.validate());
		validate1.setHash("#FormsPlace:step2");

		// Focus
		Scheduler.get().scheduleDeferred(new ScheduledCommand() {
			@Override
			public void execute() {
				lastName.getTextBox().setFocus(true);
			}
		});
	}

	public PersonProxy getUpdatedPerson(PersonProxy p) {
		if (p != null) {
			p.setFirstName(firstName.getTextBox().getValue());
			p.setLastName(lastName.getTextBox().getValue());
			p.setEmail(mail.getTextBox().getValue());
			p.setDepartment(psaEntity.getTextBox().getValue());
		}
		return p;
	}

	public PersonProxy getPerson() {
		return person;
	}

	public void setPerson(PersonProxy person) {
		this.person = person;
	}

	@UiHandler("validate1")
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

	public Grid getContent() {
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
		lastName.getTextBox().setValue(null);
		firstName.getTextBox().setValue(null);
		mail.getTextBox().setValue(null);
		psaEntity.getTextBox().setValue(null);
	}

	@UiHandler("modify")
	void onModifyClick(ClickEvent event) {
		ClientFactoryImpl.getInstance().getEventBus().fireEvent(new ModifySignStep1Event());
	}

	public TextBox getNameValue() {
		return lastName.getTextBox();
	}

	public TextBox getFirstNameValue() {
		return firstName.getTextBox();
	}

	public TextBox getMailValue() {
		return mail.getTextBox();
	}

	public TextBox getPsaEntityValue() {
		return psaEntity.getTextBox();
	}
	@UiHandler("lastName")
	void onLastNameBlur(BlurEvent event) {
		lastName.getValidation().setVisible(true);
	}
}
