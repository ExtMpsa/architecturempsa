package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class FormsSingleUrlEvent extends  GwtEvent<FormsSingleUrlEventHandler> {
	public static Type<FormsSingleUrlEventHandler> TYPE = new Type<FormsSingleUrlEventHandler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<FormsSingleUrlEventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(FormsSingleUrlEventHandler handler) {
		handler.onFormsSingleUrl(this);
	}
}
