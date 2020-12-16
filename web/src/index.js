import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Layout from './module/ui/Layout'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout />
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
