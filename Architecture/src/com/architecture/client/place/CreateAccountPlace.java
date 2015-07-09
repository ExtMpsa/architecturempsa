package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;
import com.google.gwt.place.shared.Prefix;

public class CreateAccountPlace extends Place {
	private String createAccountName;

	public CreateAccountPlace(String ePrivacyName) {
		this.createAccountName = ePrivacyName;
	}

	public String getCreateAccountName() {
		return createAccountName;
	}

	@Prefix(value = "!CreateAccountPlace")
	public static class Tokenizer implements PlaceTokenizer<CreateAccountPlace> {
		@Override
		public String getToken(CreateAccountPlace place) {
			return place.createAccountName;
		}

		@Override
		public CreateAccountPlace getPlace(String token) {
			return new CreateAccountPlace(token);
		}
	}
}