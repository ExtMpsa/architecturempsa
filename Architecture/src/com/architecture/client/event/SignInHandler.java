package com.architecture.client.event;

import com.google.gwt.event.shared.EventHandler;

public interface SignInHandler extends EventHandler {
	void onSignIn(SignInEvent event);
}
