package com.architecture.client;

import com.google.gwt.core.client.EntryPoint;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class Architecture implements EntryPoint {
	@Override
	public void onModuleLoad() {
		@SuppressWarnings("unused")
		ClientFactory clientFactory = ClientFactoryImpl.getInstance();

	}
}
