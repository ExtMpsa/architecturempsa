package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;

public class FormsPlace extends Place {
	private String formsStep;
	
	public FormsPlace() {
		this.formsStep = "";
    }
	
	public FormsPlace(String formsStep) {
		this.formsStep = formsStep;
    }

	public String getFormsName() {
		return formsStep;
	}
	
	public static class Tokenizer implements PlaceTokenizer<FormsPlace> {
        @Override
        public String getToken(FormsPlace place) {
            return place.formsStep;
        }

        @Override
        public FormsPlace getPlace(String token) {
            return new FormsPlace(token);
        }
    }
}
