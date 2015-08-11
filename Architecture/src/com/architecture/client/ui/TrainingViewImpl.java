package com.architecture.client.ui;

import java.util.ArrayList;

import com.architecture.client.activity.TrainingActivity;
import com.architecture.client.resources.ResourcesTraining;
import com.architecture.client.resources.txt.TrainingText;
import com.architecture.client.ui.widget.Anchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
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

		initAsideAllWidget("[^a-zA-Z_0-9]ut[^a-zA-Z_0-9]", "ut");
		initAsideAllWidget("[^a-zA-Z_0-9]Ut[^a-zA-Z_0-9]", "Ut");
		// initAsideAllWidget("[^a-zA-Z_0-9]Lorem[^a-zA-Z_0-9]", "Lorem");
		// initAside("lorem");
		// initAsideAllWidget("ipsum");
	}

	public void setActivity(TrainingActivity activity) {
		this.activity = activity;
	}

	@SuppressWarnings("deprecation")
	private void initAsideAllWidget(String splitter, String word) {
		if (article.getWidgetCount() == 0) {
			String articleText = article.getElement().getInnerText();
			String[] articleSplitted = articleText.split(splitter);
			for (int j = 0; j < articleSplitted.length; j++) {
				if (j == 0 && articleSplitted[j].equalsIgnoreCase("")) {
					// Le premier élément commence par le splitter
				} else if (j == 0 && !articleSplitted[j].equalsIgnoreCase("")) {
					// article.getElement().getFirstChildElement().setInnerText("");
					HTMLPanel span = new HTMLPanel("div", articleSplitted[j]);
					article.addAndReplaceElement(span, article.getElement().getFirstChildElement());
				} else {
					// article.getElement().getFirstChildElement().setInnerText("");
					Anchor a = new Anchor();
					a.setText(word);
					article.add(a);
					HTMLPanel span = new HTMLPanel("div", articleSplitted[j]);
					article.add(span);
				}
			}
		} else {
			int initialLength = article.getWidgetCount();
			ArrayList<HTMLPanel> list = new ArrayList<HTMLPanel>();
			for (int i = 0; i < initialLength; i++) {
				if (article.getWidget(i).getElement().getTagName().equalsIgnoreCase("div")) {
					HTMLPanel panel = initAsideOneWidget(splitter, word, article.getWidget(i));
					list.add(panel);
				} else {
					list.add(new HTMLPanel(""));
				}
			}
			Window.alert(String.valueOf(list.size()));

			for (int i = 0; i < initialLength; i++) {
				if (article.getWidget(i).getElement().getTagName().equalsIgnoreCase("div")) {
					article.addAndReplaceElement(list.get(i), article.getWidget(i).getElement());
				}

			}
		}
	}

	private HTMLPanel initAsideOneWidget(String splitter, String word, Widget w) {
		String widgetText = w.getElement().getInnerText();
		String[] articleSplitted = widgetText.split(splitter);
		HTMLPanel widget = new HTMLPanel("div", "");
		for (int j = 0; j < articleSplitted.length; j++) {
			if (j == 0 && articleSplitted[j].equalsIgnoreCase("")) {
				// Le premier élément commence par le splitter
			} else if (j == 0 && !articleSplitted[j].equalsIgnoreCase("")) {
				widget.getElement().setInnerText(articleSplitted[j]);
			} else {
				Anchor a = new Anchor();
				a.setText(word);
				widget.add(a);
				HTMLPanel span = new HTMLPanel("div", articleSplitted[j]);
				widget.add(span);
			}
		}
		return widget;
	}
}
