package com.architecture.server.service;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import javax.validation.ConstraintViolationException;

import org.junit.Test;
import org.slim3.datastore.Datastore;
import org.slim3.tester.ServletTestCase;

import com.architecture.shared.model.Account;

public class AccountServiceImplTest extends ServletTestCase {

	private AccountServiceImpl service = new AccountServiceImpl();

	@Test
	public void test() throws Exception {
		assertThat(service, is(notNullValue()));
	}

	@Test
	public void create() throws Exception {
		service.create("mail@gmail.com", "password");
		Account account = Datastore.query(Account.class).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is("mail@gmail.com"));
	}

	@Test(expected = ConstraintViolationException.class)
	public void createDouble() throws Exception {
		service.create("mail@gmail.com", "password");
		Account account = Datastore.query(Account.class).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is("mail@gmail.com"));

		service.create("mail@gmail.com", "password");
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
