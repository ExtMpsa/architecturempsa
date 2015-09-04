package com.architecture.client.ui.composite;

import com.architecture.client.mvp.AppToken;
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

	public void setPlace(AppToken token) {
		decoration.clear();
		decoration.add(dipet);
		dipet.getElement().removeClassName("current");
		switch (token) {
		case ACCOUNTSETTING:
			break;
		case HOME:
			// Do nothing
			break;
		case METHODS:
			break;
		case PERFORMANCE:
			break;
		case SEO:
			break;
		case SIGNIN:
			addItem(navigationText.signIn(), "#" + AppToken.SIGNIN.getToken(), "current");
			break;
		case SIGNUP:
			addItem(navigationText.signUp(), "#" + AppToken.SIGNUP.getToken(), "current");
			break;
		case SIGNUPLOGIN:
			addItem(navigationText.signUp(), "#" + AppToken.SIGNUP.getToken(), "element");
			addItem(navigationText.signUpLogin(), "#" + AppToken.SIGNUPLOGIN.getToken(), "current");
			break;
		case SIGNUPPASSWORD:
			addItem(navigationText.signUp(), "#" + AppToken.SIGNUP.getToken(), "element");
			addItem(navigationText.signUpPassword(), "#" + AppToken.SIGNUPPASSWORD.getToken(), "current");
			break;
		case SIGNUPPASSWORDVERIFY:
			addItem(navigationText.signUp(), "#" + AppToken.SIGNUP.getToken() + ":", "element");
			addItem(navigationText.signUpPasswordVerify(), "#" + AppToken.SIGNUPPASSWORDVERIFY.getToken(), "current");
			break;
		case TOOLS:
			break;
		case TRACINGPAPER:
			break;
		case TRAINING:
			addItem(navigationText.training(), "#" + AppToken.TRAINING.getToken(), "current");
			break;
		case UX:
			break;
		case WEBANALYTICS:
			addItem(navigationText.webAnalytics(), "#" + AppToken.WEBANALYTICS.getToken(), "current");
			break;
		case WEBAPPLICATION:
			break;
		default:
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
