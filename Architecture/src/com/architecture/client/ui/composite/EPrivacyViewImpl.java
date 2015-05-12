package com.architecture.client.ui.composite;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.ParagraphElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

public class EPrivacyViewImpl extends Composite {

	private static EPrivacyDemoViewImplUiBinder uiBinder = GWT.create(EPrivacyDemoViewImplUiBinder.class);
	@UiField
	ParagraphElement content;
	@UiField
	Button demo;
	@UiField
	Button inLineImplied;
	@UiField
	Button hoverImpliedTop;
	@UiField
	Button hoverOnly;
	@UiField
	Button apHover;
	@UiField
	Button apInPage;
	@UiField
	Button apExplicitPage;
	@UiField
	Button apImpliedHover;
	@UiField
	Button apImpliedInline;
	String token = "";

	interface EPrivacyDemoViewImplUiBinder extends UiBinder<Widget, EPrivacyViewImpl> {
	}

	public EPrivacyViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
		init();
	}

	private void init() {
		if (token.equalsIgnoreCase("Demo")) {
			content.setInnerText("<!-- Ghostery Inc tag cid: 242 pid: 3850 -->" + "<script type=\"text/javascript\">" + "(function() {var hn = document.createElement('script');"
					+ "hn.type = 'text/javascript';" + "hn.async = true;" + "hn.setAttribute('data-ev-hover-pid', 3850);" + "hn.setAttribute('data-ev-hover-ocid', 242);"
					+ "hn.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'c.betrad.com/geo/h1.js';" + "var s = document.getElementsByTagName('script')[0];"
					+ "s.parentNode.insertBefore(hn, s);" + "})();" + "</script>");
		} else if (token.equalsIgnoreCase("InlineImplied")) {
			content.setInnerText("<!--  Ghostery Inc tag  cid: 242  pid: 3856-->" + "<a id=\"_bapw-link\" href=\"#\" target=\"_blank\" style=\"text-decoration:none !important\">"
					+ "<span style=\"vertical-align:middle !important\">" + "Accepter les cookies" + "</span>" + "</a>" + "<script type=\"text/javascript\">  " + "(function() {    "
					+ "var ev = document.createElement('script'); ev.type = 'text/javascript'; ev.async = true;"
					+ " ev.setAttribute('data-ev-tag-pid', 3856); ev.setAttribute('data-ev-tag-ocid', 242);" + "     ev.src = ('https:' == document.location.protocol ? 'https://' : 'http://')"
					+ " + 'c.betrad.com/pub/tag.js';    var s = document.getElementsByTagName('script')[0];" + " s.parentNode.insertBefore(ev, s);  })();" + "</script>"
					+ "<script type=\"text/javascript\">  " + "(function() {    var hn = document.createElement('script'); hn.type = 'text/javascript';"
					+ " hn.async = true; hn.setAttribute('data-ev-hover-pid', 3856); hn.setAttribute('data-ev-hover-ocid', 242);"
					+ "    hn.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'c.betrad.com/geo/h1.js';"
					+ "    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(hn, s);  })();" + "</script>");
		} else if (token.equalsIgnoreCase("HoverImpliedTop")) {
			content.setInnerText("<!--  Ghostery Inc tag  cid: 242  pid: 3854-->" + "<script type=\"text/javascript\">" + "  (function() {"
					+ "    var hn = document.createElement('script'); hn.type = 'text/javascript'; hn.async = true;"
					+ " hn.setAttribute('data-ev-hover-pid', 3854); hn.setAttribute('data-ev-hover-ocid', 242);" + "    hn.src = ('https:' == document.location.protocol ? 'https://' : 'http://')"
					+ " + 'c.betrad.com/geo/h1.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(hn, s);" + "  })();" + "</script>");
		} else if (token.equalsIgnoreCase("HoverOnly")) {
			content.setInnerText("<!--  Ghostery Inc tag  cid: 242  pid: 3855-->" + "<script type=\"text/javascript\">" + "  (function() {"
					+ "    var hn = document.createElement('script'); hn.type = 'text/javascript'; hn.async = true;"
					+ " hn.setAttribute('data-ev-hover-pid', 3855); hn.setAttribute('data-ev-hover-ocid', 242);" + "    hn.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +"
					+ " 'c.betrad.com/geo/h1.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(hn, s);  " + "})();" + "</script>");
		} else if (token.equalsIgnoreCase("TEST_PSA_AP_FR_FR__Hover")) {
			content.setInnerText("<!--  Ghostery Inc tag  cid: 3484  pid: 4042--><script type=\"text/javascript\">  (function() {    var hn = document.createElement('script'); hn.type = 'text/javascript'; hn.async = true; hn.setAttribute('data-ev-hover-pid', 4042); hn.setAttribute('data-ev-hover-ocid', 3484);    hn.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'c.betrad.com/geo/h1.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(hn, s);  })();</script>");
		} else if (token.equalsIgnoreCase("TEST_PSA_AP_FR_FR__InPage")) {
			content.setInnerText("<!--  Ghostery Inc tag  cid: 3484  pid: 4041--><a id=\"_bapw-link\" href=\"#\" target=\"_blank\" style=\"text-decoration:none !important\"><span style=\"vertical-align:middle !important\">Accepter les cookies</span></a><script type=\"text/javascript\">  (function() {    var ev = document.createElement('script'); ev.type = 'text/javascript'; ev.async = true; ev.setAttribute('data-ev-tag-pid', 4041); ev.setAttribute('data-ev-tag-ocid', 3484);     ev.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'c.betrad.com/pub/tag.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ev, s);  })();</script>");
		} else if (token.equalsIgnoreCase("TEST_PSA_AP_FR_FR_Explicit_Hover")) {
			content.setInnerText("<!--  Ghostery Inc tag  cid: 3484  pid: 4043--><script type=\"text/javascript\">  (function() {    var hn = document.createElement('script'); hn.type = 'text/javascript'; hn.async = true; hn.setAttribute('data-ev-hover-pid', 4043); hn.setAttribute('data-ev-hover-ocid', 3484);    hn.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'c.betrad.com/geo/h1.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(hn, s);  })();</script>");
		} else if (token.equalsIgnoreCase("TEST_PSA_AP_FR_FR_Implied_Hover")) {
			content.setInnerText("<!--  Ghostery Inc tag  cid: 3484  pid: 4044--><script type=\"text/javascript\">  (function() {    var hn = document.createElement('script'); hn.type = 'text/javascript'; hn.async = true; hn.setAttribute('data-ev-hover-pid', 4044); hn.setAttribute('data-ev-hover-ocid', 3484);    hn.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'c.betrad.com/geo/h1.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(hn, s);  })();</script>");
		} else if (token.equalsIgnoreCase("TEST_PSA_AP_FR_FR_Implied_Inline")) {
			content.setInnerText("<!--  Ghostery Inc tag  cid: 3484  pid: 4040-->" + "<a id=\"_bapw-link\" href=\"#\" target=\"_blank\" style=\"text-decoration:none !important\">"
					+ "<span style=\"vertical-align:middle !important\">Accepter les cookies</span>" + "</a>" + "<script type=\"text/javascript\">" + "  (function() {    "
					+ "var ev = document.createElement('script');" + " ev.type = 'text/javascript';" + " ev.async = true; ev.setAttribute('data-ev-tag-pid', 4040);"
					+ " ev.setAttribute('data-ev-tag-ocid', 3484);" + "     ev.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'c.betrad.com/pub/tag.js';"
					+ "    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ev, s);" + "  })();" + "</script>" + "<script type=\"text/javascript\">" + "  (function() {"
					+ "    var hn = document.createElement('script');" + " hn.type = 'text/javascript';" + " hn.async = true;" + " hn.setAttribute('data-ev-hover-pid', 4040);"
					+ " hn.setAttribute('data-ev-hover-ocid', 3484);" + "    hn.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'c.betrad.com/geo/h1.js';"
					+ "    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(hn, s);" + "  })();" + "</script>");
		}
	}

	public void setToken(String token) {
		this.token = token;
		init();
	}

	public void setContent(String content) {
		this.content.setInnerText(content);
	}

	void relocate(String token) {
		if (Window.Location.getQueryString().equals("?gwt.codesvr=127.0.0.1:9997")) {
			Window.Location.replace(GWT.getHostPageBaseURL() + "Architecture.html" + Window.Location.getQueryString() + token);
			Window.Location.reload();
		} else {
			Window.Location.replace(GWT.getHostPageBaseURL() + Window.Location.getQueryString() + token);
			Window.Location.reload();
		}
	}

	@UiHandler("demo")
	void onDemoClick(ClickEvent event) {
		relocate("#EPrivacyPlace:Demo");
	}

	@UiHandler("inLineImplied")
	void onInLineImpliedClick(ClickEvent event) {
		relocate("#EPrivacyPlace:InlineImplied");
	}

	@UiHandler("hoverImpliedTop")
	void onHoverImpliedTopClick(ClickEvent event) {
		relocate("#EPrivacyPlace:HoverImpliedTop");
	}

	@UiHandler("hoverOnly")
	void onHoverOnlyClick(ClickEvent event) {
		relocate("#EPrivacyPlace:HoverOnly");
	}

	@UiHandler("apHover")
	void onApHoverClick(ClickEvent event) {
		relocate("#EPrivacyPlace:TEST_PSA_AP_FR_FR__Hover");
	}

	@UiHandler("apInPage")
	void onApInPageClick(ClickEvent event) {
		relocate("#EPrivacyPlace:TEST_PSA_AP_FR_FR__InPage");
	}

	@UiHandler("apExplicitPage")
	void onApExplicitPageClick(ClickEvent event) {
		relocate("#EPrivacyPlace:TEST_PSA_AP_FR_FR_Explicit_Hover");
	}

	@UiHandler("apImpliedHover")
	void onApImpliedHoverClick(ClickEvent event) {
		relocate("#EPrivacyPlace:TEST_PSA_AP_FR_FR_Implied_Hover");
	}

	@UiHandler("apImpliedInline")
	void onApImpliedInlineClick(ClickEvent event) {
		relocate("#EPrivacyPlace:TEST_PSA_AP_FR_FR_Implied_Inline");
	}
}
