package com.architecture.client.ui.widget;

import com.google.gwt.dom.client.AnchorElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Hyperlink;

/**
 * A widget that represents a simple <a> element.
 *
 * <p>
 * <h3>Built-in Bidi Text Support</h3>
 * This widget is capable of automatically adjusting its direction according to its content. This feature is controlled by {@link #setDirectionEstimator} or passing a DirectionEstimator parameter to
 * the constructor, and is off by default.
 * </p>
 *
 * <h3>CSS Style Rules</h3>
 * <ul class='css'>
 * <li>.gwt-Anchor { }</li>
 * </ul>
 *
 * @see Hyperlink
 */
public class Anchor extends com.google.gwt.user.client.ui.Anchor {

	/**
	 * Creates an empty anchor.
	 *
	 * <p>
	 * The anchor's href is <em>not</em> set, which means that the widget will not not be styled with the browser's native link styles (such as underline and font color). Use {@link #Anchor(boolean)}
	 * to add a default no-op href that does not open a link but ensures the native link styles are applied.
	 * </p>
	 *
	 * @see #Anchor(boolean)
	 */
	public Anchor() {
		super();
		this.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				if (!isSameHref(Window.Location.getHref()) && !getHref().equalsIgnoreCase("")) {
					resetStartTime(event.getSource().toString());
				}
			}
		});
	}

	private boolean isSameHref(String s) {
		if (getHref().equalsIgnoreCase(s)) {
			return true;
		}
		return false;
	}

	private native void resetStartTime(String s) /*-{
		$wnd["startTime"] = new Date().getTime();
		$wnd["dataLayer"] = $wnd["dataLayer"] || [];
		$wnd["lastAjaxUrl"] = $wnd.location.href;
		$wnd.dataLayer.push({
			description : "User click on tag " + s,
			event : "clickLink",
			startTime : $wnd["startTime"]
		});
	}-*/;

	private AnchorElement getAnchorElement() {
		return AnchorElement.as(getElement());
	}

}
