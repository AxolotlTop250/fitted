import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import styles from './styles.scss';
import store from './store'
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'


render(
<BrowserRouter>
    <Provider store = {store}>
        <App />
    </Provider>
</BrowserRouter>
, document.getElementById('root'));