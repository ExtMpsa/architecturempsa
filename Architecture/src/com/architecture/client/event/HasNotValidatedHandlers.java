package com.architecture.client.event;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.event.shared.HasHandlers;

public interface HasNotValidatedHandlers extends HasHandlers {
	HandlerRegistration addNotValidatedHandler(NotValidatedHandler handler);

}
