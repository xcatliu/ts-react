import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import {
    connectRouter,
    routerMiddleware,
    ConnectedRouter,
    RouterState
} from 'connected-react-router';
import { createBrowserHistory } from 'history';

import reducers from './reducers';
import App from './components/App';

export type RootState = { [key in keyof typeof reducers]: ReturnType<typeof reducers[key]> } & {
    router: RouterState;
};

const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        router: connectRouter(history),
        ...reducers
    }),
    composeWithDevTools(applyMiddleware(thunk, historyMiddleware))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
