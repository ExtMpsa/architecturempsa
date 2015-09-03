package com.architecture.client.place;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.Test;
import org.slim3.tester.AppEngineTestCase;

public class PlaceTest extends AppEngineTestCase {

	@Test
	public void accountParamsPlaceTest() {
		AccountParamsPlace place = new AccountParamsPlace();
		assertThat(place, is(notNullValue()));
		AccountParamsPlace.Tokenizer tokenizer = new AccountParamsPlace.Tokenizer();
		assertThat(tokenizer.getPlace(""), is(notNullValue()));
		assertThat(tokenizer.getToken(place), is(nullValue()));
	}

	@Test
	public void homePlaceTest() {
		HomePlace place = new HomePlace();
		assertThat(place, is(notNullValue()));
		HomePlace.Tokenizer tokenizer = new HomePlace.Tokenizer();
		assertThat(tokenizer.getPlace(""), is(notNullValue()));
		assertThat(tokenizer.getToken(place), is(""));
	}

	@Test
	public void signInPlaceTest() {
		SignInPlace place = new SignInPlace();
		assertThat(place, is(notNullValue()));
		SignInPlace.Tokenizer tokenizer = new SignInPlace.Tokenizer();
		assertThat(tokenizer.getPlace(""), is(notNullValue()));
		assertThat(tokenizer.getToken(place), is(nullValue()));
		String token = "token";
		SignInPlace placeToken = new SignInPlace(token);
		assertThat(tokenizer.getToken(placeToken), is(token));
	}

	@Test
	public void signUpPlaceTest() {
		String token = "token";
		SignUpPlace place = new SignUpPlace(token);
		assertThat(place, is(notNullValue()));
		SignUpPlace.Tokenizer tokenizer = new SignUpPlace.Tokenizer();
		assertThat(tokenizer.getPlace(""), is(notNullValue()));
		assertThat(tokenizer.getToken(place), is(token));
	}

	@Test
	public void tracingPaperPlaceTest() {
		TracingPaperPlace place = new TracingPaperPlace();
		assertThat(place, is(notNullValue()));
		TracingPaperPlace.Tokenizer tokenizer = new TracingPaperPlace.Tokenizer();
		assertThat(tokenizer.getPlace(""), is(notNullValue()));
		assertThat(tokenizer.getToken(place), is(nullValue()));
	}

	@Test
	public void trainingPlaceTest() {
		String token = "token";
		TrainingPlace place = new TrainingPlace(token);
		assertThat(place, is(notNullValue()));
		TrainingPlace.Tokenizer tokenizer = new TrainingPlace.Tokenizer();
		assertThat(tokenizer.getPlace(token), is(notNullValue()));
		assertThat(tokenizer.getToken(place), is(token));
	}

	@Test
	public void webAnalyticsPlaceTest() {
		WebAnalyticsPlace place = new WebAnalyticsPlace();
		assertThat(place, is(notNullValue()));
		WebAnalyticsPlace.Tokenizer tokenizer = new WebAnalyticsPlace.Tokenizer();
		assertThat(tokenizer.getPlace(""), is(notNullValue()));
		assertThat(tokenizer.getToken(place), is(""));
	}
}
