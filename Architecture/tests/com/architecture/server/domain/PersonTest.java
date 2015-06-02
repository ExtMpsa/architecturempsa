package com.architecture.server.domain;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class PersonTest {
	protected Person p;

	@Before
	public void setUp() throws Exception {
		p = new Person();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testGetLastName() {
		assertEquals(null, p.getLastName());
		String s = "Nom de famille";
		p.setLastName(s);
		assertEquals(s, p.getLastName());
	}

}
