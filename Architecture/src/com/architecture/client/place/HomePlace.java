package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;

public class HomePlace extends Place {
	private String homeName;

	public HomePlace() {
	}

	public String getHomeName() {
		return this.homeName;
	}

	public static class Tokenizer implements PlaceTokenizer<HomePlace> {
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
