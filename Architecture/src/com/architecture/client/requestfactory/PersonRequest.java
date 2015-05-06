package com.architecture.client.requestfactory;

import com.architecture.server.DaoLocator;
import com.architecture.server.PersonDao;
import com.architecture.shared.proxy.PersonProxy;
import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.Service;

@Service(value = PersonDao.class, locator = DaoLocator.class)
public interface PersonRequest extends RequestContext {
	Request<Void> deleteAsync(String mail);

	Request<Void> deleteSync(String mail);

	Request<PersonProxy> findByMail(String mail);

	Request<Void> saveAsync(PersonProxy person);

	Request<Void> saveSync(PersonProxy person);
}
