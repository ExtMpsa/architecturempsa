package com.architecture.client.event;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.Test;
import org.slim3.tester.AppEngineTestCase;

import com.architecture.client.event.account.AccountParamsEvent;
import com.architecture.client.event.account.AccountParamsHandler;
import com.architecture.client.event.account.SignInEvent;
import com.architecture.client.event.account.SignInHandler;
import com.architecture.client.event.account.SignInSuccessEvent;
import com.architecture.client.event.account.SignInSuccessHandler;
import com.architecture.client.event.account.SignUpEvent;
import com.architecture.client.event.account.SignUpHandler;
import com.architecture.client.mvp.AppToken;
import com.architecture.client.mvp.SignUpStep;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.event.shared.SimpleEventBus;

public class EventTest extends AppEngineTestCase {
	EventBus eventBus = new SimpleEventBus();

	@Test
	public void homeEvent() {
		HomeEvent e = new HomeEvent();
		eventBus.addHandler(HomeEvent.TYPE, new HomeHandler() {
			@Override
			public void onHome(HomeEvent event) {
			}
		});
		eventBus.fireEvent(e);
		assertThat(e.getAssociatedType(), is(notNullValue()));
	}

	@Test
	public void tracingPaperEvent() {
		TracingPaperEvent e = new TracingPaperEvent();
		eventBus.addHandler(TracingPaperEvent.TYPE, new TracingPaperHandler() {

			@Override
			public void onTracingPaper(TracingPaperEvent event) {
			}
		});
		eventBus.fireEvent(e);
		assertThat(e.getAssociatedType(), is(notNullValue()));
	}

	@Test
	public void trainingEvent() {
		TrainingEvent e = new TrainingEvent();
		eventBus.addHandler(TrainingEvent.TYPE, new TrainingHandler() {

			@Override
			public void onTraining(TrainingEvent event) {
			}
		});
		eventBus.fireEvent(e);
		assertThat(e.getAssociatedType(), is(notNullValue()));
	}

	@Test
	public void accountParamsEvent() {
		AccountParamsEvent e = new AccountParamsEvent();
		eventBus.addHandler(AccountParamsEvent.TYPE, new AccountParamsHandler() {

			@Override
			public void onAccountParams(AccountParamsEvent event) {
			}
		});
		eventBus.fireEvent(e);
		assertThat(e.getAssociatedType(), is(notNullValue()));
	}

	@Test
	public void signInEvent() {
		SignInEvent e = new SignInEvent();
		eventBus.addHandler(SignInEvent.TYPE, new SignInHandler() {

			@Override
			public void onSignIn(SignInEvent event) {
			}
		});
		eventBus.fireEvent(e);
		assertThat(e.getAssociatedType(), is(notNullValue()));
	}

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
	public void SignUpEvent() {
		SignUpStep step = SignUpStep.LOGIN;
		SignUpEvent e = new SignUpEvent(step);
		eventBus.addHandler(SignUpEvent.TYPE, new SignUpHandler() {

			@Override
			public void onSignUp(SignUpEvent event) {
			}
		});
		eventBus.fireEvent(e);
		assertThat(e.getAssociatedType(), is(notNullValue()));
		assertThat(e.getStep(), is(step));
		assertThat(step.getStep(), is("login"));
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
		assertThat(activityName.getToken(), is("!WebAnalytics"));
	}
}
