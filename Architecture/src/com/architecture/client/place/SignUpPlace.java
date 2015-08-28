package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;
import com.google.gwt.place.shared.Prefix;

public class SignUpPlace extends Place {
	private String token;

	public SignUpPlace(String step) {
		this.token = step;
	}

	public String getToken() {
		return token;
	}

	@Prefix(value = "!SignUp")
	public static class Tokenizer implements PlaceTokenizer<SignUpPlace> {
		@Override
		public String getToken(SignUpPlace place) {
			return place.getToken();
		}

		@Override
		public SignUpPlace getPlace(String token) {
			return new SignUpPlace(token);
		}
	}
}
