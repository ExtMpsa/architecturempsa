package com.architecture.client.ui.composite;

import com.architecture.client.resources.ResourcesBreadCrumb;
import com.architecture.client.ui.widget.Anchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Widget;

public class BreadCrumbViewImpl extends Composite {

	private static BreadCrumbViewImplUiBinder uiBinder = GWT.create(BreadCrumbViewImplUiBinder.class);
	@UiField
	HTMLPanel wrapper;
	@UiField
	HTMLPanel content;
	@UiField
	Anchor dipet;

	interface BreadCrumbViewImplUiBinder extends UiBinder<Widget, BreadCrumbViewImpl> {
	}

	public BreadCrumbViewImpl() {
		ResourcesBreadCrumb.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
	}

}
