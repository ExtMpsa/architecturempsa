package com.architecture.client.ui.widget;

import org.junit.Test;

import com.google.gwt.junit.client.GWTTestCase;

public class AnchorTest extends GWTTestCase {
	private Anchor a;

	@Override
	public String getModuleName() {
		return "com.architecture.Architecture";
	}

	public void testCtor() {
		a = new Anchor();
		assertNotNull(a);
	}

	@Test
	public void testClick() {
		a = new Anchor();
		assertNotNull(a);

	}
}
