package com.architecture.client.ui.composite;

import java.util.Set;

import javax.validation.ConstraintViolation;

import com.architecture.client.ClientFactoryImpl;
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
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

public class SignStep1ViewImpl extends Composite {

	private static SignStep1ViewImplUiBinder uiBinder = GWT.create(SignStep1ViewImplUiBinder.class);
	@UiField
	HeadingElement step;
	@UiField
	Anchor modify;
	@UiField
	Anchor validate;
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
	boolean lastNameFocus = false;
	boolean firstNameFocus = false;
	boolean emailFocus = false;
	boolean departmentFocus = false;

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
		this.validate.setText(signText.validate());
		this.validate.setHash("#FormsPlace:step2");
		firstFocus();
	}

	public void firstFocus() {
		if (person == null) {
			// Focus
			Scheduler.get().scheduleDeferred(new ScheduledCommand() {
				@Override
				public void execute() {
					lastName.getTextBox().setFocus(true);
				}
			});
		} else {
			// Focus
			Scheduler.get().scheduleDeferred(new ScheduledCommand() {
				@Override
				public void execute() {
					lastName.getTextBox().setFocus(true);
				}
			});
		}
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

	@UiHandler("validate")
	void onValidateClick(ClickEvent event) {
		if (updateValidate(true)) {
			if (disabledValidate != null) {
				this.disabledValidate.removeHandler();
				disabledValidate = null;
			}
		} else {
			focus();
		}
	}

	public Grid getContent() {
		return this.content;
	}

	public void setOpen() {
		this.modify.setVisible(false);
		this.content.setVisible(true);
		this.validate.setVisible(true);
		firstFocus();
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
		getUpdatedPerson(this.person);
		Set<ConstraintViolation<PersonProxy>> violations = ClientFactoryImpl.getInstance().getValidator().validateProperty(this.person, "lastName");
		if (!violations.isEmpty()) {
			for (ConstraintViolation<PersonProxy> constraintViolation : violations) {
				this.lastName.getValidation().setVisible(true);
				this.lastName.getValidation().setText(constraintViolation.getMessage());
			}
			if (this.disabledValidate == null) {
				disabledValidate = DisableValidateHandler();
			}
		} else {
			SetVisibleTimer(lastName).schedule(100);
			if (updateValidate(false)) {
				if (disabledValidate != null) {
					this.disabledValidate.removeHandler();
					disabledValidate = null;
				}
			}
		}
	}

	@UiHandler("mail")
	void onMailBlur(BlurEvent event) {
		getUpdatedPerson(this.person);
		Set<ConstraintViolation<PersonProxy>> violations = ClientFactoryImpl.getInstance().getValidator().validateProperty(this.person, "email");
		if (!violations.isEmpty()) {
			for (ConstraintViolation<PersonProxy> constraintViolation : violations) {
				this.mail.getValidation().setVisible(true);
				this.mail.getValidation().setText(constraintViolation.getMessage());
			}
			if (this.disabledValidate == null) {
				disabledValidate = DisableValidateHandler();
			}
		} else {
			SetVisibleTimer(mail).schedule(100);
			if (updateValidate(false)) {
				if (disabledValidate != null) {
					this.disabledValidate.removeHandler();
					disabledValidate = null;
				}
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
				disabledValidate = DisableValidateHandler();
			}
		} else {
			SetVisibleTimer(firstName).schedule(100);
			if (updateValidate(false)) {
				if (disabledValidate != null) {
					this.disabledValidate.removeHandler();
					disabledValidate = null;
				}
			}
		}
	}

	@UiHandler("psaEntity")
	void onPsaEntityBlur(BlurEvent event) {
		getUpdatedPerson(this.person);
		Set<ConstraintViolation<PersonProxy>> violations = ClientFactoryImpl.getInstance().getValidator().validateProperty(this.person, "department");
		if (!violations.isEmpty()) {
			for (ConstraintViolation<PersonProxy> constraintViolation : violations) {
				psaEntity.getValidation().setVisible(true);
				psaEntity.getValidation().setText(constraintViolation.getMessage());
			}
			if (disabledValidate == null) {
				disabledValidate = DisableValidateHandler();
			}
		} else {
			SetVisibleTimer(psaEntity).schedule(100);
			if (updateValidate(false)) {
				if (disabledValidate != null) {
					this.disabledValidate.removeHandler();
					disabledValidate = null;
				}
			}
		}
	}

	public boolean updateValidate(boolean showError) {
		boolean validate = false;
		if (person != null) {
			getUpdatedPerson(person);
			Set<ConstraintViolation<PersonProxy>> violations = ClientFactoryImpl.getInstance().getValidator().validate(person);
			if (violations.isEmpty()) {
				validate = true;
			} else {
				for (ConstraintViolation<PersonProxy> constraintViolation : violations) {
					switch (constraintViolation.getPropertyPath().toString()) {
					case "department":
						if (showError) {
							this.psaEntity.getValidation().setVisible(true);
							this.psaEntity.getValidation().setText(constraintViolation.getMessage());
						}
						if (!lastNameFocus & !firstNameFocus & !emailFocus) {
							departmentFocus = true;
						}
						break;
					case "lastName":
						if (showError) {
							this.lastName.getValidation().setVisible(true);
							this.lastName.getValidation().setText(constraintViolation.getMessage());
						}
						lastNameFocus = true;
						firstNameFocus = false;
						emailFocus = false;
						departmentFocus = false;
						break;
					case "firstName":
						if (showError) {
							this.firstName.getValidation().setVisible(true);
							this.firstName.getValidation().setText(constraintViolation.getMessage());
						}
						if (!lastNameFocus) {
							firstNameFocus = true;
							emailFocus = false;
							departmentFocus = false;
						}
						break;
					case "email":
						if (showError) {
							this.mail.getValidation().setVisible(true);
							this.mail.getValidation().setText(constraintViolation.getMessage());
						}
						if (!lastNameFocus & !firstNameFocus) {
							emailFocus = true;
							departmentFocus = false;
						}
						break;
					}
				}
			}
		}
		return validate;
	}

	private void focus() {
		if (lastNameFocus) {
			this.lastName.getTextBox().setFocus(true);
		} else if (firstNameFocus) {
			this.firstName.getTextBox().setFocus(true);
		} else if (emailFocus) {
			this.mail.getTextBox().setFocus(true);
		} else if (departmentFocus) {
			this.psaEntity.getTextBox().setFocus(true);
		}
	}

	private HandlerRegistration DisableValidateHandler() {
		return validate.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				event.preventDefault();
			}
		});
	}

	// Timer for keep the click event when the blur event change the render of the document.
	private Timer SetVisibleTimer(final FieldComposite field) {
		return new Timer() {
			@Override
			public void run() {
				field.getValidation().setVisible(false);
			}
		};
	}
}
