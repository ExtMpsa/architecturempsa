package com.architecture.client.ui.composite;

import com.architecture.client.resources.ResourcesBreadCrumb;
import com.architecture.client.resources.txt.NavigationText;
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
		dipet.getElement().addClassName("current");
	}

	public void setDigitalPerformanceTraining() {
		content.clear();
		content.add(dipet);
		dipet.getElement().addClassName("current");
	}

	public void setTraining() {
		content.clear();
		content.add(dipet);
		dipet.getElement().removeClassName("current");
		addItem(NavigationText.INSTANCE.training(), "#!Training:");
	}

	public void addItem(String s, String hash) {
		Anchor a = new Anchor();
		a.setText(s);
		a.setHash(hash);
		a.getElement().addClassName("current");
		content.add(a);
	}
}
