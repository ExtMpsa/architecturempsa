package com.architecture.client.event.account;

import com.google.gwt.event.shared.EventHandler;

public interface SignInSuccessHandler extends EventHandler {
	void onSignInSuccess(SignInSuccessEvent event);
}
