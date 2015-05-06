package com.architecture.client.event;

import com.google.gwt.event.shared.EventHandler;

public interface SignInEventHandler extends EventHandler {
	void onSignIn(SignInEvent event);
}
