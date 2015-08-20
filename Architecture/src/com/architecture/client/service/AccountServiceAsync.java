package com.architecture.client.service;

import java.util.Date;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface AccountServiceAsync {

	void create(String mail, String password, AsyncCallback<Void> callback);

	void signIn(String mail, String password, AsyncCallback<Date> callback);

	void checkMail(String mail, AsyncCallback<Void> callback);

}
