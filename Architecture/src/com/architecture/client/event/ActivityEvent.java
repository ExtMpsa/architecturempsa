package com.architecture.client.event;

import com.architecture.client.mvp.AppToken;
import com.google.gwt.event.shared.GwtEvent;

public class ActivityEvent extends GwtEvent<ActivityHandler> {
	public static Type<ActivityHandler> TYPE = new Type<ActivityHandler>();
	private AppToken activityName;

	public ActivityEvent(AppToken activityName) {
		setActivityName(activityName);
	}

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<ActivityHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(ActivityHandler handler) {
		handler.onActivity(this);
	}

	public AppToken getActivityName() {
		return activityName;
	}

	public void setActivityName(AppToken activityName) {
		this.activityName = activityName;
	}
}
