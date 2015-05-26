package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class ValidateSignStep2Event extends  GwtEvent<ValidateSignStep2Handler> {
	public static Type<ValidateSignStep2Handler> TYPE = new Type<ValidateSignStep2Handler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<ValidateSignStep2Handler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(ValidateSignStep2Handler handler) {
		handler.onValidateStep2(this);
	}
}
