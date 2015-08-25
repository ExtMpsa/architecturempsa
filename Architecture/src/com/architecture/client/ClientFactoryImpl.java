package com.architecture.client;

import java.util.HashMap;

import javax.validation.Validation;
import javax.validation.Validator;

import com.architecture.client.event.HomeEvent;
import com.architecture.client.event.HomeHandler;
import com.architecture.client.event.TrainingEvent;
import com.architecture.client.event.TrainingHandler;
import com.architecture.client.event.account.SignInEvent;
import com.architecture.client.event.account.SignInHandler;
import com.architecture.client.event.account.SignInSuccessEvent;
import com.architecture.client.event.account.SignInSuccessHandler;
import com.architecture.client.event.account.SignUpEvent;
import com.architecture.client.event.account.SignUpHandler;
import com.architecture.client.mvp.AppActivityMapper;
import com.architecture.client.mvp.AppPlaceHistoryMapper;
import com.architecture.client.place.HomePlace;
import com.architecture.client.service.AccountService;
import com.architecture.client.service.AccountServiceAsync;
import com.architecture.client.ui.ArchitectureView;
import com.architecture.client.ui.ArchitectureViewImpl;
import com.architecture.client.ui.HomeView;
import com.architecture.client.ui.HomeViewImpl;
import com.architecture.client.ui.TracingPaperView;
import com.architecture.client.ui.TracingPaperViewImpl;
import com.architecture.client.ui.account.SignInView;
import com.architecture.client.ui.account.SignInViewImpl;
import com.architecture.client.ui.composite.BannerLanguageViewImpl;
import com.architecture.client.ui.composite.BannerViewImpl;
import com.architecture.client.ui.composite.BreadCrumbViewImpl;
import com.architecture.client.ui.composite.NavigationViewImpl;
import com.architecture.shared.model.Account;
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
import com.google.gwt.storage.client.Storage;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.RootPanel;

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

	// Validator
	private static final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

	// Model
	private Account accountToCreate;
	private Account accountToSignIn;
	HashMap<String, String> mailAlreadyChecked = new HashMap<String, String>();

	// Services
	private static AccountServiceAsync accountService = GWT.create(AccountService.class);

	// Views
	private static ArchitectureView architectureView;
	private static HomeView homeView;
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
		// Set up for Activities and Place
		activityManager.setDisplay(appWidget);

		// tell the historyMapper there are tokenizers (below) to use in here.
		historyMapper.setFactory(this);

		// Start PlaceHistoryHandler with our PlaceHistoryMapper
		historyHandler.register(placeController, eventBus, defaultPlace);
		Document.get().getElementById("loader").removeFromParent();
		RootPanel.get().add(appWidget);

		// Event
		bindBeforeLoadingPlace();

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
		bindAfterLoadingPlace();
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

	private void initGoogleTagManager(String gtmId) {
		setGtmVars();

		Document doc = Document.get();
		ScriptElement script = doc.createScriptElement();
		script.setSrc("//www.googletagmanager.com/gtm.js?id=" + gtmId);
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

	// Initialisation du compteur pour calculer le temps d'affichage d'une page Ajax.
	public static native void resetStartTime() /*-{
		$wnd["startTime"] = new Date().getTime();
	}-*/;

	@Override
	public EventBus getEventBus() {
		return eventBus;
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
	public BannerViewImpl getBannerView() {
		return appWidget.getBanner();
	}

	@Override
	public BannerLanguageViewImpl getLanguageView() {
		return appWidget.getLanguageView();
	}

	@Override
	public NavigationViewImpl getNavigationView() {
		return appWidget.getNavigationView();
	}

	@Override
	public BreadCrumbViewImpl getBreadCrumbView() {
		return appWidget.getBreadCrumbView();
	}

	@Override
	public HomeView getHomeView() {
		if (homeView == null) {
			homeView = new HomeViewImpl();
		}
		return homeView;
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
		return appWidget;
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
	public Account getAccountToCreate() {
		return accountToCreate;
	}

	@Override
	public void setAccountToCreate(Account account) {
		accountToCreate = account;
	}

	@Override
	public Account getAccountToSignIn() {
		return accountToSignIn;
	}

	@Override
	public void setAccountToSignIn(Account accountToSignIn) {
		this.accountToSignIn = accountToSignIn;
	}

	@Override
	public HashMap<String, String> getMailAlreadyChecked() {
		return mailAlreadyChecked;
	}

	@Override
	public void setMailAlreadyChecked(HashMap<String, String> mailAlreadyChecked) {
		this.mailAlreadyChecked = mailAlreadyChecked;
	}

	// Bind
	private void bindBeforeLoadingPlace() {
		eventBus.addHandler(TrainingEvent.TYPE, new TrainingHandler() {

			@Override
			public void onTraining(TrainingEvent event) {
				getNavigationView().selected("Training");
				getBreadCrumbView().setTraining();
			}
		});

		eventBus.addHandler(HomeEvent.TYPE, new HomeHandler() {

			@Override
			public void onHome(HomeEvent event) {
				getNavigationView().selected("");
				getBreadCrumbView().setDigitalPerformanceTraining();
			}
		});

		eventBus.addHandler(SignInEvent.TYPE, new SignInHandler() {

			@Override
			public void onSignIn(SignInEvent event) {
				getNavigationView().selected("SignIn");
				getBreadCrumbView().setSignIn();
			}
		});

		eventBus.addHandler(SignUpEvent.TYPE, new SignUpHandler() {

			@Override
			public void onSignUp(SignUpEvent event) {
				getNavigationView().selected("SignUp");
				switch (event.getStep()) {
				case "login":
					getBreadCrumbView().setSignUp("login");
					break;
				case "password":
					getBreadCrumbView().setSignUp("password");
					break;
				case "passwordVerify":
					getBreadCrumbView().setSignUp("passwordVerify");
					break;
				default:
					getBreadCrumbView().setSignUp();
					break;
				}

			}
		});
	}

	// Bind
	private void bindAfterLoadingPlace() {
		onMouseMoveHandlerForGtm = RootPanel.get().addDomHandler(new MouseMoveHandler() {
			@Override
			public void onMouseMove(MouseMoveEvent event) {
				initGoogleTagManager("GTM-PJ7D96");
				onMouseMoveHandlerForGtm.removeHandler();
			}
		}, MouseMoveEvent.getType());

		// Logique lorsque l'url change
		eventBus.addHandler(PlaceChangeEvent.TYPE, new PlaceChangeEvent.Handler() {

			@Override
			public void onPlaceChange(PlaceChangeEvent event) {
				if (!redirect) {
					pushUpdateVirtualPath();
				}
				redirect = false;
			}
		});

		eventBus.addHandler(SignInSuccessEvent.TYPE, new SignInSuccessHandler() {

			@Override
			public void onSignInSuccess(SignInSuccessEvent event) {
				boolean isUserConnected = getNavigationView().isUserConnected();
				getNavigationView().connected(isUserConnected);
				Storage storage = Storage.getLocalStorageIfSupported();
				String mail = "";
				mail = storage.getItem("connected");
				accountService.getGtmId(mail, new AsyncCallback<String>() {

					@Override
					public void onSuccess(String result) {
						if (!result.equals("")) {
							initGoogleTagManager(result);
							History.newItem("");
						} else {
							History.newItem("!AccountParameter:");
						}

					}

					@Override
					public void onFailure(Throwable caught) {
						// TODO : Gérer les cas d'échec
						Window.alert("TODO : manage Server Error");
					}
				});
			}
		});
	}

	private SignInSuccessHandler SignInSuccessHandler() {
		return null;
	}
}
