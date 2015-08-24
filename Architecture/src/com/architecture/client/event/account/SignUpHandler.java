package com.architecture.client.event.account;

import com.google.gwt.event.shared.EventHandler;

public interface SignUpHandler extends EventHandler {
	void onSignUp(SignUpEvent event);
}
