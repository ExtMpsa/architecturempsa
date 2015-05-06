package com.architecture.client.ui;

import com.architecture.client.ClientFactoryImpl;
import com.architecture.client.ui.widget.BannerFlagViewImpl;
import com.architecture.client.ui.widget.BannerViewImpl;
import com.architecture.client.ui.widget.MenuViewImpl;
import com.google.gwt.user.client.ui.HasOneWidget;
import com.google.gwt.user.client.ui.IsWidget;

public interface ArchitectureView extends IsWidget, HasOneWidget {
	void setClientFactory(ClientFactoryImpl clientFactory);

	MenuViewImpl getMenu();

	BannerViewImpl getBanner();

	BannerFlagViewImpl getBannerFlag();
}
