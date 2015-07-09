package com.architecture.server;

import static org.junit.Assert.assertNotNull;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class DaoLocatorTest {
	DaoLocator daoL;

	public class DaoLocatorException {
		private DaoLocatorException() {
		}
	}

	@Before
	public void setUp() throws Exception {
		daoL = new DaoLocator();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testGetInstance() {
		daoL.getInstance(daoL.getClass());
		assertNotNull(daoL);
	}

	@Test(expected = RuntimeException.class)
	public void testGetInstance_InstantiationException() {
		daoL.getInstance(DaoLocatorException.class);
	}

	@Test(expected = RuntimeException.class)
	public void testGetInstance_IllegalAccessException() {
		daoL.getInstance(DaoLocatorException.class.getClass());
	}
}
