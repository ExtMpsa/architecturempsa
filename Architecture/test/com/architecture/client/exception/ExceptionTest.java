package com.architecture.client.exception;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.Test;
import org.slim3.tester.AppEngineTestCase;

public class ExceptionTest extends AppEngineTestCase {

	@Test
	public void getMessageMailAlreadyUsed() {
		assertThat(new MailAlreadyUsedException(), is(notNullValue()));

		String message = "message";
		MailAlreadyUsedException mailAlreadyUsedException = new MailAlreadyUsedException(message);
		assertThat(mailAlreadyUsedException.getMessage(), is(message));
	}

	@Test
	public void AttackHacking() {
		assertThat(new AttackHackingException(), is(notNullValue()));

		String message = "message";
		AttackHackingException attackHackingException = new AttackHackingException(message);
		assertThat(attackHackingException.getMessage(), is(message));
	}
}
