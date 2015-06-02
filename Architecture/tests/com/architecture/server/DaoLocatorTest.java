package com.architecture.server;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class DaoLocatorTest {
	DaoLocator daoL;

	@Before
	public void setUp() throws Exception {
		daoL = new DaoLocator();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testGetInstance() {
	}
}
