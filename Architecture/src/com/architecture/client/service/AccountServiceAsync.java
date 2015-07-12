package com.architecture.client.service;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface AccountServiceAsync {

	void create(String mail, String password, AsyncCallback<Void> callback);

	void signIn(String mail, String password, AsyncCallback<Boolean> callback);

}
