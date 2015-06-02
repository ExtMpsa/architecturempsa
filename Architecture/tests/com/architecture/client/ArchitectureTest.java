package com.architecture.client;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.dom.client.Element;
import com.google.gwt.junit.client.GWTTestCase;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.ui.RootPanel;

public class ArchitectureTest extends GWTTestCase {

	@Override
	public String getModuleName() {
		return "com.architecture.Architecture";
	}

	private static native String getNodeName(Element elem) /*-{
		return (elem.nodeName || "").toLowerCase();
	}-*/;

	/**
	 * Removes all elements in the body, except scripts and iframes.
	 */
	@SuppressWarnings("deprecation")
	@Override
	public void gwtSetUp() {
		Element bodyElem = RootPanel.getBodyElement();

		List<Element> toRemove = new ArrayList<Element>();
		for (int i = 0, n = DOM.getChildCount(bodyElem); i < n; ++i) {
			Element elem = DOM.getChild(bodyElem, i);
			String nodeName = getNodeName(elem);
			if (!"script".equals(nodeName) && !"iframe".equals(nodeName)) {
				toRemove.add(elem);
			}
		}

		for (int i = 0, n = toRemove.size(); i < n; ++i) {
			DOM.removeChild(bodyElem, toRemove.get(i));
		}
	}

	public void testArchitectureCtor() {
		Architecture a = new Architecture();
		assertNotNull(a);
	}

}
