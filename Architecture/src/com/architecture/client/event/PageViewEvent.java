package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class PageViewEvent extends GwtEvent<PageViewHandler> {
	public static Type<PageViewHandler> TYPE = new Type<PageViewHandler>();

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<PageViewHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(PageViewHandler handler) {
		handler.onPageView(this);
	}
}
