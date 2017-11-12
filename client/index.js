import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import configureStore from './store'
import './index.css';
import Main from './containers/main/Main';
// import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>
    ,document.getElementById('root')
);
// registerServiceWorker();
