package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class TrainingEvent extends GwtEvent<TrainingHandler> {
	public static Type<TrainingHandler> TYPE = new Type<TrainingHandler>();

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<TrainingHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(TrainingHandler handler) {
		handler.onTraining(this);
	}
}
