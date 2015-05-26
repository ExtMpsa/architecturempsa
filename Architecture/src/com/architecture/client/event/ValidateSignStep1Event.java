package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class ValidateSignStep1Event extends  GwtEvent<ValidateSignStep1Handler> {
	public static Type<ValidateSignStep1Handler> TYPE = new Type<ValidateSignStep1Handler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<ValidateSignStep1Handler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(ValidateSignStep1Handler handler) {
		handler.onValidateStep1(this);
	}
}
