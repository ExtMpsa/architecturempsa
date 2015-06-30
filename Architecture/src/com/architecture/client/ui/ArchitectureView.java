package com.architecture.client.ui;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.ui.composite.BannerLanguageViewImpl;
import com.architecture.client.ui.composite.BannerViewImpl;
import com.architecture.client.ui.composite.MenuViewImpl;
import com.google.gwt.user.client.ui.HasOneWidget;
import com.google.gwt.user.client.ui.IsWidget;

public interface ArchitectureView extends IsWidget, HasOneWidget {
	void setClientFactory(ClientFactoryImpl clientFactory);

	MenuViewImpl getMenu();

	BannerViewImpl getBanner();

	BannerLanguageViewImpl getBannerFlag();
}
