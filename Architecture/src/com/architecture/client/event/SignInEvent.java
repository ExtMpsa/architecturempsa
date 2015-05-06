package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class SignInEvent extends GwtEvent<SignInEventHandler> {
	public static Type<SignInEventHandler> TYPE = new Type<SignInEventHandler>();

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<SignInEventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(SignInEventHandler handler) {
		handler.onSignIn(this);
	}

}
