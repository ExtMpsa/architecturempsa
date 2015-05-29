package com.architecture.shared.proxy;

import javax.validation.constraints.Size;

import com.architecture.server.PersonLocator;
import com.architecture.server.domain.Person;
import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;

@ProxyFor(value = Person.class,
		locator = PersonLocator.class)
public interface PersonProxy extends EntityProxy {
	@Size(min = 1)
	public String getDepartment();

	@Size(min = 7)
	public String getEmail();

	@Size(min = 1)
	public String getFirstName();

	public String getIdRpi();

	@Size(min = 1)
	public String getLastName();

	@Size(min = 4)
	public String getPasswordHash();

	public void setDepartment(String department);

	public void setEmail(String email);

	public void setFirstName(String firstName);

	public void setIdRpi(String idRpi);

	public void setLastName(String lastName);

	public void setPasswordHash(String passwordHash);

	public Long getId();

	public void setId(Long id);
}
