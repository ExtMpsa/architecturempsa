package com.architecture.client.service;

import java.util.Set;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface AccountServiceAsync {

	void create(String mail, String password, AsyncCallback<Set<String>> callback);

	void signIn(String mail, String password, AsyncCallback<Boolean> callback);

}
