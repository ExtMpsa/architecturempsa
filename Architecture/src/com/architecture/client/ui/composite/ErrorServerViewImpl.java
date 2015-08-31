package com.architecture.client.ui.composite;

import com.architecture.client.resources.ResourcesErrorServer;
import com.architecture.client.resources.txt.ErrorServerText;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;

public class ErrorServerViewImpl extends Composite {

	private static ErrorServerViewImplUiBinder uiBinder = GWT.create(ErrorServerViewImplUiBinder.class);
	@UiField
	HTMLPanel wrapper;
	@UiField
	HTMLPanel content;
	@UiField
	Label message;

	interface ErrorServerViewImplUiBinder extends UiBinder<Widget, ErrorServerViewImpl> {
	}

	public ErrorServerViewImpl() {
		ResourcesErrorServer.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		ErrorServerText errorServerText = GWT.create(ErrorServerText.class);

		message.setText(errorServerText.networkConnexionError());
	}

	public String getMessage() {
		return message.getText();
	}

	public void setMessage(String message) {
		this.message.setText(message);
	}
}
