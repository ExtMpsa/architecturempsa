package com.architecture.server;

import java.util.Hashtable;

import com.architecture.server.domain.Person;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;

public class PersonDao {
	Hashtable<String, Person> personList = new Hashtable<String, Person>();

	static {
		ObjectifyService.register(Person.class); // Fait connaître votre classe-entité à Objectify
	}

	public void saveAsync(Person p) {
		ObjectifyService.ofy().save().entity(p);
		// personList.put(p.getEmail(), p);
	}

	public void saveSync(Person p) {
		ObjectifyService.ofy().save().entity(p).now();
		// personList.put(p.getEmail(), p);
	}

	public Person findByMail(String mail) {
		Key<Person> cle = Key.create(Person.class, mail);
		Person person = ObjectifyService.ofy().load().key(cle).now();
		return person;
	}

	public void deleteAsync(String mail) {
		ObjectifyService.ofy().delete().type(Person.class).id(mail);
		// personList.remove(id);
	}

	public void deleteSync(String mail) {
		ObjectifyService.ofy().delete().type(Person.class).id(mail).now();
		// personList.remove(id);
	}
}
