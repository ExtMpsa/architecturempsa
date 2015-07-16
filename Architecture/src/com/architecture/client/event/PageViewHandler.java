package com.architecture.client.event;

import com.google.gwt.event.shared.EventHandler;

public interface PageViewHandler extends EventHandler {
	void onPageView(PageViewEvent event);
}
