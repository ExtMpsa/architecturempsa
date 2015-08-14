package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class SignUpEvent extends GwtEvent<SignUpHandler> {
	public static Type<SignUpHandler> TYPE = new Type<SignUpHandler>();

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<SignUpHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(SignUpHandler handler) {
		handler.onSignUp(this);
	}

}
