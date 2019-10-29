import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middleware = [thunk];

const composeEnhancers =
    typeof window !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose; // eslint-disable-line

let state;
if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-underscore-dangle
    state = window.__PRELOADED_STATE__;
    // eslint-disable-next-line no-underscore-dangle
    delete window.__PRELOADED_STATE__;
}

const store = createStore(
    reducers,
    state,
    composeEnhancers(applyMiddleware(...middleware))
);

export { store };
