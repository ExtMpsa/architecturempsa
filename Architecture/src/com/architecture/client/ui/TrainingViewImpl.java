package com.architecture.client.ui;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;

import com.architecture.client.activity.TrainingActivity;
import com.architecture.client.resources.ResourcesTraining;
import com.architecture.client.resources.txt.TrainingText;
import com.architecture.client.ui.widget.Anchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.FocusEvent;
import com.google.gwt.event.dom.client.FocusHandler;
import com.google.gwt.event.dom.client.MouseOverEvent;
import com.google.gwt.event.dom.client.MouseOverHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.History;
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
		article.getElement().setInnerHTML(trainingText.article());

		aside.setVisible(false);
		aside.getElement().setInnerHTML(null);

		ArrayList<String> words = new ArrayList<String>();
		words.add("Lorem");
		words.add("ut");
		words.add("Ut");
		words.add("pariatur");

		initAsideAllWidget(words);
	}

	public void setActivity(TrainingActivity activity) {
		this.activity = activity;
	}

	private void initAsideAllWidget(ArrayList<String> words) {
		String articleText = " " + article.getElement().getInnerText();
		String newArticleText = articleText;

		Iterator<String> itWords = words.iterator();
		while (itWords.hasNext()) {
			String word = itWords.next();
			newArticleText = newArticleText.replaceAll(" " + word + " ", " ;splitter;" + word + ";splitter; ");
			newArticleText = newArticleText.replaceAll(" " + word + "\\.", " ;splitter;" + word + ";splitter;.");
		}

		String[] split = newArticleText.split(";splitter;");
		ArrayList<String> articleTextSplitted = new ArrayList<String>(Arrays.asList(split));
		HTMLPanel panel = new HTMLPanel("");
		Iterator<String> it = articleTextSplitted.iterator();
		while (it.hasNext()) {
			final String s = it.next();
			if (words.contains(s)) {
				Anchor a = new Anchor();
				a.setText(s);
				panel.add(a);
				a.setHash("#!Training:" + s.toLowerCase());
				a.addFocusHandler(new FocusHandler() {

					@Override
					public void onFocus(FocusEvent event) {
						Window.alert("FocusEvent");
						History.newItem("#!Training:" + s.toLowerCase());
					}
				});
				a.addMouseOverHandler(new MouseOverHandler() {

					@Override
					public void onMouseOver(MouseOverEvent event) {
						History.newItem("!Training:" + s.toLowerCase());
					}
				});
			} else if (s.equals(" ")) {

			} else {
				panel.add(new HTMLPanel("span", s));
			}
		}
		article.getElement().removeAllChildren();
		article.add(panel);
	}

	public void setAside(String word) {
		aside.getElement().setInnerText(word);
		aside.setVisible(true);
	}
}
