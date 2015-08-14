package com.architecture.client.event;

import com.google.gwt.event.shared.EventHandler;

public interface SignUpHandler extends EventHandler {
	void onSignUp(SignUpEvent event);
}
