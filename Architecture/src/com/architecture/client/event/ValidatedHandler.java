package com.architecture.client.event;

import com.google.gwt.event.shared.EventHandler;

public interface ValidatedHandler extends EventHandler {
	void onValidate(ValidatedEvent event);
}
