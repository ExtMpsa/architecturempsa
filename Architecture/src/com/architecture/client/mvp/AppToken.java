package com.architecture.client.mvp;

public enum AppToken {
	ACCOUNTSETTING("!AccountParameter"), HOME("!Home"), SIGNIN("!SignIn"), SIGNUP("!SignUp"), SIGNUPLOGIN("!SignUp:login"), SIGNUPPASSWORD("!SignUp:password"), SIGNUPPASSWORDVERIFY(
			"!SignUp:passwordVerify"), TRAINING("!Training"), WEBANALYTICS("!WebAnalytics"), TRACINGPAPER("!TracingPaper");

	private String token = "";

	AppToken(String token) {
		this.token = token;
	}

	public String getToken() {
		return token;
	}
}
