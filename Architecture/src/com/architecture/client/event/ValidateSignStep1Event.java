package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class ValidateSignStep1Event extends  GwtEvent<ValidateSignStep1EventHandler> {
	public static Type<ValidateSignStep1EventHandler> TYPE = new Type<ValidateSignStep1EventHandler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<ValidateSignStep1EventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(ValidateSignStep1EventHandler handler) {
		handler.onValidateStep1(this);
	}
}
