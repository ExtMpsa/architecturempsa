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

	@Test(expected = MailAlreadyUsedException.class)
	public void createWithMailUsed() throws Exception {
		service.create(mail, pwd);
		Account account = Datastore.query(a).filter(a.mail.startsWith(mail)).asSingle();
		assertThat(account, is(notNullValue()));
		assertThat(account.getMail(), is(mail));
		
		service.create(mail, pwd);
	}
	
	private Set<String> validMails = new HashSet<String>() ;
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
		for (String mail :validMails){
			service.create(mail, pwd);
		}
	}
	
	private Set<String> invalidMails = new HashSet<String>() ;
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
		Exception exception=null;
		for (String mail :invalidMails){
			try{
				service.create(mail, pwd);
				throw new Exception();
			}catch(Exception e){
				if (e instanceof AttackHackingException){
					exception = e;
				}else{
					exception = e;
					throw e;
				}
			}
		}
		throw exception;
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
