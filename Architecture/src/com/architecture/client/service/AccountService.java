package com.architecture.client.service;

import java.util.Date;

import com.architecture.client.exception.AttackHackingException;
import com.architecture.client.exception.MailAlreadyUsedException;
import com.architecture.shared.model.Account;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

@RemoteServiceRelativePath("service.s3gwt")
public interface AccountService extends RemoteService {
	void create(String mail, String password) throws MailAlreadyUsedException, AttackHackingException;

	void checkMail(String mail) throws MailAlreadyUsedException, AttackHackingException;

	Date signIn(String mail, String password);

	Account getAccount(String mail);

	void saveGtm(String gtmId, String mail);
}
