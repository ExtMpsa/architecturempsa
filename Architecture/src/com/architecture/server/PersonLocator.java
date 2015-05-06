package com.architecture.server;

import com.architecture.server.domain.Person;
import com.google.web.bindery.requestfactory.shared.Locator;

public class PersonLocator extends Locator<Person, String> {

	@Override
	public Person create(Class<? extends Person> clazz) {
		return new Person();
	}

	@Override
	public Person find(Class<? extends Person> clazz, String mail) {
		return getPersonDao().findByMail(mail);
	}

	private PersonDao getPersonDao() {
		return new PersonDao();
	}

	@Override
	public Class<Person> getDomainType() {
		return Person.class;
	}

	@Override
	public String getId(Person domainObject) {
		return domainObject.getEmail();
	}

	@Override
	public Class<String> getIdType() {
		return String.class;
	}

	@Override
	public Object getVersion(Person domainObject) {
		return domainObject.getVersion();
	}

}
