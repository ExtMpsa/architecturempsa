package com.architecture.client.mvp;

public enum SignUpStep {
	LOGIN("login"), PASSWORD("password"), PASSWORDVERIFY("passwordVerify");

	private String step = "";

	SignUpStep(String step) {
		this.step = step;
	}

	public String getStep() {
		return step;
	}
}
