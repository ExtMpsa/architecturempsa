package com.architecture.server.domain;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class DatastoreObjectTest {
	DatastoreObject dobj;

	@Before
	public void setUp() throws Exception {
		dobj = new DatastoreObject();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testVersion() {
		Integer v = 0;
		assertEquals(new Integer(0), dobj.getVersion());
		v = 123;
		dobj.setVersion(v);
		assertEquals(v, dobj.getVersion());
	}

	@Test
	public void testId() {
		assertEquals(null, dobj.getId());
		Long i = new Long(12345);
		dobj.setId(i);
		assertEquals(i, dobj.getId());
	}

	@Test
	public void testPersist() {
		Integer v = dobj.getVersion();
		dobj.onPersist();
		v++;
		assertEquals(v, dobj.getVersion());
	}
}
