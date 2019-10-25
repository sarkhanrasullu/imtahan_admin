import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
//redux
import allReducers from './store/reducers/index';
require('dotenv/config');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(allReducers, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>, 
        document.getElementById('root')
        );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
