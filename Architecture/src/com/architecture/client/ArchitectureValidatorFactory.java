package com.architecture.client;

import javax.validation.Validator;

import com.architecture.shared.model.Account;
import com.architecture.shared.proxy.PersonProxy;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.validation.client.AbstractGwtValidatorFactory;
import com.google.gwt.validation.client.GwtValidation;
import com.google.gwt.validation.client.impl.AbstractGwtValidator;

public final class ArchitectureValidatorFactory extends AbstractGwtValidatorFactory {

	@GwtValidation(value = { PersonProxy.class, Account.class })
	public interface GwtValidator extends Validator {
	}

	@Override
	public AbstractGwtValidator createValidator() {
		return GWT.create(GwtValidator.class);
	}

}
