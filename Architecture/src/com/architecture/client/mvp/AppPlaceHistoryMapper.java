package com.architecture.client.mvp;

import com.architecture.client.ClientFactory;
import com.architecture.client.place.AccountParamsPlace;
import com.architecture.client.place.HomePlace;
import com.architecture.client.place.SignInPlace;
import com.architecture.client.place.SignUpPlace;
import com.architecture.client.place.TracingPaperPlace;
import com.architecture.client.place.TrainingPlace;
import com.architecture.client.place.WebAnalyticsPlace;
import com.google.gwt.place.shared.PlaceHistoryMapperWithFactory;
import com.google.gwt.place.shared.WithTokenizers;

@WithTokenizers({ HomePlace.Tokenizer.class, TracingPaperPlace.Tokenizer.class, SignInPlace.Tokenizer.class, SignUpPlace.Tokenizer.class, TrainingPlace.Tokenizer.class,
		WebAnalyticsPlace.Tokenizer.class, AccountParamsPlace.Tokenizer.class })
public interface AppPlaceHistoryMapper extends PlaceHistoryMapperWithFactory<ClientFactory> {

}
