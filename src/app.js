import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './components/rootComponent';
import SearchBox from './components/searchPanel/serachPanel';
import SearchList from './components/searchResult/searchResult';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {syncHistoryWithStore, syncHistory, routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    routerMiddleware(browserHistory)
)(createStore);

const configureStore = (initialState) => {
    const configuredStore = createStoreWithMiddleware(rootReducer, initialState);
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            configuredStore.replaceReducer(nextRootReducer);
        })
    }
    return configuredStore
};
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={RootComponent}>
                <Route path='search' component={SearchList}/>
            </Route>
        </Router>
    </Provider>,
    document.querySelector('.Main-container')
);
