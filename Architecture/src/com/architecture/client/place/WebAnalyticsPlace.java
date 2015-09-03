package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;
import com.google.gwt.place.shared.Prefix;

public class WebAnalyticsPlace extends Place {
	private String token = "";

	public WebAnalyticsPlace() {
	}

	public String getToken() {
		return this.token;
	}

	@Prefix(value = "!WebAnalytics")
	public static class Tokenizer implements PlaceTokenizer<WebAnalyticsPlace> {

		// TODO :
		// Activity & Place add new Item. This item break the history. Have to fix it : look CreateAccountActivity.
		@Override
		public String getToken(WebAnalyticsPlace place) {
			return place.getToken();
		}

		@Override
		public WebAnalyticsPlace getPlace(String token) {
			return new WebAnalyticsPlace();
		}
	}
}
