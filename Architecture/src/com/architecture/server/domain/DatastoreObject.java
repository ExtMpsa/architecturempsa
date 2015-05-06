package com.architecture.server.domain;

import javax.persistence.PrePersist;

public class DatastoreObject {
	private Long id;
	private Integer version = 0;

	/**
	 * Auto-increment version # whenever persisted
	 */
	@PrePersist
	void onPersist() {
		this.version++;
	}

	public Integer getVersion() {
		return version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	/**
	 * @category Accessor
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @category Accessor
	 * @param id
	 *            the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}
}
