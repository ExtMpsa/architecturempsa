package com.architecture.client.event;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.event.shared.HasHandlers;

public interface HasValidatedHandlers extends HasHandlers {
	HandlerRegistration addValidatedHandler(ValidatedHandler handler);

}
