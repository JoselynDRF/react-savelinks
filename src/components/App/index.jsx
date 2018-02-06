import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './app.css';

import Dashboard from './Dashboard';
import Home from './Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      infoApp: {
        name: 'SaveLinks',
        photoProfile: 'img/logo.png',
      },
      currentUser: {
        name: 'JoselynDRF',
        photoProfile: 'img/user-profile.png',
        session: true,
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
              render={() => (<Home users={this.state.users} infoApp={this.state.infoApp} />)}
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
