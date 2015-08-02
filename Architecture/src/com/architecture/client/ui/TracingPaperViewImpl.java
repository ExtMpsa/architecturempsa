package com.architecture.client.ui;

import com.architecture.client.activity.TracingPaperActivity;
import com.architecture.client.resources.ResourcesTracingPaper;
import com.architecture.client.resources.txt.TracingPaperText;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Widget;

public class TracingPaperViewImpl extends Composite implements TracingPaperView {

	private static TracingPaperViewImplUiBinder uiBinder = GWT.create(TracingPaperViewImplUiBinder.class);
	@UiField
	HTMLPanel wrapper;
	@UiField
	HTMLPanel details;
	@UiField
	Image background;
	@UiField
	Image text;
	@UiField
	Image car;
	@UiField
	Button background_c3;
	@UiField
	Button background_c3p;
	@UiField
	Button text_c3;
	@UiField
	Button text_c3p;
	@UiField
	Button car_c3;
	@UiField
	Button car_c3p;
	@UiField
	Button backgroundMountain;
	@UiField
	Button backgroundNyc;
	@UiField
	Button background_c4;
	@UiField
	Button text_c4;
	@UiField
	Button car_c4;
	@UiField
	Button background_none;
	@UiField
	Button text_none;
	@UiField
	Button car_none;
	@UiField
	Button price_c4;
	@UiField
	Button name_none;
	@UiField
	Button name_c3;
	@UiField
	Button name_c3p;
	@UiField
	Button name_c4;
	@UiField
	Button price_none;
	@UiField
	Button price_c3;
	@UiField
	Button price_c3p;
	@UiField
	Image name;
	@UiField
	Image price;
	@UiField
	Button v3d_c3;
	@UiField
	Button v3d_c3p;
	@UiField
	Button v3d_c4;
	@UiField
	HTMLPanel content;
	@SuppressWarnings("unused")
	private TracingPaperActivity activity;

	interface TracingPaperViewImplUiBinder extends UiBinder<Widget, TracingPaperViewImpl> {
	}

	public TracingPaperViewImpl() {
		ResourcesTracingPaper.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	private void init() {
		TracingPaperText tracingPaperText = GWT.create(TracingPaperText.class);
		this.background_none.setText(tracingPaperText.backgroundNone());
		this.background_c3.setText(tracingPaperText.backgroundBlue());
		this.background_c3p.setText(tracingPaperText.backgroundOrange());
		this.background_c4.setText(tracingPaperText.backgroundRed());
		this.backgroundMountain.setText(tracingPaperText.backgroundMountain());
		this.backgroundNyc.setText(tracingPaperText.backgroundNyc());

		this.text_none.setText(tracingPaperText.textNone());
		this.text_c3.setText(tracingPaperText.textC3());
		this.text_c3p.setText(tracingPaperText.textC3P());
		this.text_c4.setText(tracingPaperText.textC4());

		this.name_none.setText(tracingPaperText.nameNone());
		this.name_c3.setText(tracingPaperText.nameC3());
		this.name_c3p.setText(tracingPaperText.nameC3P());
		this.name_c4.setText(tracingPaperText.nameC4());

		this.price_none.setText(tracingPaperText.priceNone());
		this.price_c3.setText(tracingPaperText.priceC3());
		this.price_c3p.setText(tracingPaperText.priceC3P());
		this.price_c4.setText(tracingPaperText.priceC4());

		this.car_none.setText(tracingPaperText.carNone());
		this.car_c3.setText(tracingPaperText.carC3());
		this.car_c3p.setText(tracingPaperText.carC3P());
		this.car_c4.setText(tracingPaperText.carC4());
	}

	@Override
	public void setActivity(TracingPaperActivity activity) {
		this.activity = activity;
	}

	@UiHandler("background_none")
	void onBackground_noneClick(ClickEvent event) {
		this.background.setStyleName("none");
	}

	@UiHandler("text_none")
	void onText_noneClick(ClickEvent event) {
		this.text.setStyleName("none");
	}

	@UiHandler("name_none")
	void onName_noneClick(ClickEvent event) {
		this.name.setStyleName("none");
	}

	@UiHandler("price_none")
	void onPrice_noneClick(ClickEvent event) {
		this.price.setStyleName("none");
	}

	@UiHandler("car_none")
	void onCar_noneClick(ClickEvent event) {
		this.car.setUrl("");
	}

	@UiHandler("background_c3")
	void onBackground_c3Click(ClickEvent event) {
		this.background.setStyleName(ResourcesTracingPaper.INSTANCE.css().c3_background_calque());
	}

	@UiHandler("text_c3")
	void onText_c3Click(ClickEvent event) {
		this.text.setStyleName(ResourcesTracingPaper.INSTANCE.css().c3_text_calque());
	}

	@UiHandler("name_c3")
	void onName_c3Click(ClickEvent event) {
		this.name.setStyleName(ResourcesTracingPaper.INSTANCE.css().c3_name_calque());
	}

	@UiHandler("price_c3")
	void onPrice_c3Click(ClickEvent event) {
		this.price.setStyleName(ResourcesTracingPaper.INSTANCE.css().c3_price_calque());
	}

	@UiHandler("car_c3")
	void onCar_c3Click(ClickEvent event) {
		this.car.setResource(ResourcesTracingPaper.INSTANCE.c3_car_calque());
	}

	@UiHandler("v3d_c3")
	void onV3d_c3Click(ClickEvent event) {
		this.car.setUrl("http://visuel3d.citroen.com/V3DImage.ashx?version=1CXAA5HKQ504JY50&color=0MM00NKU&view=001&width=1024&height=346&format=png&reflect=1&V3DWidth=420&V3DHeight=420&LeftMargin=250&TopMargin=100");
	}

	@UiHandler("background_c3p")
	void onBackground_c3pClick(ClickEvent event) {
		this.background.setStyleName(ResourcesTracingPaper.INSTANCE.css().c3p_background_calque());
	}

	@UiHandler("text_c3p")
	void onText_c3pClick(ClickEvent event) {
		this.text.setStyleName(ResourcesTracingPaper.INSTANCE.css().c3p_text_calque());
	}

	@UiHandler("name_c3p")
	void onName_c3pClick(ClickEvent event) {
		this.name.setStyleName(ResourcesTracingPaper.INSTANCE.css().c3p_name_calque());
	}

	@UiHandler("price_c3p")
	void onPrice_c3pClick(ClickEvent event) {
		this.price.setStyleName(ResourcesTracingPaper.INSTANCE.css().c3p_price_calque());
	}

	@UiHandler("car_c3p")
	void onCar_c3pClick(ClickEvent event) {
		this.car.setResource(ResourcesTracingPaper.INSTANCE.c3p_car_calque());
	}

	@UiHandler("v3d_c3p")
	void onV3d_c3pClick(ClickEvent event) {
		this.car.setUrl("http://visuel3d.citroen.com/V3DImage.ashx?version=1CWAAFEBFT04A040&color=0MM00NKU&view=001&width=1024&height=346&format=png&reflect=1&V3DWidth=420&V3DHeight=420&LeftMargin=250&TopMargin=100");
	}

	@UiHandler("background_c4")
	void onBackground_c4Click(ClickEvent event) {
		this.background.setStyleName(ResourcesTracingPaper.INSTANCE.css().c4_background_calque());
	}

	@UiHandler("text_c4")
	void onText_c4Click(ClickEvent event) {
		this.text.setStyleName(ResourcesTracingPaper.INSTANCE.css().c4_text_calque());
	}

	@UiHandler("name_c4")
	void onName_c4Click(ClickEvent event) {
		this.name.setStyleName(ResourcesTracingPaper.INSTANCE.css().c4_name_calque());
	}

	@UiHandler("price_c4")
	void onPrice_c4Click(ClickEvent event) {
		this.price.setStyleName(ResourcesTracingPaper.INSTANCE.css().c4_price_calque());
	}

	@UiHandler("car_c4")
	void onCar_c4Click(ClickEvent event) {
		this.car.setResource(ResourcesTracingPaper.INSTANCE.c4_car_calque());
	}

	@UiHandler("v3d_c4")
	void onV3d_c4Click(ClickEvent event) {
		this.car.setUrl("http://visuel3d.citroen.com/V3DImage.ashx?version=1CB7A5HCQ501JW20&color=0MM00NKU&view=001&width=1024&height=346&format=png&reflect=1&V3DWidth=420&V3DHeight=420&LeftMargin=250&TopMargin=100");
	}

	@UiHandler("backgroundMountain")
	void onBackgroundMountainClick(ClickEvent event) {
		this.background.setStyleName(ResourcesTracingPaper.INSTANCE.css().background_calque_mountain());
	}

	@UiHandler("backgroundNyc")
	void onBackgroundNycClick(ClickEvent event) {
		this.background.setStyleName(ResourcesTracingPaper.INSTANCE.css().background_calque_NYC());
	}
}
