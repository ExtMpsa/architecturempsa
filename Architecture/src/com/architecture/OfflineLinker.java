package com.architecture;

import com.google.gwt.core.ext.LinkerContext;
import com.google.gwt.core.ext.TreeLogger;
import com.google.gwt.core.ext.UnableToCompleteException;
import com.google.gwt.core.ext.linker.AbstractLinker;
import com.google.gwt.core.ext.linker.ArtifactSet;
import com.google.gwt.core.ext.linker.EmittedArtifact;
import com.google.gwt.core.ext.linker.LinkerOrder;
import com.google.gwt.core.ext.linker.LinkerOrder.Order;

@LinkerOrder(Order.POST)
public class OfflineLinker extends AbstractLinker {
	@Override
	public String getDescription() {
		return "Offline Linker";
	}

	@SuppressWarnings("deprecation")
	@Override
	public ArtifactSet link(TreeLogger logger, LinkerContext context, ArtifactSet artifacts) throws UnableToCompleteException {
		ArtifactSet artifactset = new ArtifactSet(artifacts);

		StringBuilder builder = new StringBuilder("CACHE MANIFEST\n");
		builder.append("# Cache Version 10\n");
		builder.append("CACHE:\n");

		builder.append("/architecture.css\n");
		builder.append("/architecture.html\n");
		for (EmittedArtifact emitted : artifacts.find(EmittedArtifact.class)) {
			if (emitted.isPrivate()) {
				continue;
			}
			if (emitted.getPartialPath().endsWith(".symbolMap")) {
				continue;
			}
			if (emitted.getPartialPath().endsWith(".txt")) {
				continue;
			}
			builder.append("/myapp/" + emitted.getPartialPath()).append("\n");
		}
		builder.append("/architecture/hosted.html\n");
		builder.append("/architecture/architecture.nocache.js\n");
		builder.append("NETWORK:\n");
		builder.append("*\n");
		EmittedArtifact manifest = emitString(logger, builder.toString(), "offline.appcache");
		artifactset.add(manifest);
		return artifactset;
	}
}
