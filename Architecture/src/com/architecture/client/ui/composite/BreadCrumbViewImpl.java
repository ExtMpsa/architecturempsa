package com.architecture.client.ui.composite;

import com.architecture.client.resources.ResourcesBreadCrumb;
import com.architecture.client.ui.widget.Anchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Widget;

public class BreadCrumbViewImpl extends Composite {

	private static BreadCrumbViewImplUiBinder uiBinder = GWT.create(BreadCrumbViewImplUiBinder.class);
	@UiField
	HTMLPanel wrapper;
	@UiField
	HTMLPanel content;
	@UiField
	Anchor dipet;
	ResourcesBreadCrumb resources = ResourcesBreadCrumb.INSTANCE;

	interface BreadCrumbViewImplUiBinder extends UiBinder<Widget, BreadCrumbViewImpl> {
	}

	public BreadCrumbViewImpl() {
		resources.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		addItem("link", "");
	}

	public void addItem(String s, String hash) {
		Image delimiter = new Image(resources.delimiter());
		content.add(delimiter);
		Anchor a = new Anchor();
		a.setText(s);
		a.setHash(hash);
	}
}
