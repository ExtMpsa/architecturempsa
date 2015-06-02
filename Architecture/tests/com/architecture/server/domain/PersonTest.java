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
	public void testLastName() {
		assertEquals(null, p.getLastName());
		String s = "Nom de famille";
		p.setLastName(s);
		assertEquals(s, p.getLastName());
	}

	@Test
	public void testFirstName() {
		assertEquals(null, p.getFirstName());
		String s = "Prénom";
		p.setFirstName(s);
		assertEquals(s, p.getFirstName());
	}

	@Test
	public void testDepartment() {
		assertEquals(null, p.getDepartment());
		String s = "Department";
		p.setDepartment(s);
		assertEquals(s, p.getDepartment());
	}

	@Test
	public void testMail() {
		assertEquals(null, p.getEmail());
		String s = "prenom.nom@domain.com";
		p.setEmail(s);
		assertEquals(s, p.getEmail());
	}

	@Test
	public void testIdRpi() {
		assertEquals(null, p.getIdRpi());
		String s = "e452547";
		p.setIdRpi(s);
		assertEquals(s, p.getIdRpi());
	}

	@Test
	public void testPassWord() {
		assertEquals(null, p.getPasswordHash());
		String s = "e452547";
		p.setPasswordHash(s);
		assertEquals(s, p.getPasswordHash());
	}

}
