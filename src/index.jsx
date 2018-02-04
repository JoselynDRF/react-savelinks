import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Login from './components/Login';

render(
  (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/subjects" component={App} />
      </div>
    </Router>
  ), document.getElementById('root'),
);
