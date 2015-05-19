package com.architecture.client.ui.composite;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.event.ModifySignStep1Event;
import com.architecture.client.resources.txt.SignText;
import com.architecture.client.ui.widget.Anchor;
import com.architecture.shared.proxy.PersonProxy;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.ScheduledCommand;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.event.dom.client.BlurEvent;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

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
	FieldComposite lastName;
	@UiField
	FieldComposite mail;
	@UiField
	FieldComposite firstName;
	@UiField
	FieldComposite psaEntity;
	@UiField
	Grid content;
	PersonProxy person;
	HandlerRegistration disabledValidate = null;

	interface SignStep1ViewImplUiBinder extends UiBinder<Widget, SignStep1ViewImpl> {
	}

	public SignStep1ViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
		init();
		setOpen();
	}

	private void init() {
		SignText signText = GWT.create(SignText.class);
		this.step.setTitle(signText.step1());
		this.step.setInnerHTML(signText.step1());
		this.modify.setText(signText.modify());
		this.lastName.setLabel(signText.name());
		this.lastName.setPlaceHolder(signText.eg() + " : Dupont");
		this.lastName.setValidationVisible(false);

		this.firstName.setLabel(signText.firstName());
		this.firstName.setPlaceHolder(signText.eg() + " : Jean");
		this.firstName.setValidationVisible(false);

		this.mail.setLabel(signText.mail());
		this.mail.setPlaceHolder(signText.eg() + " : jean.dupont@mpsa.com");
		this.mail.setValidationVisible(false);

		this.psaEntity.setLabel(signText.psaEntity());
		this.psaEntity.setPlaceHolder(signText.eg() + " : DSIN/SPCD/D4U");
		this.psaEntity.setValidationVisible(false);

		this.validate.setText(signText.validate());
		this.validate1.setText(signText.validate());
		this.validate1.setHash("#FormsPlace:step2");

		// Focus
		Scheduler.get().scheduleDeferred(new ScheduledCommand() {
			@Override
			public void execute() {
				SignStep1ViewImpl.this.lastName.getTextBox().setFocus(true);
			}
		});
	}

	public PersonProxy getUpdatedPerson(PersonProxy p) {
		if (p != null) {
			p.setFirstName(this.firstName.getTextBox().getValue());
			p.setLastName(this.lastName.getTextBox().getValue());
			p.setEmail(this.mail.getTextBox().getValue());
			p.setDepartment(this.psaEntity.getTextBox().getValue());
		}
		return p;
	}

	public PersonProxy getPerson() {
		return this.person;
	}

	public void setPerson(PersonProxy person) {
		this.person = person;
	}

	@UiHandler("validate1")
	void onValidateClick(ClickEvent event) {
		getUpdatedPerson(this.person);
		Set<ConstraintViolation<PersonProxy>> violations = ClientFactoryImpl.getInstance().getValidator().validate(this.person);
		if (!violations.isEmpty()) {
			for (ConstraintViolation<PersonProxy> constraintViolation : violations) {
				switch (constraintViolation.getPropertyPath().toString()) {
				case "department":
					this.psaEntity.getValidation().setVisible(true);
					this.psaEntity.getValidation().setText(constraintViolation.getMessage());
					break;
				case "lastName":
					this.lastName.getValidation().setVisible(true);
					this.lastName.getValidation().setText(constraintViolation.getMessage());
					break;
				case "firstName":
					this.firstName.getValidation().setVisible(true);
					this.firstName.getValidation().setText(constraintViolation.getMessage());
					break;
				case "email":
					this.mail.getValidation().setVisible(true);
					this.mail.getValidation().setText(constraintViolation.getMessage());
					break;
				}
			}
		}
	}

	public Grid getContent() {
		return this.content;
	}

	public Button getValidate() {
		return this.validate;
	}

	public void setOpen() {
		this.modify.setVisible(false);
		this.content.setVisible(true);
		this.validate.setVisible(true);
	}

	public void setClose() {
		this.modify.setVisible(true);
		this.content.setVisible(false);
		this.validate.setVisible(false);
	}

	public void reset() {
		this.lastName.getTextBox().setValue(null);
		this.firstName.getTextBox().setValue(null);
		this.mail.getTextBox().setValue(null);
		this.psaEntity.getTextBox().setValue(null);
	}

	@UiHandler("modify")
	void onModifyClick(ClickEvent event) {
		ClientFactoryImpl.getInstance().getEventBus().fireEvent(new ModifySignStep1Event());
	}

	public TextBox getNameValue() {
		return this.lastName.getTextBox();
	}

	public TextBox getFirstNameValue() {
		return this.firstName.getTextBox();
	}

	public TextBox getMailValue() {
		return this.mail.getTextBox();
	}

	public TextBox getPsaEntityValue() {
		return this.psaEntity.getTextBox();
	}

	@UiHandler("lastName")
	void onLastNameBlur(BlurEvent event) {
		log("blur lastname");
		getUpdatedPerson(this.person);
		Set<ConstraintViolation<PersonProxy>> violations = ClientFactoryImpl.getInstance().getValidator().validateProperty(this.person, "lastName");
		if (!violations.isEmpty()) {
			log("violation isn t empty lastname");
			for (ConstraintViolation<PersonProxy> constraintViolation : violations) {
				this.lastName.getValidation().setVisible(true);
				this.lastName.getValidation().setText(constraintViolation.getMessage());
			}
			if (this.disabledValidate == null) {
				this.disabledValidate = SignStep1ViewImpl.this.validate1.addClickHandler(new ClickHandler() {
					@Override
					public void onClick(ClickEvent event) {
						event.preventDefault();
					}
				});
			}
		} else {
			if (updateValidate()) {
				if (disabledValidate != null) {
					this.disabledValidate.removeHandler();
					disabledValidate = null;
				}
			} else {
				this.lastName.getValidation().setVisible(false);
			}
		}
	}

	@UiHandler("mail")
	void onMailBlur(BlurEvent event) {
		log("blur mail");
		getUpdatedPerson(this.person);
		Set<ConstraintViolation<PersonProxy>> violations = ClientFactoryImpl.getInstance().getValidator().validateProperty(this.person, "email");
		if (!violations.isEmpty()) {
			for (ConstraintViolation<PersonProxy> constraintViolation : violations) {
				this.mail.getValidation().setVisible(true);
				this.mail.getValidation().setText(constraintViolation.getMessage());
			}
			if (this.disabledValidate == null) {
				this.disabledValidate = SignStep1ViewImpl.this.validate1.addClickHandler(new ClickHandler() {
					@Override
					public void onClick(ClickEvent event) {
						event.preventDefault();
					}
				});
			}
		} else {
			if (updateValidate()) {
				if (disabledValidate != null) {
					this.disabledValidate.removeHandler();
					disabledValidate = null;
				}
			} else {
				this.mail.getValidation().setVisible(false);
			}
		}
	}

	@UiHandler("firstName")
	void onFirstNameBlur(BlurEvent event) {
		getUpdatedPerson(this.person);
		Set<ConstraintViolation<PersonProxy>> violations = ClientFactoryImpl.getInstance().getValidator().validateProperty(this.person, "firstName");
		if (!violations.isEmpty()) {
			for (ConstraintViolation<PersonProxy> constraintViolation : violations) {
				this.firstName.getValidation().setVisible(true);
				this.firstName.getValidation().setText(constraintViolation.getMessage());
			}
			if (this.disabledValidate == null) {
				this.disabledValidate = SignStep1ViewImpl.this.validate1.addClickHandler(new ClickHandler() {
					@Override
					public void onClick(ClickEvent event) {
						event.preventDefault();
					}
				});
			}
		} else {
			if (updateValidate()) {
				if (disabledValidate != null) {
					this.disabledValidate.removeHandler();
					disabledValidate = null;
				}
			} else {
				this.firstName.getValidation().setVisible(false);
			}
		}
	}

	@UiHandler("psaEntity")
	void onPsaEntityBlur(BlurEvent event) {
		getUpdatedPerson(this.person);
		Set<ConstraintViolation<PersonProxy>> violations = ClientFactoryImpl.getInstance().getValidator().validateProperty(this.person, "department");
		if (!violations.isEmpty()) {
			for (ConstraintViolation<PersonProxy> constraintViolation : violations) {
				this.psaEntity.getValidation().setVisible(true);
				this.psaEntity.getValidation().setText(constraintViolation.getMessage());
			}
			if (this.disabledValidate == null) {
				this.disabledValidate = SignStep1ViewImpl.this.validate1.addClickHandler(new ClickHandler() {
					@Override
					public void onClick(ClickEvent event) {
						event.preventDefault();
					}
				});
			}
		} else {
			if (updateValidate()) {
				if (disabledValidate != null) {
					this.disabledValidate.removeHandler();
					disabledValidate = null;
				}
			} else {
				this.psaEntity.getValidation().setVisible(false);
			}
		}
	}

	public boolean updateValidate() {
		boolean validate = false;
		getUpdatedPerson(person);
		Set<ConstraintViolation<PersonProxy>> violations = ClientFactoryImpl.getInstance().getValidator().validate(person);
		if (violations.isEmpty()) {
			validate = true;
		}
		return validate;
	}

	private static native void log(String s) /*-{
		console.log(s);
	}-*/;

}
