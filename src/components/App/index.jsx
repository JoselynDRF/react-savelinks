import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './app.css';

import Dashboard from './Dashboard';
import Home from './Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {
        name: 'JoselynDRF',
        photoProfile: 'img/user-profile.png',
      },
      users: [
        {
          username: 'JoselynDRF',
          password: '1234',
        },
        {
          username: 'UserTest',
          password: '1111',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (<Home users={this.state.users} />)}
            />
            <Route
              exact
              path="/dashboard"
              render={() => (<Dashboard user={this.state.currentUser} />)}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
