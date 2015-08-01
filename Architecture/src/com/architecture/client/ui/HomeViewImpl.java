package com.architecture.client.ui;

import com.architecture.client.activity.HomeActivity;
import com.architecture.client.resources.Resources;
import com.architecture.client.resources.txt.HomeText;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Widget;

public class HomeViewImpl extends Composite implements HomeView {

	private static HomeViewImplUiBinder uiBinder = GWT.create(HomeViewImplUiBinder.class);
	@UiField
	HTMLPanel wrapper;
	@UiField
	HTMLPanel content;
	@UiField
	HTMLPanel title;
	@UiField
	HTMLPanel details;
	@SuppressWarnings("unused")
	private HomeActivity activity;

	interface HomeViewImplUiBinder extends UiBinder<Widget, HomeViewImpl> {
	}

	public HomeViewImpl() {
		Resources.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	private void init() {
		HomeText homeText = GWT.create(HomeText.class);
		title.getElement().setInnerText(homeText.presentation());
		details.getElement().setInnerText(homeText.presentationContent());
	}

	@Override
	public void setActivity(HomeActivity activity) {
		this.activity = activity;
	}
}
