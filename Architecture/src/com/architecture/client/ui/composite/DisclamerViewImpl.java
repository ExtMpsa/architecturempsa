package com.architecture.client.ui.composite;

import com.architecture.client.resources.ResourcesDisclaimer;
import com.architecture.client.resources.txt.DisclaimerText;
import com.architecture.client.ui.widget.Anchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.storage.client.Storage;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
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
	@UiField HTMLPanel cellLeft;
	@UiField HTMLPanel cellRight;
	private Storage storage = null;

	interface DisclamerViewImplUiBinder extends UiBinder<Widget, DisclamerViewImpl> {
	}

	public DisclamerViewImpl() {
		ResourcesDisclaimer.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		DisclaimerText disclaimerText = GWT.create(DisclaimerText.class);

		text.setText(disclaimerText.disclamer());

		moreInformation.setText(disclaimerText.moreInformation());
		moreInformation.setHash("#!policies");
		moreInformation.getElement().setAttribute("id", "moreInformation");

		ok.setText(disclaimerText.ok());
		ok.getElement().setAttribute("id", "validDisclaimer");

		init();
	}

	private void init() {
		storage = Storage.getLocalStorageIfSupported();
		if (storage == null) {

		}
	}

	@UiHandler("ok")
	void onOkClick(ClickEvent event) {
		if (storage != null) {
			storage.setItem("isPrivacyValidated", "true");
		}
		this.removeFromParent();
	}
}
