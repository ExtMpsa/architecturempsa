package com.architecture.client.appcache.event;

import javax.annotation.Nonnull;

import com.architecture.client.appcache.event.ProgressEvent.Handler;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.GwtEvent;

public class ProgressEvent extends GwtEvent<Handler> {
	public interface Handler extends EventHandler {
		void onProgressEvent(@Nonnull ProgressEvent event);
	}

	private static final GwtEvent.Type<Handler> TYPE = new Type<Handler>();

	public static GwtEvent.Type<Handler> getType() {
		return TYPE;
	}

	private final int _loaded;
	private final int _total;

	public ProgressEvent(final int loaded, final int total) {
		_loaded = loaded;
		_total = total;
	}

	public boolean isLengthComputable() {
		return 0 != _total;
	}

	public int getLoaded() {
		return _loaded;
	}

	public int getTotal() {
		return _total;
	}

	@Override
	public GwtEvent.Type<Handler> getAssociatedType() {
		return ProgressEvent.getType();
	}

	@Override
	protected void dispatch(@Nonnull final Handler handler) {
		handler.onProgressEvent(this);
	}
}