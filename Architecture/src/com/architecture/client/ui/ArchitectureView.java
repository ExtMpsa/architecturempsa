package com.architecture.client.ui;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.ui.composite.BannerLanguageViewImpl;
import com.architecture.client.ui.composite.BannerViewImpl;
import com.google.gwt.user.client.ui.HasOneWidget;
import com.google.gwt.user.client.ui.IsWidget;

public interface ArchitectureView extends IsWidget, HasOneWidget {
	void setClientFactory(ClientFactoryImpl clientFactory);

	BannerViewImpl getBanner();

	BannerLanguageViewImpl getBannerFlag();
}
