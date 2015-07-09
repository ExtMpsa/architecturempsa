package com.architecture.server.service;

import org.slim3.datastore.Datastore;

import com.architecture.client.service.AccountService;
import com.architecture.server.meta.AccountMeta;
import com.architecture.shared.model.Account;

public class AccountServiceImpl implements AccountService {
	private AccountMeta a = new AccountMeta();

	@Override
	public void create(String mail, String password) {
		Account account = new Account(mail, password);
		Datastore.put(account);
	}

	@Override
	public boolean signIn(String mail, String password) {
		boolean result = false;
		Account account = Datastore.query(Account.class).filter(a.mail.equal(mail)).asSingle();
		if (account != null) {
			result = true;
		}
		return result;
	}
}
