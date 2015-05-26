package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class ModifySignStep1Event extends  GwtEvent<ModifySignStep1Handler> {
	public static Type<ModifySignStep1Handler> TYPE = new Type<ModifySignStep1Handler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<ModifySignStep1Handler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(ModifySignStep1Handler handler) {
		handler.onModifyStep1(this);
	}
}
