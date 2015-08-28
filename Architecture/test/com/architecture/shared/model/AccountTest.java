package com.architecture.shared.model;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.Test;
import org.slim3.datastore.Datastore;
import org.slim3.tester.AppEngineTestCase;

import com.architecture.server.meta.AccountMeta;

public class AccountTest extends AppEngineTestCase {

	private Account model = new Account();
	private AccountMeta modelMeta = AccountMeta.get();

	@Test
	public void test() throws Exception {
		assertThat(model, is(notNullValue()));
	}

	@Test
	public void equalsTrueSameRef() throws Exception {
		Datastore.put(model);
		assertThat(model.equals(model), is(true));
	}

	@Test
	public void equalsTrueSameKey() throws Exception {
		Account obj = new Account();
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
		Account obj = new Account();
		Datastore.put(obj);
		assertThat(obj.getKey(), is(notNullValue()));
		model.setKey(null);
		assertThat(model.equals(obj), is(false));
	}

	@Test
	public void equalsKeyNullForBoth() throws Exception {
		Account obj = new Account();
		obj.setKey(null);
		model.setKey(null);
		assertThat(model.equals(obj), is(true));
	}

	@Test
	public void equalsKeyNotNull() throws Exception {
		Datastore.put(model);
		Account obj = new Account();
		Datastore.put(obj);
		assertThat(model.equals(obj), is(false));
	}

	@Test
	public void equalsTrueNotSameRef() throws Exception {
		Datastore.put(model);
		Account obj = new Account();
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

	@Test
	public void getVersionMeta() throws Exception {
		assertThat(modelMeta.getSchemaVersionName(), is("slim3.schemaVersion"));
	}
}
