package com.architecture.client;

import javax.validation.Validator;

import com.architecture.shared.model.Account;
import com.architecture.shared.model.GoogleTagManager;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.validation.client.AbstractGwtValidatorFactory;
import com.google.gwt.validation.client.GwtValidation;
import com.google.gwt.validation.client.impl.AbstractGwtValidator;

public final class ArchitectureValidatorFactory extends AbstractGwtValidatorFactory {

	@GwtValidation(value = { Account.class, GoogleTagManager.class })
	public interface GwtValidator extends Validator {
	}

	@Override
	public AbstractGwtValidator createValidator() {
		return GWT.create(GwtValidator.class);
	}

}
