package com.architecture.client.event;

import com.google.gwt.event.shared.EventHandler;

public interface ActivityHandler extends EventHandler {
	void onActivity(ActivityEvent event);
}
