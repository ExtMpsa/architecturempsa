package com.architecture.shared.model;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.Test;
import org.slim3.datastore.Datastore;
import org.slim3.datastore.InverseModelRef;
import org.slim3.tester.AppEngineTestCase;

import com.architecture.server.meta.GoogleTagManagerMeta;

public class GoogleTagManagerTest extends AppEngineTestCase {

	private GoogleTagManager model = new GoogleTagManager();

	@Test
	public void test() throws Exception {
		assertThat(model, is(notNullValue()));
	}

	@Test
	public void equalsTrueSameRef() throws Exception {
		assertThat(model.equals(model), is(true));
	}

	@Test
	public void equalsTrueSameKey() throws Exception {
		GoogleTagManager obj = new GoogleTagManager();
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
		GoogleTagManager obj = new GoogleTagManager();
		Datastore.put(obj);
		assertThat(obj.getKey(), is(notNullValue()));
		model.setKey(null);
		assertThat(model.equals(obj), is(false));
	}

	@Test
	public void equalsKeyNullForBoth() throws Exception {
		GoogleTagManager obj = new GoogleTagManager();
		obj.setKey(null);
		model.setKey(null);
		assertThat(model.equals(obj), is(true));
	}

	@Test
	public void equalsKeyNotNull() throws Exception {
		Datastore.put(model);
		GoogleTagManager obj = new GoogleTagManager();
		Datastore.put(obj);
		assertThat(model.equals(obj), is(false));
	}

	@Test
	public void equalsTrueNotSameRef() throws Exception {
		Datastore.put(model);
		GoogleTagManager obj = new GoogleTagManager();
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
	public void getAccount() throws Exception {
		Account account = new Account();
		account.getGtm().setModel(model);
		Datastore.put(model, account);
		InverseModelRef<Account, GoogleTagManager> obj = model.getAccount();
		assertThat(obj, is(notNullValue()));
	}
	
	@Test
	public void getVersion() throws Exception {
		assertThat(GoogleTagManagerMeta.get().getSchemaVersionName(), is("slim3.schemaVersion"));
	}
}
