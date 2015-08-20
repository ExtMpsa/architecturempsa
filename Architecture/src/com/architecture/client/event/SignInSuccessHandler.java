package com.architecture.client.event;

import com.google.gwt.event.shared.EventHandler;

public interface SignInSuccessHandler extends EventHandler {
	void onSignInSuccess(SignInSuccessEvent event);
}
