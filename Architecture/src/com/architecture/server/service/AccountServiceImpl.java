package com.architecture.server.service;

import java.util.Date;

import org.slim3.datastore.Datastore;

import com.architecture.client.exception.AttackHackingException;
import com.architecture.client.exception.MailAlreadyUsedException;
import com.architecture.client.service.AccountService;
import com.architecture.server.meta.AccountMeta;
import com.architecture.shared.model.Account;

public class AccountServiceImpl implements AccountService {
	private AccountMeta a = new AccountMeta();
	private static final String EMAIL_PATTERN = 
			"^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
			+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
	
	@Override
	public void create(String mail, String password) throws AttackHackingException,MailAlreadyUsedException {
		Account account = Datastore.query(a).filter(a.mail.equal(mail)).asSingle();
		if (account != null) {
			throw new MailAlreadyUsedException("Tentative d'enregistrement d'un compte avec un email déjà utilisé.");
		} else if(!mail.matches(EMAIL_PATTERN)){
			throw new AttackHackingException("Attaque du serveur par le client : tentative d'enregistrement d'un compte avec un email qui ne respecte pas les contraintes de validation.");
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
