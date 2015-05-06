package com.architecture.client.requestfactory;

import com.google.web.bindery.requestfactory.shared.RequestFactory;

public interface ArchitectureRequestFactory extends RequestFactory {
	PersonRequest getPersonRequest();
}