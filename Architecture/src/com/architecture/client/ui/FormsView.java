package com.architecture.client.ui;

import com.architecture.client.activity.FormsActivity;
import com.architecture.shared.proxy.PersonProxy;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.TextBox;

public interface FormsView extends IsWidget {
	void setActivity(FormsActivity activity);

	void setStep(String step, boolean singlePage);

	public TextBox getNameValue();

	public TextBox getFirstNameValue();

	public TextBox getMailValue();

	public TextBox getPsaEntityValue();

	public PersonProxy getUpdatedPerson(PersonProxy p);

	public void setPerson(PersonProxy person);

	public boolean validate(String step);

	PersonProxy getPerson();
}
