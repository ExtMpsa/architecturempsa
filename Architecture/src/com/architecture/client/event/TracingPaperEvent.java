package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class TracingPaperEvent extends GwtEvent<TracingPaperHandler> {
	public static Type<TracingPaperHandler> TYPE = new Type<TracingPaperHandler>();
	
	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<TracingPaperHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(TracingPaperHandler handler) {
		handler.onTracingPaper(this);
	}

}
