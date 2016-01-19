package com.architecture.client.ui.composite;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

public class HelperViewImpl extends Composite {

	private static HelperViewImplUiBinder uiBinder = GWT.create(HelperViewImplUiBinder.class);

	interface HelperViewImplUiBinder extends UiBinder<Widget, HelperViewImpl> {
	}

	public HelperViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

}
