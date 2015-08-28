package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;
import com.google.gwt.place.shared.Prefix;

public class TrainingPlace extends Place {
	private String token;

	public TrainingPlace(String token) {
		this.token = token.toLowerCase();
	}

	public String getToken() {
		return this.token;
	}

	@Prefix(value = "!Training")
	public static class Tokenizer implements PlaceTokenizer<TrainingPlace> {

		// TODO :
		// Activity & Place add new Item. This item break the history. Have to fix it : look SignUpActivity.
		@Override
		public String getToken(TrainingPlace place) {
			return place.getToken();
		}

		@Override
		public TrainingPlace getPlace(String token) {
			return new TrainingPlace(token);
		}
	}
}
