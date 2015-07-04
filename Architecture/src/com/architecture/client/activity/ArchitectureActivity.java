package com.architecture.client.activity;

import com.architecture.client.ClientFactory;
import com.google.gwt.activity.shared.Activity;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.place.shared.Place;

public abstract class ArchitectureActivity implements Activity {
	private ClientFactory clientFactory;
	
	public String mayStop() {
		return null;
	}
	public void onCancel() {
		
	}
	
	public void onStop() {
		
	}
	
	public void goTo(Place place) {
		this.clientFactory.getPlaceController().goTo(place);
	}
	
	public void removeLoader(){
		Element loader = Document.get().getElementById("loader");
		if (loader != null){
			loader.removeFromParent();
		}
	}
}
