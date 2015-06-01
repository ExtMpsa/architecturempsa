package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;
import com.google.gwt.place.shared.Prefix;

public class SignInPlace extends Place {
	private String signIn;

	public SignInPlace() {
		this.signIn = "";
	}

	public SignInPlace(String signIn) {
		this.signIn = signIn;
	}

	public String getSignInName() {
		return signIn;
	}

	@Prefix(value = "!SignInPlace")
	public static class Tokenizer implements PlaceTokenizer<SignInPlace> {
		@Override
		public String getToken(SignInPlace place) {
			return place.signIn;
		}

		@Override
		public SignInPlace getPlace(String token) {
			return new SignInPlace(token);
		}
	}
}
