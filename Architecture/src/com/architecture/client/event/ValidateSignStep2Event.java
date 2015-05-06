package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class ValidateSignStep2Event extends  GwtEvent<ValidateSignStep2EventHandler> {
	public static Type<ValidateSignStep2EventHandler> TYPE = new Type<ValidateSignStep2EventHandler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<ValidateSignStep2EventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(ValidateSignStep2EventHandler handler) {
		handler.onValidateStep2(this);
	}
}
