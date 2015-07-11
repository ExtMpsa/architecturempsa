package com.architecture.client.exception;

import java.io.Serializable;

public class AttackHackingException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;
	private String message;
	
	public AttackHackingException(){}
	
	public AttackHackingException(String message){
		this.message = message;
	}

	public String getMessage() {
		return message;
	}
}
