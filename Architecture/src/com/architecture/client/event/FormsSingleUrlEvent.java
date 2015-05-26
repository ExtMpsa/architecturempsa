package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class FormsSingleUrlEvent extends  GwtEvent<FormsSingleUrlHandler> {
	public static Type<FormsSingleUrlHandler> TYPE = new Type<FormsSingleUrlHandler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<FormsSingleUrlHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(FormsSingleUrlHandler handler) {
		handler.onFormsSingleUrl(this);
	}
}
