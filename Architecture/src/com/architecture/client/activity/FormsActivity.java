package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.architecture.client.place.FormsPlace;
import com.architecture.client.ui.FormsView;
import com.architecture.shared.proxy.PersonProxy;
import com.google.gwt.activity.shared.AbstractActivity;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.place.shared.Place;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.AcceptsOneWidget;

public class FormsActivity extends AbstractActivity implements Activity {
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
			this.formsView.setPerson(this.clientFactory.getArchitectureRequestFactory().getPersonRequest().create(PersonProxy.class));
		}
		this.formsView.setActivity(this);
		this.formsView.setStep(this.step);
		containerWidget.setWidget(this.formsView.asWidget());
	}

	public String getUrl(String s) {
		String url = Window.Location.getHref();
		String pathWithParameterWithoutHash = url.substring(url.indexOf(Window.Location.getPath()));
		if (!Window.Location.getHash().equalsIgnoreCase("")) {
			pathWithParameterWithoutHash = url.substring(url.indexOf(Window.Location.getPath()), url.indexOf(Window.Location.getHash()));
		}
		return pathWithParameterWithoutHash + s;
	}

	@Override
	public void goTo(Place place) {
		this.clientFactory.getPlaceController().goTo(place);
	}

	public ClientFactory getClientFactory() {
		return this.clientFactory;
	}
}
