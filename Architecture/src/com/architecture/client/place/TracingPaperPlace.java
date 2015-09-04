package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;
import com.google.gwt.place.shared.Prefix;

public class TracingPaperPlace extends Place {
	private String token = "";

	public TracingPaperPlace() {
	}

	public String getToken() {
		return token;
	}

	@Prefix(value = "!TracingPaperPlace")
	public static class Tokenizer implements PlaceTokenizer<TracingPaperPlace> {
		@Override
		public String getToken(TracingPaperPlace place) {
			return place.getToken();
		}

		@Override
		public TracingPaperPlace getPlace(String token) {
			return new TracingPaperPlace();
		}
	}
}
