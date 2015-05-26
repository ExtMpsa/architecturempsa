package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class ModifySignStep2Event extends  GwtEvent<ModifySignStep2Handler> {
	public static Type<ModifySignStep2Handler> TYPE = new Type<ModifySignStep2Handler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<ModifySignStep2Handler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(ModifySignStep2Handler handler) {
		handler.onModifyStep2(this);
	}
}
