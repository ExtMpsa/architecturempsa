package com.architecture.linker;

import java.util.SortedSet;
import java.util.TreeSet;

import javax.annotation.Nonnull;

import com.google.gwt.core.ext.TreeLogger;
import com.google.gwt.core.ext.UnableToCompleteException;
import com.google.gwt.core.ext.linker.ConfigurationProperty;
import com.google.gwt.core.ext.linker.SelectionProperty;

final class TestSelectionProperty implements SelectionProperty, Comparable<Object> {
	private final String _name;
	private final boolean _derived;

	TestSelectionProperty(final String name, final boolean derived) {
		_name = name;
		_derived = derived;
	}

	@Override
	public String getFallbackValue() {
		return null;
	}

	@Override
	public String getName() {
		return _name;
	}

	@Override
	public int compareTo(@Nonnull final Object o) {
		return _name.compareTo(((TestSelectionProperty) o).getName());
	}

	@Override
	public SortedSet<String> getPossibleValues() {
		return new TreeSet<String>();
	}

	@Override
	public String getPropertyProvider(final TreeLogger logger, final SortedSet<ConfigurationProperty> configProperties) throws UnableToCompleteException {
		return null;
	}

	@Override
	public boolean isDerived() {
		return _derived;
	}

	@Override
	public String tryGetValue() {
		return null;
	}
}