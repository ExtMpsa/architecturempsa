package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;
import com.google.gwt.place.shared.Prefix;

public class EPrivacyPlace extends Place {
	private String ePrivacyName;

	public EPrivacyPlace(String ePrivacyName) {
		this.ePrivacyName = ePrivacyName;
	}

	public String getEPrivacyName() {
		return ePrivacyName;
	}

	@Prefix(value = "!EPrivacyPlace")
	public static class Tokenizer implements PlaceTokenizer<EPrivacyPlace> {
		@Override
		public String getToken(EPrivacyPlace place) {
			return place.ePrivacyName;
		}

		@Override
		public EPrivacyPlace getPlace(String token) {
			return new EPrivacyPlace(token);
		}
	}
}
