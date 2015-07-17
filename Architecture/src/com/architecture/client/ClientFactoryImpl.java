package com.architecture.client;

import javax.validation.Validation;
import javax.validation.Validator;

import com.architecture.client.event.ModifySignStep1Event;
import com.architecture.client.event.ModifySignStep1Handler;
import com.architecture.client.event.ValidateSignStep1Event;
import com.architecture.client.event.ValidateSignStep1Handler;
import com.architecture.client.event.ValidateSignStep2Event;
import com.architecture.client.event.ValidateSignStep2Handler;
import com.architecture.client.mvp.AppActivityMapper;
import com.architecture.client.mvp.AppPlaceHistoryMapper;
import com.architecture.client.place.FormsPlace;
import com.architecture.client.place.HomePlace;
import com.architecture.client.requestfactory.ArchitectureRequestFactory;
import com.architecture.client.requestfactory.PersonRequest;
import com.architecture.client.ui.ArchitectureView;
import com.architecture.client.ui.ArchitectureViewImpl;
import com.architecture.client.ui.FormsView;
import com.architecture.client.ui.FormsViewImpl;
import com.architecture.client.ui.HomeView;
import com.architecture.client.ui.HomeViewImpl;
import com.architecture.client.ui.SignInView;
import com.architecture.client.ui.SignInViewImpl;
import com.architecture.client.ui.TracingPaperView;
import com.architecture.client.ui.TracingPaperViewImpl;
import com.architecture.client.ui.composite.BannerLanguageViewImpl;
import com.architecture.client.ui.composite.BannerViewImpl;
import com.architecture.client.ui.composite.MenuViewImpl;
import com.architecture.shared.model.Account;
import com.architecture.shared.proxy.PersonProxy;
import com.google.gwt.activity.shared.ActivityManager;
import com.google.gwt.activity.shared.ActivityMapper;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.NodeList;
import com.google.gwt.dom.client.ScriptElement;
import com.google.gwt.event.dom.client.MouseMoveEvent;
import com.google.gwt.event.dom.client.MouseMoveHandler;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.i18n.client.LocaleInfo;
import com.google.gwt.place.shared.Place;
import com.google.gwt.place.shared.PlaceChangeEvent;
import com.google.gwt.place.shared.PlaceController;
import com.google.gwt.place.shared.PlaceHistoryHandler;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.RequestTransport;

public class ClientFactoryImpl implements ClientFactory {
	// Specific for Activities and Place with ClientFactory
	private static final EventBus eventBus = new SimpleEventBus();
	@SuppressWarnings("deprecation")
	private static final PlaceController placeController = new PlaceController(eventBus);
	// private SimplePanel appWidget = new SimplePanel();
	private ArchitectureView appWidget = new ArchitectureViewImpl();
	private Place defaultPlace = new HomePlace();
	private ActivityMapper activityMapper = new AppActivityMapper(this);
	private ActivityManager activityManager = new ActivityManager(activityMapper, eventBus);
	private AppPlaceHistoryMapper historyMapper = GWT.create(AppPlaceHistoryMapper.class);
	private PlaceHistoryHandler historyHandler = new PlaceHistoryHandler(historyMapper);

	// RequestFactory
	// Transport for intercept request and implement cursor wait
	private static final RequestTransport transport = new ArchitectureRequestTransport();
	private static final ArchitectureRequestFactory requestFactory = GWT.create(ArchitectureRequestFactory.class);

	// Validator
	private static final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

	// Model
	private Account accountToCreate;

	// Views
	private static ArchitectureView architectureView;
	private static HomeView homeView;
	private static FormsView formsView;
	private static TracingPaperView tracingPaperView;
	private static SignInView signInView;

	// Etat du chargement de l'application
	private static boolean loaded = false;

	// Handler d'ajout de GTM
	HandlerRegistration onMouseMoveHandlerForGtm;

	// Boolean pour la gestion des push lors des redirects
	public static boolean redirect = false;
	public static boolean redirectFirstLoad = false;

	/** Constructeur privé */
	@SuppressWarnings("deprecation")
	private ClientFactoryImpl() {
		// initGoogleTagManager();
		// Set up for Requestfactory
		// For use RequestFactory in activities and place we have to initialise it before.
		requestFactory.initialize(eventBus, transport);

		// Set up for Activities and Place
		activityManager.setDisplay(appWidget);

		// tell the historyMapper there are tokenizers (below) to use in here.
		historyMapper.setFactory(this);

		// Start PlaceHistoryHandler with our PlaceHistoryMapper
		historyHandler.register(placeController, eventBus, defaultPlace);
		Document.get().getElementById("loader").removeFromParent();
		RootPanel.get().add(appWidget);

		// Goes to the place represented on URL else default place
		historyHandler.handleCurrentHistory();

		// SEO
		String locale = LocaleInfo.getCurrentLocale().getLocaleName();
		if (locale.equals("default")) {
			RootPanel.getBodyElement().getParentElement().setLang("en");
		} else {
			RootPanel.getBodyElement().getParentElement().setLang(locale);
		}

		// Event
		bind();
	}

	/** Holder */
	private static class ClientFactoryImplHolder {
		/** Instance unique non préinitialisée */
		private final static ClientFactoryImpl instance = new ClientFactoryImpl();
	}

	/** Point d'accès pour l'instance unique du singleton */
	public static ClientFactoryImpl getInstance() {
		return ClientFactoryImplHolder.instance;
	}

	private void initGoogleTagManager() {
		setGtmVars();

		Document doc = Document.get();
		ScriptElement script = doc.createScriptElement();
		script.setSrc("//www.googletagmanager.com/gtm.js?id=" + "GTM-PJ7D96");
		script.setType("text/javascript");
		script.setLang("javascript");
		script.setAttribute("async", "true");
		doc.getBody().appendChild(script);

		NodeList<Element> headElement = doc.getElementsByTagName("script");
		Element firstScript = headElement.getItem(0);

		insertGtm(script, firstScript);
	}

	private static native void setGtmVars() /*-{
		$wnd["dataLayer"] = $wnd["dataLayer"] || [];
		$wnd.dataLayer.push({
			'gtm.start' : new Date().getTime(),
			event : 'gtm.js'
		});
	}-*/;

	private static native void insertGtm(ScriptElement j, Element f) /*-{
		f.parentNode.insertBefore(j, f);
	}-*/;

	@Override
	public void eventGtm(String description, String launcher) {
		if (ClientFactoryImpl.isLoaded() && !redirectFirstLoad) {
			pushTimeAjax(description, launcher);
		} else {
			pushTimeStatic(description, launcher);
		}
	}

	// Calcul du temps d'affichage d'une page en Ajax à partir d'une action utilisateur ou de l'application lors de son chargement complet.
	private native void pushTimeAjax(String description, String launcher) /*-{
		try {
			$wnd["startTime"] = $wnd["startTime"] || new Date().getTime();
			$wnd["elapsedTime"] = new Date().getTime() - $wnd.startTime;
			$wnd["elapsedActivityTime"] = new Date().getTime()
					- $wnd.getActivityStartTime;
			$wnd.dataLayer.push({
				description : description,
				launcher : launcher,
				elapsedTimeSinceGetActivity : $wnd.elapsedActivityTime,
				elapsedTimeSinceUserAction : $wnd.elapsedTime
			});
		} catch (e) {
			$wnd.dataLayer.push({
				event : launcher
			});
		}
	}-*/;

	// Calcul du temps d'affichage de la première page lors du chargement complet de l'application.
	private native void pushTimeStatic(String description, String launcher) /*-{
		try {
			$wnd["elapsedTime"] = new Date().getTime()
					- $wnd.performance.timing.connectStart;
			$wnd.dataLayer
					.push({
						description : description,
						descriptionTechnique : "Temps écoulé entre window.performance.timing.connectStart et ce push",
						launcher : launcher,
						elapsedTimeSinceGetActivity : new Date().getTime()
								- $wnd.getActivityStartTime,
						elapsedTimeSinceUserAction : $wnd.elapsedTime
					});
		} catch (e) {
			$wnd.dataLayer.push({
				event : launcher,
			});
		}
	}-*/;

	private native void pushUpdateVirtualPath() /*-{
		try {
			$wnd["dataLayer"] = $wnd["dataLayer"] || [];
			$wnd.dataLayer.push({
				event : "updatevirtualpath",
				elapsedTimeSinceUserAction : new Date().getTime()
						- $wnd.startTime,
				elapsedTimeSinceGetActivity : new Date().getTime()
						- $wnd.getActivityStartTime,
				lastAjaxUrl : $wnd["lastAjaxUrl"]
			});
		} catch (e) {
			$wnd.dataLayer.push({
				event : launcher,
			});
		}
	}-*/;

	public static void pushTimeRTD() {
		double random = Math.random() * 100;
		double random2 = Math.random() * 100;
		if (random < 80) {
			if (AppActivityMapper.getRandom() < 30) {
				pushRealTimeRTD(random);
				if (random2 < 30) {
					pushCustomisedZone1();
					pushCustomisedPage();
				} else if (random2 < 60) {
					pushCustomisedZone1();
					pushCustomisedZone2();
					pushCustomisedPage();
				} else {
					pushNoCustomisedPage();
				}
			} else if (random < 60) {
				pushNonRealTimeRTD(random);
				if (random2 < 30) {
					pushCustomisedZone1();
					pushCustomisedPage();
				} else if (random2 < 60) {
					pushCustomisedZone1();
					pushCustomisedZone2();
					pushCustomisedPage();
				} else {
					pushNoCustomisedPage();
				}
			} else {
				pushOnlyRTD(random);
				if (random2 < 30) {
					pushCustomisedZone1();
					pushCustomisedPage();
				} else if (random2 < 60) {
					pushCustomisedZone1();
					pushCustomisedZone2();
					pushCustomisedPage();
				} else {
					pushNoCustomisedPage();
				}
			}
		} else {
			pushWithoutRTD(random);
			pushNoCustomisedPageError();
		}
	}

	public static native void pushRealTimeRTD(double time) /*-{
		$wnd["rtdTime"] = time;
		$wnd.dataLayer
				.push({
					event : "time",
					timeUser : $wnd["dmpTime"],
					categoryTimeUser : "DDM",
					variableTimeUser : "Data Management Plateform",
					useCase : $wnd["useCase"],
					labelTimeUser : "Temps mis par la DMP pour mettre à disposition les segments cross domain temps réel au moteur de personnalisation.",
					dateDDM : $wnd["dateDDM"],
					dmpTime : $wnd["dmpTime"],
					rtdTime : $wnd["rtdTime"]
				});
		$wnd.dataLayer
				.push({
					event : "time",
					timeUser : $wnd["rtdTime"],
					categoryTimeUser : "DDM",
					variableTimeUser : "Moteur de Personnalisation",
					useCase : $wnd["useCase"],
					labelTimeUser : "Augmentation du temps (en ms) d'affichage de la page liée à la personnalisation (DDM)",
					dateDDM : $wnd["dateDDM"],
					dmpTime : $wnd["dmpTime"],
					rtdTime : $wnd["rtdTime"]
				});
	}-*/;

	public static native void pushNonRealTimeRTD(double time) /*-{
		$wnd["rtdTime"] = time;
		$wnd.dataLayer
				.push({
					event : "time",
					timeUser : $wnd["dmpTime"],
					categoryTimeUser : "DDM",
					variableTimeUser : "Data Management Plateform",
					useCase : $wnd["useCase"],
					labelTimeUser : "Temps mis par la DMP pour mettre à disposition les segments cross domain temps réel au moteur de personnalisation.",
					dateDDM : $wnd["dateDDM"],
					dmpTime : $wnd["dmpTime"],
					rtdTime : $wnd["rtdTime"]
				});
		$wnd.dataLayer
				.push({
					event : "time",
					timeUser : $wnd["rtdTime"],
					categoryTimeUser : "DDM",
					variableTimeUser : "Moteur de Personnalisation",
					useCase : $wnd["useCase"],
					labelTimeUser : "Augmentation du temps (en ms) d'affichage de la page liée à la personnalisation (DDM)",
					dateDDM : $wnd["dateDDM"],
					dmpTime : $wnd["dmpTime"],
					rtdTime : $wnd["rtdTime"]
				});
	}-*/;

	public static native void pushOnlyRTD(double time) /*-{
		$wnd["rtdTime"] = time;
		$wnd.dataLayer
				.push({
					event : "time",
					timeUser : $wnd["dmpTime"],
					categoryTimeUser : "DDM",
					variableTimeUser : "Data Management Plateform",
					useCase : $wnd["useCase"],
					labelTimeUser : "Temps mis par la DMP pour mettre à disposition les segments cross domain temps réel au moteur de personnalisation.",
					dateDDM : $wnd["dateDDM"],
					dmpTime : $wnd["dmpTime"],
					rtdTime : $wnd["rtdTime"]
				});
		$wnd.dataLayer
				.push({
					event : "time",
					timeUser : $wnd["rtdTime"],
					categoryTimeUser : "DDM",
					variableTimeUser : "Moteur de Personnalisation",
					useCase : $wnd["useCase"],
					labelTimeUser : "Augmentation du temps (en ms) d'affichage de la page liée à la personnalisation (DDM)",
					dateDDM : $wnd["dateDDM"],
					dmpTime : $wnd["dmpTime"],
					rtdTime : $wnd["rtdTime"]
				});
	}-*/;

	public static native void pushWithoutRTD(double time) /*-{
		$wnd["rtdTime"] = time;
		$wnd["useCase"] = "Non personnalisé car pas de réponse du Moteur de Personnalisation";
		$wnd.dataLayer
				.push({
					event : "time",
					timeUser : $wnd["dmpTime"],
					categoryTimeUser : "DDM",
					variableTimeUser : "Data Management Plateform",
					useCase : $wnd["useCase"],
					labelTimeUser : "Temps mis par la DMP pour mettre à disposition les segments cross domain temps réel au moteur de personnalisation.",
					dateDDM : $wnd["dateDDM"],
					dmpTime : $wnd["dmpTime"],
					rtdTime : $wnd["rtdTime"]
				});
		$wnd.dataLayer
				.push({
					event : "time",
					timeUser : $wnd["rtdTime"],
					categoryTimeUser : "DDM",
					variableTimeUser : "Moteur de Personnalisation",
					useCase : $wnd["useCase"],
					labelTimeUser : "Augmentation du temps (en ms) d'affichage de la page liée à la personnalisation (DDM)",
					dateDDM : $wnd["dateDDM"],
					dmpTime : $wnd["dmpTime"],
					rtdTime : $wnd["rtdTime"]
				});
	}-*/;

	// Personnalisation d'une zone 1
	public static native void pushCustomisedZone1() /*-{
		$wnd.dataLayer.push({
			event : "nievent",
			eventCategory : "DDM",
			eventAction : "Customised Zone",
			eventLabel : "Personnalisation de la zone 1",
		});
	}-*/;

	// Personnalisation d'une zone 2
	public static native void pushCustomisedZone2() /*-{
		$wnd.dataLayer.push({
			event : "nievent",
			eventCategory : "DDM",
			eventAction : "Customised Zone",
			eventLabel : "Personnalisation de la zone 2",
		});
	}-*/;

	// Personnalisation d'une page
	public static native void pushCustomisedPage() /*-{
		$wnd.dataLayer.push({
			event : "nievent",
			eventCategory : "DDM",
			eventAction : "Customised Page Called",
			eventLabel : "Page personnalisée",
		});
	}-*/;

	// Pas de personnalisation de la page
	public static native void pushNoCustomisedPage() /*-{
		$wnd.dataLayer.push({
			event : "nievent",
			eventCategory : "DDM",
			eventAction : "Customised Page Called",
			eventLabel : "Page non personnalisée (pas d'offre elligible)",
		});
	}-*/;

	// Pas de personnalisation de la page
	public static native void pushNoCustomisedPageError() /*-{
		$wnd.dataLayer
				.push({
					event : "nievent",
					eventCategory : "DDM",
					eventAction : "Customised Page Called",
					eventLabel : "Page non personnalisée (erreur Moteur de Personnalisation)",
				});
	}-*/;

	// Initialisation du compteur pour calculer le temps d'affichage d'une page Ajax.
	public static native void resetStartTime() /*-{
		$wnd["startTime"] = new Date().getTime();
	}-*/;

	@Override
	public EventBus getEventBus() {
		return eventBus;
	}

	@Override
	public ArchitectureRequestFactory getArchitectureRequestFactory() {
		return requestFactory;
	}

	@Override
	public PlaceController getPlaceController() {
		return placeController;
	}

	@Override
	public Validator getValidator() {
		return validator;
	}

	/*
	 * Views
	 */
	@Override
	public HomeView getHomeView() {
		if (homeView == null) {
			homeView = new HomeViewImpl();
		}
		return homeView;
	}

	@Override
	public MenuViewImpl getMenuView() {
		return appWidget.getMenu();
	}

	@Override
	public BannerViewImpl getBannerView() {
		return appWidget.getBanner();
	}

	@Override
	public BannerLanguageViewImpl getBannerFlagView() {
		return appWidget.getBannerFlag();
	}

	@Override
	public FormsView getFormsView() {
		if (formsView == null) {
			formsView = new FormsViewImpl();
		}
		return formsView;
	}

	@Override
	public TracingPaperView getTracingPaperView() {
		if (tracingPaperView == null) {
			tracingPaperView = new TracingPaperViewImpl();
		}
		return tracingPaperView;
	}

	@Override
	public ArchitectureView getArchitectureView() {
		if (architectureView == null) {
			architectureView = new ArchitectureViewImpl();
		}
		return architectureView;
	}

	@Override
	public SignInView getSignInView() {
		if (signInView == null) {
			signInView = new SignInViewImpl();
		}
		return signInView;
	}

	public static boolean isLoaded() {
		return loaded;
	}

	public static void setLoaded(boolean loaded) {
		ClientFactoryImpl.loaded = loaded;
	}

	// Model
	@Override
	public Account getAccount() {
		return accountToCreate;
	}

	@Override
	public void setAccount(Account account) {
		this.accountToCreate = account;
	}

	// Bind
	private void bind() {
		onMouseMoveHandlerForGtm = RootPanel.get().addDomHandler(new MouseMoveHandler() {
			@Override
			public void onMouseMove(MouseMoveEvent event) {
				initGoogleTagManager();
				onMouseMoveHandlerForGtm.removeHandler();
			}
		}, MouseMoveEvent.getType());

		// Logique lorsque l'url change
		eventBus.addHandler(PlaceChangeEvent.TYPE, new PlaceChangeEvent.Handler() {

			@Override
			public void onPlaceChange(PlaceChangeEvent event) {
				if (!redirect) {
					pushTimeRTD();
					pushUpdateVirtualPath();
				}
				redirect = false;
			}
		});

		eventBus.addHandler(ValidateSignStep1Event.TYPE, new ValidateSignStep1Handler() {
			@Override
			public void onValidateStep1(ValidateSignStep1Event event) {
				Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
				if (current instanceof FormsPlace) {
					if (((FormsPlace) current).getFormsName().equals("")) {
						ClientFactoryImpl.getInstance().getFormsView().setStep("step2", true);
					} else {
						ClientFactoryImpl.getInstance().getPlaceController().goTo(new FormsPlace("step2"));
					}
				}
			}
		});

		eventBus.addHandler(ModifySignStep1Event.TYPE, new ModifySignStep1Handler() {
			@Override
			public void onModifyStep1(ModifySignStep1Event event) {
				Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
				if (current instanceof FormsPlace) {
					if (((FormsPlace) current).getFormsName().equals("")) {
						ClientFactoryImpl.getInstance().getFormsView().setStep("step1", true);
					} else {
						ClientFactoryImpl.getInstance().getPlaceController().goTo(new FormsPlace("step1"));
					}
				}
			}
		});

		eventBus.addHandler(ValidateSignStep2Event.TYPE, new ValidateSignStep2Handler() {
			@Override
			public void onValidateStep2(ValidateSignStep2Event event) {
				Place current = ClientFactoryImpl.getInstance().getPlaceController().getWhere();
				if (current instanceof FormsPlace) {
					PersonRequest context = ClientFactoryImpl.getInstance().getArchitectureRequestFactory().getPersonRequest();
					PersonProxy person = context.create(PersonProxy.class);

					person.setDepartment(getFormsView().getPsaEntityValue().getValue());
					person.setEmail(getFormsView().getMailValue().getValue());
					person.setFirstName(getFormsView().getFirstNameValue().getValue());
					person.setLastName(getFormsView().getNameValue().getValue());
					if (((FormsPlace) current).getFormsName().equals("")) {
						context.saveAsync(person).fire(new Receiver<Void>() {

							@Override
							public void onSuccess(Void response) {
								ClientFactoryImpl.getInstance().getFormsView().setStep("signSuccess", true);
							}
						});
					} else {
						context.saveAsync(person).fire(new Receiver<Void>() {

							@Override
							public void onSuccess(Void response) {
								ClientFactoryImpl.getInstance().getPlaceController().goTo(new FormsPlace("signSuccess"));
							}
						});

					}
				}
			}
		});
	}
}
