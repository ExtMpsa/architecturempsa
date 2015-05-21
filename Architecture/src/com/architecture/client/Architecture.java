package com.architecture.client;

import com.google.gwt.core.client.EntryPoint;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class Architecture implements EntryPoint {
	@Override
	public void onModuleLoad() {
		ClientFactory clientFactory = ClientFactoryImpl.getInstance();
		ClientFactoryImpl.pushTimeRTD();
		clientFactory.eventGtm("Début d'affichage de la page.", this.getClass().toString());
		ClientFactoryImpl.setLoaded(true);
	}
}
