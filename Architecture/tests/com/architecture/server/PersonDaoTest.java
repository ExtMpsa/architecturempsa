package com.architecture.server;

import static org.junit.Assert.fail;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class PersonDaoTest {
	PersonDao pDao;

	@Before
	public void setUp() throws Exception {
		pDao = new PersonDao();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testSaveAsync() {
		// pDao.saveAsync(new Person());
		fail("not yet implemented");
	}
}
