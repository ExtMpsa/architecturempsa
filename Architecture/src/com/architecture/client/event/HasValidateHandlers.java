package com.architecture.client.event;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.event.shared.HasHandlers;

public interface HasValidateHandlers extends HasHandlers {
	HandlerRegistration addValidateHandler(ValidateHandler handler);

}
