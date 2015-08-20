package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class SignInSuccessEvent extends GwtEvent<SignInSuccessHandler> {
	public static Type<SignInSuccessHandler> TYPE = new Type<SignInSuccessHandler>();

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<SignInSuccessHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(SignInSuccessHandler handler) {
		handler.onSignInSuccess(this);
	}

}
