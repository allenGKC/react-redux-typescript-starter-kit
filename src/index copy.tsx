import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import HomePage from './containers/HomePage';
import CloudPage from './containers/CloudPage';
import NotfoundPage from './containers/NotfoundPage';
import './index.scss';
import configureStore, { history } from './stores/configureStore';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div className="index-container">
        <div className="switch-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/cloud" component={CloudPage} />
            <Route component={NotfoundPage} />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('app')
);
