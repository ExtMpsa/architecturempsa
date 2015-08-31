package com.architecture.client.event.account;

import com.architecture.client.mvp.SignUpStep;
import com.google.gwt.event.shared.GwtEvent;

public class SignUpEvent extends GwtEvent<SignUpHandler> {
	public static Type<SignUpHandler> TYPE = new Type<SignUpHandler>();
	private SignUpStep step;

	public SignUpEvent(SignUpStep step) {
		setStep(step);
	}

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<SignUpHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(SignUpHandler handler) {
		handler.onSignUp(this);
	}

	/**
	 * @category Accessor
	 * @return the step
	 */
	public SignUpStep getStep() {
		return step;
	}

	/**
	 * @category Accessor
	 * @param step
	 *            the step to set
	 */
	public void setStep(SignUpStep step) {
		this.step = step;
	}

}
