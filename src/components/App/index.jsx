import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './app.css';

import Dashboard from './Dashboard';
import Home from './Home';
import imgLogo from './../../assets/img/logo.png';
import imgProfile from './../../assets/img/profile.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      infoApp: {
        name: 'SaveLinks',
        photoProfile: imgLogo,
      },
      currentUser: {
        name: 'Username',
        photoProfile: imgProfile,
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

    this.handleCurrentUser = this.handleCurrentUser.bind(this);
  }

  // Get form fields values
  handleCurrentUser(username) {
    const currentUser = {
      name: username,
      photoProfile: imgProfile,
      session: true,
    };

    this.setState({
      currentUser,
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  users={this.state.users}
                  infoApp={this.state.infoApp}
                  handleCurrentUser={this.handleCurrentUser}
                />)}
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
