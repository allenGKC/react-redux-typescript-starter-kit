import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer, { history } from '@/reducers';
import { routerMiddleware } from 'connected-react-router';

// export const history: History = createBrowserHistory();
function configureStoreProd() {
  const middlewares = [
    // Add other middleware on this line...
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunkMiddleware,
    routerMiddleware(history),
  ];

  // const store = createStore(rootReducer(history), compose(applyMiddleware(...middlewares)));
  const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));
  return store;
}

function configureStoreDev() {
  const middlewares = [
    // Add other middleware on this line...
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunkMiddleware,
    routerMiddleware(history),
  ];

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  // const store = createStore(rootReducer(history), composeEnhancers(applyMiddleware(...middlewares)));
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('@/reducers', () => {
      const nextReducer = require('@/reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
