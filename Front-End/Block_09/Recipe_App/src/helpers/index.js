import React, { createContext } from 'react';
import { render } from '@testing-library/react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import rootReducers from '../redux/reducers';

export const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={ createMemoryHistory() }>{component}</Router>),
    history,
  };
};

export const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(rootReducers, initialState, applyMiddleware(thunk)),
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store,
});

export const renderWithContext = (
  component,
  {
    initialValue,
    Context = createContext(initialValue),
  },
) => ({
  ...render(
    <Context.Provider value={ initialValue }>
      {component}
    </Context.Provider>,
  ),
  Context,
});

export const renderWithRouterAndRedux = (
  component,
  {
    initialState = {},
    store = createStore(rootReducers, initialState, applyMiddleware(thunk)),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>{component}</Provider>
    </Router>,
  ),
  history,
  store,
});

export const renderWithReduxAndContext = (
  component,
  {
    initialState = {},
    store = createStore(rootReducers, initialState, applyMiddleware(thunk)),
    initialValue,
    Context = createContext(initialValue),
  } = {},
) => ({
  ...render(
    <Provider store={ store }>
      <Context.Provider value={ initialValue }>{component}</Context.Provider>
    </Provider>,
  ),
  store,
  Context,
});
