package com.architecture.client.ui.account;

import com.architecture.client.activity.AccountParamsActivity;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

public class AccountParamsViewImpl extends Composite implements AccountParamsView {

	private static AccountParamsViewImplUiBinder uiBinder = GWT.create(AccountParamsViewImplUiBinder.class);

	AccountParamsActivity activity;

	interface AccountParamsViewImplUiBinder extends UiBinder<Widget, AccountParamsViewImpl> {
	}

	public AccountParamsViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public void setActivity(AccountParamsActivity activity) {
		this.activity = activity;
	}

}
