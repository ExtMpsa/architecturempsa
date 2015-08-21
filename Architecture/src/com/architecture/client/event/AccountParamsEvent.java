package com.architecture.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class AccountParamsEvent extends GwtEvent<AccountParamsHandler> {
	public static Type<AccountParamsHandler> TYPE = new Type<AccountParamsHandler>();

	@Override
	public com.google.gwt.event.shared.GwtEvent.Type<AccountParamsHandler> getAssociatedType() {
		return TYPE;
	}

	@Override
	protected void dispatch(AccountParamsHandler handler) {
		handler.onAccountParams(this);
	}
}
