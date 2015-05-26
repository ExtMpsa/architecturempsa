package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class ValidateEvent extends GwtEvent<ValidateHandler> {
	public static Type<ValidateHandler> TYPE = new Type<ValidateHandler>();

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<ValidateHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(ValidateHandler handler) {
		handler.onValidate(this);
	}
}
