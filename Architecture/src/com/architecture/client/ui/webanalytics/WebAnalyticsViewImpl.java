package com.architecture.client.ui.webanalytics;

import com.architecture.client.resources.ResourcesWebAnalytics;
import com.architecture.client.resources.txt.WebAnalyticsText;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Widget;

public class WebAnalyticsViewImpl extends Composite {

	private static WebAnalyticsViewImplUiBinder uiBinder = GWT.create(WebAnalyticsViewImplUiBinder.class);
	@UiField
	HTMLPanel wrapper;
	@UiField
	HTMLPanel content;
	@UiField
	HTMLPanel article;
	@UiField
	HTMLPanel aside;
	@UiField
	HTMLPanel title;
	@UiField
	HTMLPanel problematic;
	@UiField
	HTMLPanel presentation;
	@UiField
	HTMLPanel goal1;
	@UiField
	HTMLPanel goal2;
	@UiField
	HTMLPanel goal3;
	@UiField
	HTMLPanel tools;
	@UiField
	HTMLPanel prerequisites1;
	@UiField
	HTMLPanel prerequisites2;
	@UiField
	HTMLPanel analyticsAcademy;
	@UiField
	Anchor analyticsAcademyAnchor;

	interface WebAnalyticsViewImplUiBinder extends UiBinder<Widget, WebAnalyticsViewImpl> {
	}

	public WebAnalyticsViewImpl() {
		ResourcesWebAnalytics.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		WebAnalyticsText webAnalyticsText = GWT.create(WebAnalyticsText.class);
		title.getElement().setInnerText(webAnalyticsText.title());
		problematic.getElement().setInnerText(webAnalyticsText.problematic());
		presentation.getElement().setInnerText(webAnalyticsText.presentation());
		goal1.getElement().setInnerText(webAnalyticsText.goal1());
		goal2.getElement().setInnerText(webAnalyticsText.goal2());
		goal3.getElement().setInnerText(webAnalyticsText.goal3());
		tools.getElement().setInnerText(webAnalyticsText.tools());
		prerequisites1.getElement().setInnerText(webAnalyticsText.prerequisites1());
		prerequisites2.getElement().setInnerText(webAnalyticsText.prerequisites2());
		analyticsAcademy.getElement().setInnerText(webAnalyticsText.analyticsAcademy());
		analyticsAcademyAnchor.setText(webAnalyticsText.analyticsAcademyAnchor());
		analyticsAcademyAnchor.setHref("https://analyticsacademy.withgoogle.com/course01");
	}

}
