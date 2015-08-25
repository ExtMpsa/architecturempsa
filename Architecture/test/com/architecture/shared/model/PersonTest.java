package com.architecture.shared.model;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.Test;
import org.slim3.datastore.Datastore;
import org.slim3.tester.AppEngineTestCase;

public class PersonTest extends AppEngineTestCase {

	private Person model = new Person();

	@Test
	public void test() throws Exception {
		assertThat(model, is(notNullValue()));
	}

	@Test
	public void equalsTrueSameKey() throws Exception {
		Person obj = new Person();
		obj.setKey(model.getKey());
		assertThat(model.equals(obj), is(true));
	}

	@Test
	public void equalsFalse() throws Exception {
		assertThat(model.equals("true"), is(false));
	}

	@Test
	public void equalsNull() throws Exception {
		assertThat(model.equals(null), is(false));
	}

	@Test
	public void equalsKeyNull() throws Exception {
		Person obj = new Person();
		Datastore.put(obj);
		assertThat(obj.getKey(), is(notNullValue()));
		model.setKey(null);
		assertThat(model.equals(obj), is(false));
	}

	@Test
	public void equalsKeyNullForBoth() throws Exception {
		Person obj = new Person();
		obj.setKey(null);
		model.setKey(null);
		assertThat(model.equals(obj), is(true));
	}

	@Test
	public void equalsKeyNotNull() throws Exception {
		Datastore.put(model);
		Person obj = new Person();
		Datastore.put(obj);
		assertThat(model.equals(obj), is(false));
	}

	@Test
	public void equalsTrueNotSameRef() throws Exception {
		Datastore.put(model);
		Person obj = new Person();
		Datastore.put(obj);
		obj.setKey(model.getKey());
		assertThat(model.equals(obj), is(true));
	}

	@Test
	public void testHashCode() throws Exception {
		Datastore.put(model);
		int obj = model.hashCode();
		assertThat(obj, is(notNullValue()));
	}

	@Test
	public void testHashCodeKeyNull() throws Exception {
		model.setKey(null);
		int obj = model.hashCode();
		assertThat(obj, is(notNullValue()));
	}
}
