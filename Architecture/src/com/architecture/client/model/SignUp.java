package com.architecture.client.model;

import java.util.ArrayList;

public class SignUp {
	String mailToRegister;
	String passwordToRegister;
	String lastMailRegistered;
	ArrayList<String> mailAlreadyRegistered = new ArrayList<String>();

	public boolean alreadyRegisteredMail(String mail) {
		return mailAlreadyRegistered.contains(mail.toLowerCase());
	}

	public void addRegisteredMail(String mail) {
		mailAlreadyRegistered.add(mail);
	}

	public String getMailToRegister() {
		return mailToRegister;
	}

	public void setMailToRegister(String mailToRegister) {
		this.mailToRegister = mailToRegister;
	}

	public String getPasswordToRegister() {
		return passwordToRegister;
	}

	public void setPasswordToRegister(String passwordToRegister) {
		this.passwordToRegister = passwordToRegister;
	}

	public String getLastMailRegistered() {
		return lastMailRegistered;
	}

	public void setLastMailRegistered(String lastMailRegistered) {
		this.lastMailRegistered = lastMailRegistered;
	}

	public void resetMailToRegister() {
		mailToRegister = null;
		passwordToRegister = null;
	}
}
