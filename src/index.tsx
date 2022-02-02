import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './globlaStyles';
import Router from './routes'
import store from './store'


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router />
            <GlobalStyle />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

