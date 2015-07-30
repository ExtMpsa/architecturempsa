package com.architecture.client.ui.account;

import com.architecture.client.activity.SignUpActivity;
import com.architecture.shared.model.Account;
import com.google.gwt.user.client.ui.IsWidget;

public interface SignUpView extends IsWidget {
	void setActivity(SignUpActivity activity);

	void setAccount(Account account);
}
