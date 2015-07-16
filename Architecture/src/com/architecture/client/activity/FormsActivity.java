package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.event.PageViewEvent;
import com.architecture.client.place.FormsPlace;
import com.architecture.client.ui.FormsView;
import com.architecture.shared.proxy.PersonProxy;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class FormsActivity extends ArchitectureActivity {
	private ClientFactory clientFactory;
	private FormsView formsView;
	private String step;

	public FormsActivity(FormsPlace place, ClientFactory clientFactory) {
		this.clientFactory = clientFactory;
		this.step = place.getFormsName();
	}

	@Override
	public void start(AcceptsOneWidget containerWidget, EventBus eventBus) {
		this.formsView = this.clientFactory.getFormsView();
		if (this.formsView.getPerson() == null) {
			PersonProxy p = this.clientFactory.getArchitectureRequestFactory().getPersonRequest().create(PersonProxy.class);
			// Need for validator
			p.setDepartment("");
			p.setLastName("");
			p.setFirstName("");
			p.setEmail("");
			this.formsView.setPerson(p);
		}
		this.formsView.setActivity(this);
		if (step.equalsIgnoreCase("")) {
			this.formsView.setStep(this.step, true);
		} else {
			this.formsView.setStep(this.step, false);
		}
		containerWidget.setWidget(this.formsView.asWidget());
		removeLoader();
		clientFactory.getEventBus().fireEvent(new PageViewEvent());
	}

	@Override
	public void goTo(Place place) {
		this.clientFactory.getPlaceController().goTo(place);
	}

	public ClientFactory getClientFactory() {
		return this.clientFactory;
	}
}
