package com.architecture.client.ui.account;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.activity.AccountParamsActivity;
import com.architecture.client.mvp.AppToken;
import com.architecture.client.resources.ResourcesAccount;
import com.architecture.client.resources.txt.AccountText;
import com.architecture.client.service.AccountService;
import com.architecture.client.service.AccountServiceAsync;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.storage.client.Storage;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.InlineLabel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;

public class AccountParamsViewImpl extends Composite implements AccountParamsView {

	private static AccountParamsViewImplUiBinder uiBinder = GWT.create(AccountParamsViewImplUiBinder.class);
	private static AccountServiceAsync service = GWT.create(AccountService.class);

	@UiField
	HTMLPanel wrapper;
	@UiField
	HTMLPanel content;
	@UiField
	HTMLPanel title;
	@UiField
	Label gtmIdLabel;
	@UiField
	TextBox gtmIdInput;
	@UiField
	Button saveGtm;
	@UiField
	InlineLabel gtmIdValue;
	@UiField
	Button editGtm;
	@UiField
	HTMLPanel gtm;

	AccountParamsActivity activity;
	AccountText accountText = GWT.create(AccountText.class);

	interface AccountParamsViewImplUiBinder extends UiBinder<Widget, AccountParamsViewImpl> {
	}

	public AccountParamsViewImpl() {
		ResourcesAccount.INSTANCE.cssAccountParameter().ensureInjected();
		initWidget(uiBinder.createAndBindUi(this));

		title.getElement().setInnerText(accountText.accountParameter());
		gtmIdLabel.setText(accountText.gtmId());
		gtmIdLabel.setTitle(accountText.gtmIdTitle());
		gtmIdInput.getElement().setAttribute("placeholder", accountText.placeholderGTM());
		editGtm.setText(accountText.edit());
		saveGtm.setText(accountText.save());
		if (ClientFactoryImpl.getInstance().isUserConnected()) {
			final Storage storage = Storage.getLocalStorageIfSupported();
			String mail = "";
			mail = storage.getItem("connected");
			if (!mail.equals("")) {
				service.getGtmId(mail, new AsyncCallback<String>() {
					@Override
					public void onSuccess(String result) {
						gtmIdValue.setText(result);
						gtmIdInput.setText(result);
						storage.setItem("gtm", result);
					}

					@Override
					public void onFailure(Throwable caught) {
						// TODO : afficher message d'erreur.
						String gtmId = storage.getItem("gtm");
						gtmIdValue.setText(gtmId);
						gtmIdInput.setText(gtmId);
					}
				});
			}
		}
		saveGtm.setVisible(false);
		gtmIdInput.setVisible(false);
	}

	@Override
	public void setActivity(AccountParamsActivity activity) {
		this.activity = activity;
	}

	@UiHandler("saveGtm")
	void onSaveGtmClick(ClickEvent event) {
		String gtmId = gtmIdInput.getText();
		if (activity.validateGtmIdClient(gtmId)) {
			saveGtm(gtmId);
		} else {
			Window.alert("Id GTM non valide.");
		}
	}

	@Override
	public void editGtm() {
		gtmIdInput.setVisible(true);
		gtmIdValue.setVisible(false);
		saveGtm.setVisible(true);
		editGtm.setVisible(false);
	}

	private void saveGtm(String gtmId) {
		Storage storage = Storage.getLocalStorageIfSupported();
		String mail = "";
		mail = storage.getItem("connected");
		if (!mail.equals("")) {
			service.saveGtm(gtmId, mail, new AsyncCallback<Void>() {

				@Override
				public void onSuccess(Void result) {
					// TODO :
					// injecter GTM et supprimer l'ancien.
					// Vérifier que le GTM est valide.
					Window.alert("Gtm bien enregistré");
				}

				@Override
				public void onFailure(Throwable caught) {
					// TODO :
					// Afficher un message d'erreur.
					Window.alert("GTM non enregistré. Server Error.");
					GWT.log("RPC Exception: " + caught.toString());
				}
			});
		}
	}

	@UiHandler("editGtm")
	void onEditGtmClick(ClickEvent event) {
		History.newItem(AppToken.ACCOUNTSETTINGEDITGTM.getToken());
	}
}
