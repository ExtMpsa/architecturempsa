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
	NavigationText navigationText = GWT.create(NavigationText.class);

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
		addItem(navigationText.training(), "#!Training:", "current");
	}

	public void setSignIn() {
		decoration.clear();
		decoration.add(dipet);
		dipet.getElement().removeClassName("current");
		addItem(navigationText.signIn(), "#!SignIn:", "current");
	}

	public void setSignUp() {
		decoration.clear();
		decoration.add(dipet);
		dipet.getElement().removeClassName("current");
		addItem(navigationText.signUp(), "#!SignUp:", "current");
	}

	public void setSignUp(String step) {
		decoration.clear();
		decoration.add(dipet);
		dipet.getElement().removeClassName("current");
		addItem(navigationText.signUp(), "#!SignUp:", "element");
		switch (step) {
		case "login":
			addItem(navigationText.signUpLogin(), "#!SignUp:login", "current");
			break;
		case "password":
			addItem(navigationText.signUpPassword(), "#!SignUp:password", "current");
			break;
		case "passwordVerify":
			addItem(navigationText.signUpPasswordVerify(), "#!SignUp:passwordVerify", "current");
			break;
		}

	}

	public void addItem(String s, String hash, String style) {
		Anchor a = new Anchor();
		a.setText(s);
		a.setHash(hash);
		a.getElement().addClassName(style);
		decoration.add(a);
	}
}
