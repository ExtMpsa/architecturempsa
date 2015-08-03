package com.architecture.client.ui;

import com.architecture.client.activity.TrainingActivity;
import com.architecture.client.resources.ResourcesTraining;
import com.architecture.client.resources.txt.TrainingText;
import com.architecture.client.ui.widget.Anchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Widget;

public class TrainingViewImpl extends Composite {

	private static TemplateViewImplUiBinder uiBinder = GWT.create(TemplateViewImplUiBinder.class);
	@UiField
	HTMLPanel wrapper;
	@UiField
	HTMLPanel article;
	@UiField
	HTMLPanel aside;
	@UiField
	HTMLPanel content;
	@SuppressWarnings("unused")
	private TrainingActivity activity;

	interface TemplateViewImplUiBinder extends UiBinder<Widget, TrainingViewImpl> {
	}

	public TrainingViewImpl() {
		ResourcesTraining.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));

		TrainingText trainingText = GWT.create(TrainingText.class);
		article.getElement().setInnerHTML("<p>" + trainingText.article() + "</p>");

		aside.setVisible(false);
		aside.getElement().setInnerHTML(null);

		initAsideAllWidget("Lorem");
		// initAside("lorem");
		initAsideAllWidget("ipsum");
	}

	public void setActivity(TrainingActivity activity) {
		this.activity = activity;
	}

	private void initAsideAllWidget(String splitter) {
		if (article.getWidgetCount() == 0) {
			String articleText = article.getElement().getInnerText();
			String[] articleSplitted = articleText.split(splitter);
			for (int j = 0; j < articleSplitted.length; j++) {
				if (j == 0 && articleSplitted[j].equalsIgnoreCase("")) {
					// Le premier élément commence par le splitter
				} else if (j == 0 && !articleSplitted[j].equalsIgnoreCase("")) {
					article.getElement().getFirstChildElement().setInnerText("");
					HTMLPanel span = new HTMLPanel("span", articleSplitted[j]);
					article.add(span, article.getElement().getFirstChildElement());
				} else {
					article.getElement().getFirstChildElement().setInnerText("");
					Anchor a = new Anchor();
					a.setText(splitter);
					article.add(a, article.getElement().getFirstChildElement());
					HTMLPanel span = new HTMLPanel("span", articleSplitted[j]);
					article.add(span, article.getElement().getFirstChildElement());
				}
			}
		} else {
			for (int i = 0; i < article.getWidgetCount(); i++) {
				if (article.getWidget(i).getElement().getTagName().equalsIgnoreCase("span")) {
					initAsideOneWidget(splitter, article.getWidget(i));
				}
			}
		}
	}

	private void initAsideOneWidget(String splitter, Widget w) {
		String articleText = w.getElement().getInnerText();
		String[] articleSplitted = articleText.split(splitter);
		for (int j = 0; j < articleSplitted.length; j++) {
			if (j == 0 && articleSplitted[j].equalsIgnoreCase("")) {
				// Le premier élément commence par le splitter
			} else if (j == 0 && !articleSplitted[j].equalsIgnoreCase("")) {
				// w.getElement().setInnerText("");
				// HTMLPanel span = new HTMLPanel("span", articleSplitted[j]);
				// article.add(span, w.getElement());
			} else {
				// w.getElement().setInnerText("");
				// Anchor a = new Anchor();
				// a.setText(splitter);
				// article.add(a, w.getElement());
				// HTMLPanel span = new HTMLPanel("span", articleSplitted[j]);
				// article.add(span, w.getElement());
			}
		}

	}
}
