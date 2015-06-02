package com.architecture.client;

import com.google.gwt.junit.client.GWTTestCase;

public class ArchitectureTest extends GWTTestCase {

	@Override
	public String getModuleName() {
		return "com.architecture.Architecture";
	}

	public void testArchitectureCtor() {
		Architecture a = new Architecture();
		assertNotNull(a);
	}

}
