package com.architecture.client.appcache.event;

import javax.annotation.Nonnull;

import com.architecture.client.appcache.event.CheckingEvent.Handler;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.GwtEvent;

public class CheckingEvent extends GwtEvent<Handler> {
	public interface Handler extends EventHandler {
		void onCheckingEvent(@Nonnull CheckingEvent event);
	}

	private static final GwtEvent.Type<Handler> TYPE = new Type<Handler>();

	public static GwtEvent.Type<Handler> getType() {
		return TYPE;
	}

	@Override
	public GwtEvent.Type<Handler> getAssociatedType() {
		return CheckingEvent.getType();
	}

	@Override
	protected void dispatch(@Nonnull final Handler handler) {
		handler.onCheckingEvent(this);
	}
}