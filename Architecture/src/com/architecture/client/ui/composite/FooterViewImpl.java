package com.architecture.client.ui.composite;

import com.architecture.client.resources.ResourcesFooter;
import com.architecture.client.resources.txt.FooterText;
import com.architecture.client.ui.widget.Anchor;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Widget;

public class FooterViewImpl extends Composite {

	private static FooterViewImplUiBinder uiBinder = GWT.create(FooterViewImplUiBinder.class);
	@UiField
	HTMLPanel wrapper;
	@UiField
	HTMLPanel content;
	@UiField
	Anchor policies;
	@UiField
	Anchor about;
	@UiField
	Anchor dipet;

	interface FooterViewImplUiBinder extends UiBinder<Widget, FooterViewImpl> {
	}

	public FooterViewImpl() {
		ResourcesFooter.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		FooterText footerText = GWT.create(FooterText.class);

		dipet.setText(footerText.dipet());
		dipet.setHash("#");

		about.setText(footerText.about());
		about.setHash("#!about:");

		policies.setText(footerText.policies());
		policies.setHash("#!policies");
	}

}
