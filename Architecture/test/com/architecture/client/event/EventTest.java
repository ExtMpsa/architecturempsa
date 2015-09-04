package com.architecture.client.event;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.Test;
import org.slim3.tester.AppEngineTestCase;

import com.architecture.client.event.account.SignInSuccessEvent;
import com.architecture.client.event.account.SignInSuccessHandler;
import com.architecture.client.mvp.AppToken;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.event.shared.SimpleEventBus;

public class EventTest extends AppEngineTestCase {
	EventBus eventBus = new SimpleEventBus();

	@Test
	public void SignInSuccessEvent() {
		SignInSuccessEvent e = new SignInSuccessEvent();
		eventBus.addHandler(SignInSuccessEvent.TYPE, new SignInSuccessHandler() {

			@Override
			public void onSignInSuccess(SignInSuccessEvent event) {
			}
		});
		eventBus.fireEvent(e);
		assertThat(e.getAssociatedType(), is(notNullValue()));
	}

	@Test
	public void ActivityEvent() {
		AppToken activityName = AppToken.WEBANALYTICS;
		ActivityEvent e = new ActivityEvent(activityName);
		eventBus.addHandler(ActivityEvent.TYPE, new ActivityHandler() {

			@Override
			public void onActivity(ActivityEvent event) {
			}
		});
		eventBus.fireEvent(e);
		assertThat(e.getAssociatedType(), is(notNullValue()));
		assertThat(e.getActivityName(), is(activityName));
		assertThat(activityName.getToken(), is("!WebAnalytics:"));
	}
}
