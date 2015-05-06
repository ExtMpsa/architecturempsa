package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class TracingPaperEvent extends GwtEvent<TracingPaperEventHandler> {
	public static Type<TracingPaperEventHandler> TYPE = new Type<TracingPaperEventHandler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<TracingPaperEventHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(TracingPaperEventHandler handler) {
		handler.onTracingPaper(this);
	}

}
