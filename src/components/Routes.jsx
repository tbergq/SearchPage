import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { Route } from 'react-router';
import React from 'react';

import reducers from '../reducers';
import SearchPage from '../containers/SearchPage';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  applyMiddleware(middleware),
  applyMiddleware(thunk),
);

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={SearchPage} />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Routes;
