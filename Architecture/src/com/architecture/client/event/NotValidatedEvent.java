package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class NotValidatedEvent extends GwtEvent<NotValidatedHandler> {
	public static Type<NotValidatedHandler> TYPE = new Type<NotValidatedHandler>();

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<NotValidatedHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(NotValidatedHandler handler) {
		handler.onNotValidated(this);
	}
}
