package com.architecture.client.ui;

import com.architecture.client.activity.FormsActivity;
import com.architecture.client.requestfactory.PersonRequest;
import com.architecture.client.resources.Resources;
import com.architecture.client.resources.txt.SignText;
import com.architecture.client.ui.composite.SignRecapViewImpl;
import com.architecture.client.ui.composite.SignStep1ViewImpl;
import com.architecture.client.ui.composite.SignStep2ViewImpl;
import com.architecture.client.ui.composite.SignSuccessViewImpl;
import com.architecture.shared.proxy.PersonProxy;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.HeadingElement;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.google.web.bindery.requestfactory.shared.Receiver;

public class FormsViewImpl extends Composite implements FormsView {

	private static FormsViewImplUiBinder uiBinder = GWT.create(FormsViewImplUiBinder.class);
	@UiField
	HTMLPanel main;
	@UiField
	HTMLPanel content;
	@UiField
	HeadingElement inscription;
	private SignStep1ViewImpl step1;
	private SignStep2ViewImpl step2;
	private SignRecapViewImpl summary;
	private SignSuccessViewImpl success;
	private PersonProxy person;
	private FormsActivity activity;

	interface FormsViewImplUiBinder extends UiBinder<Widget, FormsViewImpl> {
	}

	public FormsViewImpl() {
		Resources.INSTANCE.css().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));
		init();

	}

	private void init() {
		SignText signText = GWT.create(SignText.class);
		inscription.setInnerText(signText.title());
	}

	private void init(String step) {
		if (step.equals("step1")) {
			setStep1();
		} else if (step.equals("step2")) {
			setStep2();
		} else if (step.equals("summary")) {
			setRecap();
		} else if (step.equals("signSuccess")) {
			setSuccess();
		} else {
			setStep1();
		}
	}

	private void setStep1() {
		if (step1 == null) {
			createStep1();
		}
		step1.setVisible(true);
		step1.setOpen();
		if (step2 != null) {
			step2.setVisible(false);
		}
		if (summary != null) {
			summary.setVisible(false);
		}
		if (success != null) {
			success.setVisible(false);
		}
	}

	private void setStep2() {
		if (step1 == null) {
			createStep1();
			step1.setClose();
		}
		if (step2 == null) {
			createStep2();
		}
		step1.setClose();
		step2.setVisible(true);
		step2.setOpen();
		if (summary != null) {
			summary.setVisible(false);
		}
		if (success != null) {
			success.setVisible(false);
		}
	}

	private void setRecap() {
		if (step1 == null) {
			createStep1();
		}
		if (step2 == null) {
			createStep2();
		}
		if (summary == null) {
			createSummary();
		}
		step1.setVisible(false);
		step2.setVisible(false);
		summary.setVisible(true);
		if (success != null) {
			success.setVisible(false);
		}
	}

	private void setSuccess() {
		if (step1 != null) {
			step1.setVisible(false);
		}
		if (step2 != null) {
			step2.setVisible(false);
		}
		if (summary != null) {
			summary.setVisible(false);
		}
		success = new SignSuccessViewImpl();
		if (person.getEmail() != null) {
			PersonRequest context = activity.getClientFactory().getArchitectureRequestFactory().getPersonRequest();
			context.findByMail(person.getEmail()).fire(new Receiver<PersonProxy>() {

				@Override
				public void onSuccess(PersonProxy response) {
					success.getMailValue().setText(response.getEmail());
					success.getNameValue().setText(response.getLastName());
					success.getFirstNameValue().setText(response.getFirstName());
				}

			});
		}
		content.add(success);
		success.getMailValue().setText("");
	}

	private void createStep1() {
		step1 = new SignStep1ViewImpl();
		step1.setPerson(person);
		content.add(step1);
	}

	private void createStep2() {
		step2 = new SignStep2ViewImpl();
		// step2.setPerson(person);
		content.add(step2);
	}

	private void createSummary() {
		summary = new SignRecapViewImpl();
		content.add(summary);
	}

	@Override
	public PersonProxy getPerson() {
		return person;
	}

	@Override
	public void setPerson(PersonProxy person) {
		this.person = person;
	}

	@Override
	public PersonProxy getUpdatedPerson(PersonProxy p) {
		return step1.getUpdatedPerson(p);
	}

	@Override
	public void setActivity(FormsActivity activity) {
		this.activity = activity;
	}

	@Override
	public void setStep(String step) {
		init(step);
	}

	@Override
	public TextBox getNameValue() {
		return step1.getNameValue();
	}

	@Override
	public TextBox getFirstNameValue() {
		return step1.getFirstNameValue();
	}

	@Override
	public TextBox getMailValue() {
		return step1.getMailValue();
	}

	@Override
	public TextBox getPsaEntityValue() {
		return step1.getPsaEntityValue();
	}
}
