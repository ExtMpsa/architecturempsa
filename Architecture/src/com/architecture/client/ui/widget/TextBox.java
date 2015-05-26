package com.architecture.client.ui.widget;

import com.google.gwt.dom.client.InputElement;
import com.google.web.bindery.requestfactory.shared.EntityProxy;

public class TextBox extends com.google.gwt.user.client.ui.TextBox {

	public TextBox() {
		super();
		setPlaceHolder("field");
	}

	public TextBox(EntityProxy e) {
		super();
		setPlaceHolder("field");
	}

	public String getPlaceHolder() {
		return getElement().getAttribute("placeHolder");
	}

	public void setPlaceHolder(String placeHolder) {
		getElement().setAttribute("placeholder", placeHolder);
	}

	// Used for extends com.google.gwt.user.client.ui.TextBox
	@SuppressWarnings("unused")
	private InputElement getInputElement() {
		return getElement().cast();
	}
}
