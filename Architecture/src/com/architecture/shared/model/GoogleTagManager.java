package com.architecture.shared.model;

import java.io.Serializable;

import org.slim3.datastore.Attribute;
import org.slim3.datastore.InverseModelRef;
import org.slim3.datastore.Model;

import com.google.appengine.api.datastore.Key;

@Model(schemaVersion = 1)
public class GoogleTagManager implements Serializable {

	private static final long serialVersionUID = 1L;

	@Attribute(primaryKey = true)
	private Key key;

	@Attribute(version = true)
	private Long version;

	@Attribute(persistent = false)
	private InverseModelRef<Account, GoogleTagManager> account = new InverseModelRef<Account, GoogleTagManager>(Account.class, "gtm", this);

	private String gtmId;

	public GoogleTagManager() {

	}

	public GoogleTagManager(String id) {
		setGtmId(id);
	}

	/**
	 * Returns the key.
	 * 
	 * @return the key
	 */
	public Key getKey() {
		return key;
	}

	/**
	 * Sets the key.
	 * 
	 * @param key
	 *            the key
	 */
	public void setKey(Key key) {
		this.key = key;
	}

	/**
	 * Returns the version.
	 * 
	 * @return the version
	 */
	public Long getVersion() {
		return version;
	}

	/**
	 * Sets the version.
	 * 
	 * @param version
	 *            the version
	 */
	public void setVersion(Long version) {
		this.version = version;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((key == null) ? 0 : key.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		GoogleTagManager other = (GoogleTagManager) obj;
		if (key == null) {
			if (other.key != null) {
				return false;
			}
		} else if (!key.equals(other.key)) {
			return false;
		}
		return true;
	}

	/**
	 * @category Accessor
	 * @return the gtmId
	 */
	public String getGtmId() {
		return gtmId;
	}

	/**
	 * @category Accessor
	 * @param gtmId
	 *            the gtmId to set
	 */
	public void setGtmId(String gtmId) {
		this.gtmId = gtmId;
	}

	/**
	 * @category Accessor
	 * @return the account
	 */
	public InverseModelRef<Account, GoogleTagManager> getAccount() {
		return account;
	}
}
