package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;

public class EPrivacyPlace extends Place {
	private String ePrivacyName;
	
	public EPrivacyPlace(String ePrivacyName) {
		this.ePrivacyName = ePrivacyName;
    }

	public String getEPrivacyName() {
		return ePrivacyName;
	}
	
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
