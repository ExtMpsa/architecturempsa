package com.architecture.client.event;

import com.google.gwt.event.shared.EventHandler;

public interface TrainingHandler extends EventHandler {
	void onTraining(TrainingEvent event);
}
