package com.architecture.client;

import javax.annotation.Nonnull;

import com.architecture.client.appcache.ApplicationCache;
import com.architecture.client.appcache.event.UpdateReadyEvent;
import com.google.gwt.core.client.EntryPoint;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class Architecture implements EntryPoint {
	@Override
	public void onModuleLoad() {
		ClientFactory clientFactory = ClientFactoryImpl.getInstance();
		clientFactory.eventGtm("Début d'affichage de la page.", this.getClass().toString());
		ClientFactoryImpl.setLoaded(true);
		final ApplicationCache cache = ApplicationCache.getApplicationCacheIfSupported();
		if (null != cache) {
			cache.addUpdateReadyHandler(new UpdateReadyEvent.Handler() {
				@Override
				public void onUpdateReadyEvent(@Nonnull final UpdateReadyEvent event) {
					// Force a cache update if new version is available
					cache.swapCache();
				}
			});

			// Ask the browser to recheck the cache
			cache.requestUpdate();
		}
	}
}
