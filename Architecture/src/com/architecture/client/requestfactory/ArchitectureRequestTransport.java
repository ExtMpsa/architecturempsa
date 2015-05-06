package com.architecture.client.requestfactory;

import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Style.Cursor;
import com.google.web.bindery.requestfactory.gwt.client.DefaultRequestTransport;
import com.google.web.bindery.requestfactory.shared.ServerFailure;

public class ArchitectureRequestTransport extends DefaultRequestTransport {
	@Override
	public void send(String payload, TransportReceiver receiver) {
		doBeforeSend();
		super.send(payload, wrap(receiver));
	}

	private TransportReceiver wrap(final TransportReceiver delegate) {
		return new TransportReceiver() {

			@Override
			public void onTransportSuccess(String payload) {
				doOnSuccess();
				delegate.onTransportSuccess(payload);
			}

			@Override
			public void onTransportFailure(ServerFailure failure) {
				doOnFailure(failure);
				delegate.onTransportFailure(failure);
			}
		};
	}

	protected void doBeforeSend() {
		// Some processing before the request is send
		Document.get().getBody().getStyle().setCursor(Cursor.WAIT);
	}

	protected void doOnSuccess() {
		// Some processing on success
		Document.get().getBody().getStyle().setCursor(Cursor.DEFAULT);
	}

	protected void doOnFailure(ServerFailure failure) {
		// Some processing on failure
		Document.get().getBody().getStyle().setCursor(Cursor.DEFAULT);
	}
}
