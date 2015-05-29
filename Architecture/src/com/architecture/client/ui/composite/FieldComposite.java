package com.architecture.client.ui.composite;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

import com.architecture.client.event.NotValidatedEvent;
import com.architecture.client.event.NotValidatedHandler;
import com.architecture.client.event.ValidatedEvent;
import com.architecture.client.event.ValidatedHandler;
import com.architecture.client.ui.widget.TextBox;
import com.architecture.shared.proxy.PersonProxy;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.BlurEvent;
import com.google.gwt.event.dom.client.BlurHandler;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;
import com.google.web.bindery.requestfactory.shared.EntityProxy;

public class FieldComposite extends Composite {

	private static FieldViewUiBinder uiBinder = GWT.create(FieldViewUiBinder.class);
	@UiField
	Label name;
	@UiField
	TextBox value;
	@UiField
	Label validation;
	Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
	EntityProxy entity = null;
	String property = null;

	interface FieldViewUiBinder extends UiBinder<Widget, FieldComposite> {
	}

	public FieldComposite() {
		initWidget(uiBinder.createAndBindUi(this));
		setLabel("Name");
		validation.setVisible(true);
	}

	public EntityProxy getEntity() {
		return entity;
	}

	public void setEntity(PersonProxy entity) {
		this.entity = entity;
	}

	public FieldComposite(String text) {
		initWidget(uiBinder.createAndBindUi(this));
		setLabel(text);
		validation.setVisible(false);
	}

	public void setLabel(String text) {
		name.setText(text);
	}

	public void setPlaceHolder(String placeHolder) {
		value.setPlaceHolder(placeHolder);
	}

	public void setText(String text) {
		value.setText(text);
	}

	public void setTextValidation(String text) {
		validation.setText(text);
	}

	public void setValidationVisible(boolean visible) {
		validation.setVisible(visible);
	}

	public Label getName() {
		return name;
	}

	public void setName(Label name) {
		this.name = name;
	}

	public TextBox getTextBox() {
		return value;
	}

	public void setTextBox(TextBox textBox) {
		this.value = textBox;
	}

	public Label getValidation() {
		return validation;
	}

	public void setValidation(Label validation) {
		this.validation = validation;
	}

	public void setProperty(String property) {
		this.property = property;
	}

	public HandlerRegistration addBlurHandler(BlurHandler handler) {
		return addDomHandler(handler, BlurEvent.getType());
	}

	public HandlerRegistration addValidateHandler(ValidatedHandler handler) {
		return addHandler(handler, ValidatedEvent.TYPE);
	}

	public HandlerRegistration addNotValidateHandler(NotValidatedHandler handler) {
		return addHandler(handler, NotValidatedEvent.TYPE);
	}

	@UiHandler("value")
	void onValueBlur(BlurEvent event) {
		this.fireEvent(event);
	}

	public boolean validate() {
		boolean validate = false;
		if (validator != null && entity != null && property != null) {
			// if (property.equals("lastName")) {
			// entity.setLastName(value.getValue());
			// } else if (property.equals("firstName")) {
			// entity.setFirstName(value.getValue());
			// } else if (property.equals("department")) {
			// entity.setDepartment(value.getValue());
			// } else if (property.equals("email")) {
			// entity.setEmail(value.getValue());
			// }
			Set<ConstraintViolation<EntityProxy>> violations = validator.validateProperty(this.entity, property);
			if (violations.isEmpty()) {
				validation.setVisible(false);
				validate = true;
			} else {
				for (ConstraintViolation<EntityProxy> constraintViolation : violations) {
					validation.setVisible(false);
					validation.setText(constraintViolation.getMessage());
				}
				validation.setVisible(true);
			}
		}
		if (validate) {
			this.fireEvent(new ValidatedEvent());
		} else {
			this.fireEvent(new NotValidatedEvent());
		}
		return validate;
	}
}
