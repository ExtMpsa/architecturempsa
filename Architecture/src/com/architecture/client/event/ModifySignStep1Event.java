package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class ModifySignStep1Event extends  GwtEvent<ModifySignStep1EventHandler> {
	public static Type<ModifySignStep1EventHandler> TYPE = new Type<ModifySignStep1EventHandler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<ModifySignStep1EventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(ModifySignStep1EventHandler handler) {
		handler.onModifyStep1(this);
	}
}
