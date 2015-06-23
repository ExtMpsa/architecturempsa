package com.architecture.client;

import com.google.gwt.junit.client.GWTTestCase;

public class ArchitectureValidatorFactoryTest extends GWTTestCase {
	ArchitectureValidatorFactory avf;

	@Override
	public String getModuleName() {
		return "com.architecture.Architecture";
	}

	public void testCtor() {
		avf = new ArchitectureValidatorFactory();
		assertNotNull(avf);
		avf.createValidator();
	}
}
