package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class ValidatedEvent extends GwtEvent<ValidatedHandler> {
	public static Type<ValidatedHandler> TYPE = new Type<ValidatedHandler>();

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<ValidatedHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(ValidatedHandler handler) {
		handler.onValidate(this);
	}
}
