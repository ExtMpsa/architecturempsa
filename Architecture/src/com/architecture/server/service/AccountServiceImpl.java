package com.architecture.server.service;

import java.util.Date;

import javax.validation.ConstraintViolationException;

import org.slim3.datastore.Datastore;

import com.architecture.client.service.AccountService;
import com.architecture.server.meta.AccountMeta;
import com.architecture.shared.model.Account;

public class AccountServiceImpl implements AccountService {
	private AccountMeta a = new AccountMeta();

	@Override
	public void create(String mail, String password) {
		Account account = Datastore.query(a).filter(a.mail.startsWith(mail)).asSingle();
		if (account != null) {
			throw new ConstraintViolationException("Email déjà enregistré", null);
		} else if(!mail.matches("..*@.*\\..*")){
			throw new ConstraintViolationException(null);
		} else {
			account = new Account(mail, password);
			account.setCreatedDate(new Date());
			Datastore.put(account);
		}
	}

	@Override
	public boolean signIn(String mail, String password) {
		boolean result = false;
		Account account = Datastore.query(Account.class).filter(a.mail.equal(mail)).asSingle();
		if (account != null) {
			account.setLastConnexion(new Date());
			result = true;
		}
		return result;
	}
}
