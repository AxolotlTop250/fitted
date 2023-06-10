import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import styles from './styles.scss';
import store from './store'

render(
<Provider store = {store}>
    <App />
</Provider>
, document.getElementById('root'));