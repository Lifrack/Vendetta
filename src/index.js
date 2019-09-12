import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './navbar';
import Firstpage from './firstpage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NavBar />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
