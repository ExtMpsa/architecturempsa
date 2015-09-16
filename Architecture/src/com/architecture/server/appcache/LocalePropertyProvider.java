package com.architecture.server.appcache;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import com.googlecode.mgwt.linker.server.propertyprovider.PropertyProviderBaseImpl;
import com.googlecode.mgwt.linker.server.propertyprovider.PropertyProviderException;

public class LocalePropertyProvider extends PropertyProviderBaseImpl {
	private static final long serialVersionUID = 2187082486368116532L;
	private final static Logger LOGGER = Logger.getLogger(LocalePropertyProvider.class.getName());

	@Override
	public String getPropertyName() {
		return "locale";
	}

	@Override
	public String getPropertyValue(HttpServletRequest req) throws PropertyProviderException {
		Locale locale = req.getLocale();
		Cookie[] cookies = req.getCookies();
		Set<Cookie> cookieSet = new HashSet<Cookie>(Arrays.asList(cookies));
		cookieSet.contains(new Cookie("locale", "fr"));

		LOGGER.log(Level.INFO, "req.getLocale() = " + req.getLocale().toLanguageTag());
		LOGGER.log(Level.INFO, "cookieSet.toString() = " + cookieSet.toString());

		if (cookieSet != null) {
			for (Cookie current : cookieSet) {
				if (current.getName().contains("locale")) {
					if (current.getValue().contains("default")) {
						return "default";
					}

					if (current.getValue().contains("fr")) {
						return "fr";
					}

					if (current.getValue().contains("en")) {
						return "en";
					}
				}
			}
		}

		LOGGER.log(Level.INFO, "cookie not used");

		if (locale != null) {
			if (locale.toLanguageTag().contains("defaut")) {
				return "defaut";
			}

			if (locale.toLanguageTag().contains("fr")) {
				return "fr";
			}

			if (locale.toLanguageTag().contains("en")) {
				return "en";
			}
		}

		throw new PropertyProviderException("Can not find language property for locale: '" + locale + "'");

	}
}
