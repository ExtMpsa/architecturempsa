package com.architecture.server.service;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import java.util.HashSet;
import java.util.Set;

import org.junit.Test;
import org.slim3.datastore.Datastore;
import org.slim3.tester.ServletTestCase;

import com.architecture.client.exception.AttackHackingException;
import com.architecture.client.exception.MailAlreadyUsedException;
import com.architecture.server.meta.AccountMeta;
import com.architecture.shared.model.Account;
import com.architecture.shared.model.GoogleTagManager;

public class AccountServiceImplTest extends ServletTestCase {

	private AccountServiceImpl service = new AccountServiceImpl();
	private AccountMeta a = new AccountMeta();

	@Test
	public void test() throws Exception {
		assertThat(this.service, is(notNullValue()));
	}

	private final String mail = "mail@gmail.com";
	private final String mailLowerCase = "mailtolowercase@gmail.com";
	private final String mailWithUpperCase = "MailToLowerCase@Gmail.Com";
	private final String pwd = "password";

	@Test
	public void createWithEmptyDataStore() throws Exception {
		this.service.create(this.mail, this.pwd);
		Account account = Datastore.query(this.a).filter(this.a.mail.startsWith(this.mail)).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is(this.mail));
	}

	@Test
	public void createToLowerCase() throws Exception {
		service.create(mailWithUpperCase, pwd);
		Account account = Datastore.query(a).filter(a.mail.equal(mailLowerCase)).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is(mailLowerCase));
	}

	private final String mail2 = "mail2@gmail.com";

	@Test
	public void createWithNotEmptyDataStore() throws Exception {
		this.service.create(this.mail, this.pwd);
		Account account = Datastore.query(this.a).filter(this.a.mail.startsWith(this.mail)).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is(this.mail));

		this.service.create(this.mail2, this.pwd);
		account = Datastore.query(this.a).filter(this.a.mail.startsWith(this.mail2)).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is(this.mail2));
	}

	@Test(expected = MailAlreadyUsedException.class)
	public void createWithMailUsed() throws Exception {
		this.service.create(this.mail, this.pwd);
		Account account = Datastore.query(this.a).filter(this.a.mail.startsWith(this.mail)).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is(this.mail));

		this.service.create(this.mail, this.pwd);
	}

	private Set<String> validMails = new HashSet<String>();

	@Test
	public void createWithValidMails() throws Exception {
		this.validMails.add("digitalPerformanceTraining@yahoo.com");
		this.validMails.add("digitalPerformanceTraining-100@yahoo.com");
		this.validMails.add("digitalPerformanceTraining.100@yahoo.com");
		this.validMails.add("digitalPerformanceTraining111@digitalPerformanceTraining.com");
		this.validMails.add("digitalPerformanceTraining-100@digitalPerformanceTraining.net");
		this.validMails.add("digitalPerformanceTraining.100@digital.Performance.Training");
		this.validMails.add("digitalPerformanceTraining@1.com");
		this.validMails.add("digitalPerformanceTraining@gmail.com.com");
		this.validMails.add("digitalPerformanceTraining+100@gmail.com");
		this.validMails.add("digitalPerformanceTraining-100@yahoo-test.com");
		for (String mail : this.validMails) {
			this.service.create(mail, this.pwd);
		}
	}

	private Set<String> invalidMails = new HashSet<String>();

	@Test(expected = AttackHackingException.class)
	public void createWithInvalidMails() throws Exception {
		this.invalidMails.add("digitalPerformanceTraining");
		this.invalidMails.add("digitalPerformanceTraining@.com.my");
		this.invalidMails.add("digitalPerformanceTraining123@gmail.a");
		this.invalidMails.add("digitalPerformanceTraining123@.com");
		this.invalidMails.add("digitalPerformanceTraining123@.com.com");
		this.invalidMails.add(".digitalPerformanceTraining@digitalPerformanceTraining.com");
		this.invalidMails.add("digitalPerformanceTraining()*@gmail.com");
		this.invalidMails.add("digitalPerformanceTraining@%*.com");
		this.invalidMails.add("digitalPerformanceTraining..2015@gmail.com");
		this.invalidMails.add("digitalPerformanceTraining.@gmail.com");
		this.invalidMails.add("digitalPerformance@Training@gmail.com");
		this.invalidMails.add("digitalPerformance@gmail.com.1a");
		Exception exception = null;
		for (String mail : this.invalidMails) {
			try {
				this.service.create(mail, this.pwd);
				throw new Exception();
			} catch (Exception e) {
				if (e instanceof AttackHackingException) {
					exception = e;
				} else {
					exception = e;
					throw e;
				}
			}
		}
		throw exception;
	}

	@Test
	public void createWithValidPassword() throws Exception {
		this.service.create("digitalPerformanceTraining@yahoo.com", "digitalperformanceT1@");
		this.service.create("digitalPerformanceTraining2@yahoo.com", "digitalPerformance12$");
	}

	@Test
	public void signInTrue() throws Exception {
		this.service.create("mail@gmail.com", "password");
		Account account = Datastore.query(Account.class).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is("mail@gmail.com"));
		assertThat(this.service.signIn("mail@gmail.com", "password"), is(notNullValue()));
	}

	@Test
	public void signInFail() throws Exception {
		assertThat(this.service.signIn("mail@gmail.com", "password"), is(nullValue()));
	}

	@Test
	public void getAccount() throws Exception {
		String mail = "digitalPerformanceTraining@yahoo.com";
		Account account = new Account();
		account.setMail(mail);
		Datastore.put(account);
		Account getAccount = service.getAccount(mail);
		assertThat(getAccount.getMail(), is(mail));
	}

	@Test
	public void saveGtm() throws Exception {
		String mail = "digitalPerformanceTraining@yahoo.com";
		String password = "Azerty1@";
		Account account = new Account();
		account.setMail(mail);
		account.setPassword(password);

		String gtmId = "GTM-XXXXXX";
		GoogleTagManager gtm = new GoogleTagManager(gtmId);

		account.getGtm().setModel(gtm);
		Datastore.put(gtm, account);
	}
}
