package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;
import com.google.gwt.place.shared.Prefix;

public class AccountParamsPlace extends Place {
	private String token;

	public AccountParamsPlace() {
	}

	public String getToken() {
		return this.token;
	}

	@Prefix(value = "!AccountParameter")
	public static class Tokenizer implements PlaceTokenizer<AccountParamsPlace> {

		// TODO :
		// Activity & Place add new Item. This item break the history. Have to fix it : look CreateAccountActivity.
		@Override
		public String getToken(AccountParamsPlace place) {
			return place.getToken();
		}

		@Override
		public AccountParamsPlace getPlace(String token) {
			return new AccountParamsPlace();
		}
	}
}
