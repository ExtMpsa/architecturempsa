package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;
import com.google.gwt.place.shared.Prefix;

public class HomePlace extends Place {
	private String homeName;

	public HomePlace() {
	}

	public String getHomeName() {
		return this.homeName;
	}

	@Prefix(value = "!HomePlace")
	public static class Tokenizer implements PlaceTokenizer<HomePlace> {

		// TODO :
		// Activity & Place add new Item. This item break the history. Have to fix it : look CreateAccountActivity.
		@Override
		public String getToken(HomePlace place) {
			return "";
		}

		@Override
		public HomePlace getPlace(String token) {
			return new HomePlace();
		}
	}
}
