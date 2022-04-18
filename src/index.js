import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import App from './containers/App';
import './index.css';
import { logActions } from './middleware';
import pokeReducer from './reducers/pokeReducer';

const composedEnhacers = compose(applyMiddleware(logActions));

const store = createStore(pokeReducer,composedEnhacers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
