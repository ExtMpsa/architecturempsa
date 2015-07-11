package com.architecture.client.exception;

import java.io.Serializable;

public class MailAlreadyUsedException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;
	private String message;
	
	public MailAlreadyUsedException(){}
	
	public MailAlreadyUsedException(String message){
		this.message = message;
	}

	public String getMessage() {
		return message;
	}
}
