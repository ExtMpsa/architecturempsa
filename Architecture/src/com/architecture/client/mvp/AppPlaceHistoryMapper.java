package com.architecture.client.mvp;

import com.architecture.client.ClientFactory;
import com.architecture.client.place.EPrivacyPlace;
import com.architecture.client.place.FormsPlace;
import com.architecture.client.place.HomePlace;
import com.architecture.client.place.SignInPlace;
import com.architecture.client.place.TracingPaperPlace;
import com.google.gwt.place.shared.PlaceHistoryMapperWithFactory;
import com.google.gwt.place.shared.WithTokenizers;

@WithTokenizers({ HomePlace.Tokenizer.class, FormsPlace.Tokenizer.class, TracingPaperPlace.Tokenizer.class, EPrivacyPlace.Tokenizer.class, SignInPlace.Tokenizer.class })
public interface AppPlaceHistoryMapper extends PlaceHistoryMapperWithFactory<ClientFactory> {

}
