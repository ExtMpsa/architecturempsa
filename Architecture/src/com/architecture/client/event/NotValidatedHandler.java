package com.architecture.client.event;

import com.google.gwt.event.shared.EventHandler;

public interface NotValidatedHandler extends EventHandler {
	void onNotValidated(NotValidatedEvent event);
}
