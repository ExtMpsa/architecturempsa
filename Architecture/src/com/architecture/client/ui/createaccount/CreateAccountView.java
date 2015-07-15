package com.architecture.client.ui.createaccount;

import com.architecture.client.activity.CreateAccountActivity;
import com.architecture.shared.model.Account;
import com.google.gwt.user.client.ui.IsWidget;

public interface CreateAccountView extends IsWidget {
	void setActivity(CreateAccountActivity activity);

	void setAccount(Account account);
}
