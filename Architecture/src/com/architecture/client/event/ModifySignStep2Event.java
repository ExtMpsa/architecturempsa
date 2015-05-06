package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class ModifySignStep2Event extends  GwtEvent<ModifySignStep2EventHandler> {
	public static Type<ModifySignStep2EventHandler> TYPE = new Type<ModifySignStep2EventHandler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<ModifySignStep2EventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(ModifySignStep2EventHandler handler) {
		handler.onModifyStep2(this);
	}
}
