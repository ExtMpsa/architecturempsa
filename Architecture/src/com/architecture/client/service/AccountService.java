package com.architecture.client.service;

import com.architecture.client.exception.AttackHackingException;
import com.architecture.client.exception.MailAlreadyUsedException;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

@RemoteServiceRelativePath("service.s3gwt")
public interface AccountService extends RemoteService {
	void create(String mail, String password) throws MailAlreadyUsedException, AttackHackingException;

	void checkMail(String mail) throws MailAlreadyUsedException, AttackHackingException;

	boolean signIn(String mail, String password);
}
