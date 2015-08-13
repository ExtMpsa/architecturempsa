package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;
import com.google.gwt.place.shared.Prefix;

public class TrainingPlace extends Place {
	private String name;

	public TrainingPlace(String name) {
		this.name = name.toLowerCase();
	}

	public String getName() {
		return this.name;
	}

	@Prefix(value = "!Training")
	public static class Tokenizer implements PlaceTokenizer<TrainingPlace> {

		// TODO :
		// Activity & Place add new Item. This item break the history. Have to fix it : look SignUpActivity.
		@Override
		public String getToken(TrainingPlace place) {
			return place.getName();
		}

		@Override
		public TrainingPlace getPlace(String token) {
			return new TrainingPlace(token);
		}
	}
}
