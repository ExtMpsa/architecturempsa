package com.architecture.client.ui.composite;

import com.architecture.client.resources.ResourcesLoader;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.HTMLPanel;

public class LoaderViewImpl extends Composite {

	private static LoaderViewImplUiBinder uiBinder = GWT
			.create(LoaderViewImplUiBinder.class);
	@UiField HTMLPanel loader;

	interface LoaderViewImplUiBinder extends UiBinder<Widget, LoaderViewImpl> {
	}

	public LoaderViewImpl() {
		ResourcesLoader.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		
		loader.getElement().setAttribute("id", "loader");
	}

}
