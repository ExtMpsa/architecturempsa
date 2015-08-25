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
		assertThat(service, is(notNullValue()));
	}

	private final String mail = "mail@gmail.com";
	private final String mailLowerCase = "mailtolowercase@gmail.com";
	private final String mailWithUpperCase = "MailToLowerCase@Gmail.Com";
	private final String pwd = "password";

	@Test
	public void checkMailAlreadyRegistered() throws Exception {
		service.checkMail(mail);
		assertThat(true, is(true));
	}

	@Test(expected = MailAlreadyUsedException.class)
	public void checkMailAlreadyRegisteredMailAlreadyUsedException() throws Exception {
		service.create(mail, pwd);
		service.checkMail(mail);
		assertThat(true, is(true));
	}

	@Test(expected = AttackHackingException.class)
	public void checkMailAlreadyRegisteredAttackHackingException() throws Exception {
		service.checkMail("digitalPerformanceTraining");
		assertThat(true, is(true));
	}

	@Test
	public void createWithEmptyDataStore() throws Exception {
		service.create(mail, pwd);
		Account account = Datastore.query(a).filter(a.mail.startsWith(mail)).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is(mail));
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
		service.create(mail, pwd);
		Account account = Datastore.query(a).filter(a.mail.startsWith(mail)).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is(mail));

		service.create(mail2, pwd);
		account = Datastore.query(a).filter(a.mail.startsWith(mail2)).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is(mail2));
	}

	@Test(expected = MailAlreadyUsedException.class)
	public void createWithMailUsed() throws Exception {
		service.create(mail, pwd);
		Account account = Datastore.query(a).filter(a.mail.startsWith(mail)).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is(mail));

		service.create(mail, pwd);
	}

	private Set<String> validMails = new HashSet<String>();

	@Test
	public void createWithValidMails() throws Exception {
		validMails.add("digitalPerformanceTraining@yahoo.com");
		validMails.add("digitalPerformanceTraining-100@yahoo.com");
		validMails.add("digitalPerformanceTraining.100@yahoo.com");
		validMails.add("digitalPerformanceTraining111@digitalPerformanceTraining.com");
		validMails.add("digitalPerformanceTraining-100@digitalPerformanceTraining.net");
		validMails.add("digitalPerformanceTraining.100@digital.Performance.Training");
		validMails.add("digitalPerformanceTraining@1.com");
		validMails.add("digitalPerformanceTraining@gmail.com.com");
		validMails.add("digitalPerformanceTraining+100@gmail.com");
		validMails.add("digitalPerformanceTraining-100@yahoo-test.com");
		for (String mail : validMails) {
			service.create(mail, pwd);
		}
	}

	private Set<String> invalidMails = new HashSet<String>();

	@Test(expected = AttackHackingException.class)
	public void createWithInvalidMails() throws Exception {
		invalidMails.add("digitalPerformanceTraining");
		invalidMails.add("digitalPerformanceTraining@.com.my");
		invalidMails.add("digitalPerformanceTraining123@gmail.a");
		invalidMails.add("digitalPerformanceTraining123@.com");
		invalidMails.add("digitalPerformanceTraining123@.com.com");
		invalidMails.add(".digitalPerformanceTraining@digitalPerformanceTraining.com");
		invalidMails.add("digitalPerformanceTraining()*@gmail.com");
		invalidMails.add("digitalPerformanceTraining@%*.com");
		invalidMails.add("digitalPerformanceTraining..2015@gmail.com");
		invalidMails.add("digitalPerformanceTraining.@gmail.com");
		invalidMails.add("digitalPerformance@Training@gmail.com");
		invalidMails.add("digitalPerformance@gmail.com.1a");
		Exception exception = null;
		for (String mail : invalidMails) {
			try {
				service.create(mail, pwd);
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
		service.create("digitalPerformanceTraining@yahoo.com", "digitalperformanceT1@");
		service.create("digitalPerformanceTraining2@yahoo.com", "digitalPerformance12$");
	}

	@Test
	public void signInTrue() throws Exception {
		service.create("mail@gmail.com", "password");
		Account account = Datastore.query(Account.class).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is("mail@gmail.com"));
		assertThat(service.signIn("mail@gmail.com", "password"), is(notNullValue()));
	}

	@Test
	public void signInFailNull() throws Exception {
		assertThat(service.signIn("mail@gmail.com", "password"), is(nullValue()));
	}

	@Test
	public void signInFailNotMatch() throws Exception {
		service.create("mail@gmail.com", "password");
		Account account = Datastore.query(Account.class).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is("mail@gmail.com"));
		assertThat(service.signIn("mail@gmail.com", "pwd"), is(nullValue()));
	}

	@Test
	public void getAccount() {
		String mail = "digitalPerformanceTraining@yahoo.com";
		Account account = new Account();
		account.setMail(mail);
		Datastore.put(account);
		Account getAccount = service.getAccount(mail);
		assertThat(getAccount.getMail(), is(mail));
	}

	@Test
	public void saveGtmAccountNull() {
		String mail = "digitalPerformanceTraining@yahoo.com";
		String gtmId = "GTM-123456";

		service.saveGtm(gtmId, mail);
		assertThat(service.getGtmId("digitalPerformanceTraining@yahoo.com"), is(nullValue()));
	}

	@Test
	public void saveGtmAccountNotNull() {
		String mail = "digitalPerformanceTraining@yahoo.com";
		Account account = new Account();
		account.setMail(mail);
		Datastore.put(account);

		String gtmId = "GTM-123456";

		service.saveGtm(gtmId, mail);
		assertThat(service.getGtmId("digitalPerformanceTraining@yahoo.com"), is(gtmId));
	}

	@Test
	public void mapGtm() throws Exception {
		service.create(mail, pwd);
		String gtmId = "GTM-123456";
		service.saveGtm(gtmId, mail);
		assertThat(service.getGtmId(mail), is("GTM-123456"));
	}

	@Test
	public void getGtmId() throws Exception {
		// create account
		service.create(mail, pwd);

		// create gtm
		Account account = Datastore.query(a).filter(a.mail.startsWith(mail)).asSingle();
		String gtmId = "GTM-123456";
		GoogleTagManager gtm = new GoogleTagManager(gtmId);

		assertThat(account, is(notNullValue()));
		account.getGtm().setModel(gtm);

		// Save it
		Datastore.put(gtm, account);

		assertThat(service.getGtmId(mail), is("GTM-123456"));
	}

	@Test
	public void getGtmIdNotMapped() throws Exception {
		// create account
		service.create(mail, pwd);

		assertThat(service.getGtmId(mail), is(nullValue()));
	}
}
