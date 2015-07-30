package com.architecture.client.ui.account;

import com.architecture.client.activity.SignInActivity;
import com.architecture.shared.model.Account;
import com.google.gwt.user.client.ui.IsWidget;

public interface SignInView extends IsWidget {
	void setActivity(SignInActivity activity);

	void setAccountToSignIn(Account account);

	void resetLoginError();

	void resetPasswordError();
}
