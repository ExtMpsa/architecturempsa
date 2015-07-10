package com.architecture.server.service;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import javax.validation.ConstraintViolationException;

import org.junit.Test;
import org.slim3.datastore.Datastore;
import org.slim3.tester.ServletTestCase;

import com.architecture.server.meta.AccountMeta;
import com.architecture.shared.model.Account;

public class AccountServiceImplTest extends ServletTestCase {

	private AccountServiceImpl service = new AccountServiceImpl();
	private AccountMeta a = new AccountMeta();

	@Test
	public void test() throws Exception {
		assertThat(service, is(notNullValue()));
	}
	

	private final String mail = "mail@gmail.com";
	private final String pwd = "password";
	@Test
	public void createWithEmptyDataStore() throws Exception {
		service.create(mail, pwd);
		Account account = Datastore.query(a).filter(a.mail.startsWith(mail)).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is(mail));
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

	@Test(expected = ConstraintViolationException.class)
	public void createWithMailUsed() throws Exception {
		service.create(mail, pwd);
		Account account = Datastore.query(a).filter(a.mail.startsWith(mail)).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is(mail));
		
		service.create(mail, pwd);
	}
	
	private String emptyMail = "";
	@Test(expected = ConstraintViolationException.class)
	public void createWithLengthConstraintMailViolation() throws Exception {
		service.create(emptyMail, pwd);
	}
	
	private String wrongMail = "mail";
	@Test(expected = ConstraintViolationException.class)
	public void createWithFormatConstraintMailViolation() throws Exception {
		service.create(wrongMail, pwd);
	}

	@Test
	public void signInTrue() throws Exception {
		service.create("mail@gmail.com", "password");
		Account account = Datastore.query(Account.class).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is("mail@gmail.com"));
		assertThat(service.signIn("mail@gmail.com", "password"), is(true));
	}

	@Test
	public void signInFail() throws Exception {
		assertThat(service.signIn("mail@gmail.com", "password"), is(false));
	}
}
