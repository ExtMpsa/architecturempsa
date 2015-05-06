package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class FormsMultipleUrlEvent extends GwtEvent<FormsMultipleUrlEventHandler> {
	public static Type<FormsMultipleUrlEventHandler> TYPE = new Type<FormsMultipleUrlEventHandler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<FormsMultipleUrlEventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(FormsMultipleUrlEventHandler handler) {
		handler.onFormsMultipleUrl(this);
	}

}
