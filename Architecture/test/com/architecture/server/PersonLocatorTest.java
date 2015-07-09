package com.architecture.server;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.architecture.server.domain.Person;

public class PersonLocatorTest {
	PersonLocator pl;

	@Before
	public void setUp() throws Exception {
		pl = new PersonLocator();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testCreate() {
		Person p = pl.create(Person.class);
		assertNotNull(p);
	}

	@Test
	public void testFind() {
		// Person p = pl.find(Person.class, "mail");
		// assertNotNull(p);
		fail("not yet implemented");
	}

	@Test
	public void testGetDomain() {
		Class<Person> clazz = pl.getDomainType();
		assertNotNull(clazz);
	}

	@Test
	public void testGetId() {
		Person p = pl.create(Person.class);
		String id = pl.getId(p);
		assertEquals(null, id);
		p.setEmail("mail");
		id = pl.getId(p);
		assertNotNull(id);
	}

	@Test
	public void testGetIdType() {
		Class<String> clazz = pl.getIdType();
		assertNotNull(clazz);
	}

	@Test
	public void testGetVersion() {
		Person p = pl.create(Person.class);
		Object o = pl.getVersion(p);
		assertNotNull(o);
	}
}
