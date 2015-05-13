package com.architecture.client;

import com.google.gwt.core.client.EntryPoint;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class Architecture implements EntryPoint {
	@Override
	public void onModuleLoad() {
		ClientFactory clientFactory = ClientFactoryImpl.getInstance();
		clientFactory.eventGtm("Affichage de la 1ere vue de l'application", this.getClass().toString());
		ClientFactoryImpl.setLoaded(true);
	}
}
