package com.architecture.client.resources.txt;

import com.google.gwt.core.client.GWT;
import com.google.gwt.i18n.client.Constants;

public interface NavigationText extends Constants {
	public static final NavigationText INSTANCE = GWT.create(NavigationText.class);

	String training();

	String webApp();

	String performance();

	String seo();

	String webAnalytics();

	String tools();

	String methodology();

	String userExperience();

	String signUp();

	String signUpLogin();

	String signUpPassword();

	String signUpPasswordVerify();

	String signIn();

	String parameter();

	String disconnection();
}
