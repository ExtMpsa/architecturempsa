package com.architecture.shared.model;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.Test;
import org.slim3.tester.AppEngineTestCase;

public class PersonTest extends AppEngineTestCase {

	private Person model = new Person();

	@Test
	public void test() throws Exception {
		assertThat(model, is(notNullValue()));
	}

	@Test
	public void equalTrue() throws Exception {
		assertThat(model.equals(model), is(true));
	}

	@Test
	public void equalFalse() throws Exception {
		assertThat(model.equals("true"), is(false));
	}
}
