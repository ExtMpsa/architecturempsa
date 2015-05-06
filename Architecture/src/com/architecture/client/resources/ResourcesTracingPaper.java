package com.architecture.client.resources;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.CssResource.NotStrict;
import com.google.gwt.resources.client.ImageResource;

public interface ResourcesTracingPaper extends ClientBundle {
	public static final ResourcesTracingPaper INSTANCE = GWT.create(ResourcesTracingPaper.class);

	@NotStrict
	@Source("css/TracingPaper.css")
	Style css();

	@Source("images/Calque_C3_Fond_web.png")
	ImageResource c3_background_calque();

	@Source("images/Calque_C3_TextePromo_web.png")
	ImageResource c3_text_calque();

	@Source("images/Calque_C3_Nom_web.png")
	ImageResource c3_name_calque();

	@Source("images/Calque_C3_Prix_web.png")
	ImageResource c3_price_calque();

	@Source("images/Calque_C3_Car_web.png")
	ImageResource c3_car_calque();

	@Source("images/Calque_C3P_Fond_web.png")
	ImageResource c3p_background_calque();

	@Source("images/Calque_C3P_TextePromo_web.png")
	ImageResource c3p_text_calque();

	@Source("images/Calque_C3P_Nom_web.png")
	ImageResource c3p_name_calque();

	@Source("images/Calque_C3P_Prix_web.png")
	ImageResource c3p_price_calque();

	@Source("images/Calque_C3P_Car_web.png")
	ImageResource c3p_car_calque();

	@Source("images/Calque_C4_Fond_web.png")
	ImageResource c4_background_calque();

	@Source("images/Calque_C4_TextePromo_web.png")
	ImageResource c4_text_calque();

	@Source("images/Calque_C4_Nom_web.png")
	ImageResource c4_name_calque();

	@Source("images/Calque_C4_Prix_web.png")
	ImageResource c4_price_calque();

	@Source("images/Calque_C4_Car_web.png")
	ImageResource c4_car_calque();

	@Source("images/Calque_Mountain_Fond_web.png")
	ImageResource background_calque_mountain();

	@Source("images/Calque_NYC_Fond_web.png")
	ImageResource background_calque_NYC();

	public interface Style extends CssResource {
		String c3_background_calque();

		String c3_text_calque();

		String c3_name_calque();

		String c3_price_calque();

		String c3_car_calque();

		String c3p_background_calque();

		String c3p_text_calque();

		String c3p_name_calque();

		String c3p_price_calque();

		String c3p_car_calque();

		String c4_background_calque();

		String c4_text_calque();

		String c4_name_calque();

		String c4_price_calque();

		String c4_car_calque();

		String background_calque_mountain();

		String background_calque_NYC();
	}
}
