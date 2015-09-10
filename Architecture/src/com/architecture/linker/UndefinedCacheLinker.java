package com.architecture.linker;

import java.util.logging.Level;
import java.util.logging.Logger;

import com.google.gwt.core.ext.LinkerContext;
import com.google.gwt.core.ext.TreeLogger;
import com.google.gwt.core.ext.UnableToCompleteException;
import com.google.gwt.core.ext.linker.AbstractLinker;
import com.google.gwt.core.ext.linker.ArtifactSet;
import com.google.gwt.core.ext.linker.EmittedArtifact;
import com.google.gwt.core.ext.linker.LinkerOrder;
import com.google.gwt.core.ext.linker.LinkerOrder.Order;

@LinkerOrder(Order.POST)
public class UndefinedCacheLinker extends AbstractLinker {
	private final static Logger LOGGER = Logger.getLogger(UndefinedCacheLinker.class.getName());

	@Override
	public String getDescription() {
		return "undefined.cache.js Linker";
	}

	@Override
	public ArtifactSet link(TreeLogger logger, LinkerContext context, ArtifactSet artifacts) throws UnableToCompleteException {
		ArtifactSet artifactset = new ArtifactSet(artifacts);

		StringBuilder builder = new StringBuilder("");
		for (EmittedArtifact emitted : artifacts.find(EmittedArtifact.class)) {
			if (emitted.getPartialPath().endsWith("cache.js")) {
				LOGGER.log(Level.INFO, "emitted.getPartialPath() = " + emitted.getPartialPath());
				// builder.append(emitted.toString());
				break;
			}
		}
		EmittedArtifact undefinedNocache = emitString(logger, builder.toString(), "undefined.cache.js");
		artifactset.add(undefinedNocache);
		return artifactset;
	}
}
