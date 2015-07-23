package com.architecture.client.ui.composite;

import com.architecture.client.resources.txt.DisclaimerText;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;

public class DisclamerViewImpl extends Composite {

	private static DisclamerViewImplUiBinder uiBinder = GWT.create(DisclamerViewImplUiBinder.class);
	@UiField
	Label text;
	@UiField
	Anchor moreInformation;
	@UiField
	Button ok;
	@UiField
	HTMLPanel wrapper;
	@UiField
	HTMLPanel content;

	interface DisclamerViewImplUiBinder extends UiBinder<Widget, DisclamerViewImpl> {
	}

	public DisclamerViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
		DisclaimerText disclaimerText = GWT.create(DisclaimerText.class);
		text.setText(disclaimerText.disclamer());
		moreInformation.setText(disclaimerText.moreInformation());
		ok.setText(disclaimerText.ok());
	}

}
