package com.architecture.client.place;

import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceTokenizer;
import com.google.gwt.place.shared.Prefix;

public class AccountParamsPlace extends Place {
	private String accountParamsName;

	public AccountParamsPlace() {
	}

	public String getHomeName() {
		return this.accountParamsName;
	}

	@Prefix(value = "!AccountParameter")
	public static class Tokenizer implements PlaceTokenizer<AccountParamsPlace> {

		// TODO :
		// Activity & Place add new Item. This item break the history. Have to fix it : look CreateAccountActivity.
		@Override
		public String getToken(AccountParamsPlace place) {
			return "";
		}

		@Override
		public AccountParamsPlace getPlace(String token) {
			return new AccountParamsPlace();
		}
	}
}
