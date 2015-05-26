package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class HomeEvent extends  GwtEvent<HomeHandler> {
	public static Type<HomeHandler> TYPE = new Type<HomeHandler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<HomeHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(HomeHandler handler) {
		handler.onHome(this);
	}
}
