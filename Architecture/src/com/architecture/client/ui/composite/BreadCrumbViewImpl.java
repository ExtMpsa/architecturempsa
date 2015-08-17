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
	@UiField
	HTMLPanel decoration;

	interface BreadCrumbViewImplUiBinder extends UiBinder<Widget, BreadCrumbViewImpl> {
	}

	public BreadCrumbViewImpl() {
		ResourcesBreadCrumb.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		dipet.getElement().addClassName("current");
	}

	public void setDigitalPerformanceTraining() {
		decoration.clear();
		decoration.add(dipet);
		dipet.getElement().addClassName("current");
	}

	public void setTraining() {
		decoration.clear();
		decoration.add(dipet);
		dipet.getElement().removeClassName("current");
		addItem(NavigationText.INSTANCE.training(), "#!Training:");
	}

	public void setSignIn() {
		decoration.clear();
		decoration.add(dipet);
		dipet.getElement().removeClassName("current");
		addItem(NavigationText.INSTANCE.signIn(), "#!SignIn:");
	}

	public void setSignUp() {
		decoration.clear();
		decoration.add(dipet);
		dipet.getElement().removeClassName("current");
		addItem(NavigationText.INSTANCE.signUp(), "#!SignUp:");
	}

	public void addItem(String s, String hash) {
		Anchor a = new Anchor();
		a.setText(s);
		a.setHash(hash);
		a.getElement().addClassName("current");
		decoration.add(a);
	}
}
