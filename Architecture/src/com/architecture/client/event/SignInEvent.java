package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class SignInEvent extends GwtEvent<SignInHandler> {
	public static Type<SignInHandler> TYPE = new Type<SignInHandler>();

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<SignInHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(SignInHandler handler) {
		handler.onSignIn(this);
	}

}
