package com.architecture.client.ui.composite;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

public class NavigationViewImpl extends Composite {

	private static NavigationViewImplUiBinder uiBinder = GWT.create(NavigationViewImplUiBinder.class);

	interface NavigationViewImplUiBinder extends UiBinder<Widget, NavigationViewImpl> {
	}

	public NavigationViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

}
