package com.architecture.server.service;

import java.util.Date;

import org.slim3.datastore.Datastore;

import com.architecture.client.exception.AttackHackingException;
import com.architecture.client.exception.MailAlreadyUsedException;
import com.architecture.client.service.AccountService;
import com.architecture.server.meta.AccountMeta;
import com.architecture.shared.model.Account;
import com.architecture.shared.model.GoogleTagManager;

public class AccountServiceImpl implements AccountService {
	private AccountMeta a = new AccountMeta();
	private static final String EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

	@Override
	public void checkMail(String mail) throws MailAlreadyUsedException, AttackHackingException {
		String mailLowerCase = mail.toLowerCase();
		Account account = Datastore.query(a).filter(a.mail.equal(mailLowerCase)).asSingle();
		if (account != null) {
			throw new MailAlreadyUsedException("Tentative d'enregistrement d'un compte avec un e-mail déjà utilisé.");
		} else if (!mail.matches(EMAIL_PATTERN)) {
			throw new AttackHackingException("Attaque du serveur par le client : tentative d'enregistrement d'un compte avec un e-mail qui ne respecte pas les contraintes de validation.");
		}
	}

	@Override
	public void create(String mail, String password) throws MailAlreadyUsedException, AttackHackingException {
		String mailLowerCase = mail.toLowerCase();
		Account account = Datastore.query(a).filter(a.mail.equal(mailLowerCase)).asSingle();
		if (account != null) {
			throw new MailAlreadyUsedException("Tentative d'enregistrement d'un compte avec un e-mail déjà utilisé.");
		} else if (!mail.matches(EMAIL_PATTERN)) {
			throw new AttackHackingException("Attaque du serveur par le client : tentative d'enregistrement d'un compte avec un e-mail qui ne respecte pas les contraintes de validation.");
		} else {
			account = new Account(mailLowerCase, password);
			account.setCreatedDate(new Date());
			GoogleTagManager gtm = new GoogleTagManager("");
			account.getGtm().setModel(gtm);
			Datastore.put(gtm, account);
		}
	}

	@Override
	public Date signIn(String mail, String password) {
		Date result = null;
		Account account = Datastore.query(Account.class).filter(a.mail.equal(mail)).asSingle();
		if (account != null) {
			if (account.getPassword().equals(password)) {
				account.setLastConnexion(new Date());
				Datastore.put(account);
				result = account.getLastConnexion();
			}
		}
		return result;
	}

	@Override
	public Account getAccount(String mail) {
		Account account = Datastore.query(Account.class).filter(a.mail.equal(mail)).asSingle();
		account.setPassword("");
		return account;
	}

	@Override
	public void saveGtm(String gtmId, String mail) {
		Account account = Datastore.query(Account.class).filter(a.mail.equal(mail)).asSingle();
		GoogleTagManager gtm;
		if (account != null) {
			if (account.getGtm() != null) {
				if (account.getGtm().getModel() != null) {
					gtm = account.getGtm().getModel();
					gtm.setGtmId(gtmId);
				} else {
					gtm = new GoogleTagManager(gtmId);
				}
				account.getGtm().setModel(gtm);
				Datastore.put(gtm, account);
			}
		}
	}

	@Override
	public String getGtmId(String mail) {
		String result = "";
		Account account = Datastore.query(Account.class).filter(a.mail.equal(mail)).asSingle();
		if (account != null) {
			if (account.getGtm() != null) {
				GoogleTagManager gtm = account.getGtm().getModel();
				if (gtm != null) {
					if (gtm.getGtmId() != null) {
						result = gtm.getGtmId();
					} else {
						result = "gtm.getGtmId()=null";
					}
				} else {
					result = "gtm=null";
				}
			} else {
				result = "account.getGtm = null";
			}
		} else {
			result = "account = null";
		}
		return result;
	}
}
