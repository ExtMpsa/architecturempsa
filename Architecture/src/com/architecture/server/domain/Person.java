package com.architecture.server.domain;

import com.googlecode.objectify.annotation.Cache;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
@Cache
public class Person extends DatastoreObject {
	private String department;
	@Id
	private String email;
	private String firstName;
	private String idRpi;
	private String lastName;
	private String passwordHash;

	public Person() {
	}

	public String getDepartment() {
		return department;
	}

	public String getEmail() {
		return email;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getIdRpi() {
		return idRpi;
	}

	public String getLastName() {
		return lastName;
	}

	public String getPasswordHash() {
		return passwordHash;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setIdRpi(String idRpi) {
		this.idRpi = idRpi;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}
}
