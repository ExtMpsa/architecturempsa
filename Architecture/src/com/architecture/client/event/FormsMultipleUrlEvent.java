package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class FormsMultipleUrlEvent extends GwtEvent<FormsMultipleUrlHandler> {
	public static Type<FormsMultipleUrlHandler> TYPE = new Type<FormsMultipleUrlHandler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<FormsMultipleUrlHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(FormsMultipleUrlHandler handler) {
		handler.onFormsMultipleUrl(this);
	}

}
