package com.architecture.client.resources.txt;

import com.google.gwt.i18n.client.Constants;

public interface AccountText extends Constants {
	String title();

	String placeholderMail();

	String next();

	String invalidMail();

	String placeholderPassword();

	String invalidPassword();

	String passwordVerify();

	String placeholderPasswordVerify();

	String passwordVerifyError();

	String create();

	String errorSizeMinPassword();

	String errorSizeMaxPassword();

	String errorDigitPassword();

	String errorLowercasePassword();

	String errorUppercasePassword();

	String errorSpecialPassword();

	String errorWhiteSpace();
}
