package com.architecture.client.activity;

import com.google.gwt.activity.shared.Activity;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;

public abstract class ArchitectureActivity implements Activity {
	String category;
	String action;
	String label;

	@Override
	public String mayStop() {
		return null;
	}

	@Override
	public void onCancel() {

	}

	@Override
	public void onStop() {

	}

	public void removeLoader() {
		Element loader = Document.get().getElementById("loader");
		if (loader != null) {
			loader.removeFromParent();
		}
	}
}
