import React, { Component } from 'react';
import './app.css';

import Header from './Header';
import Content from './Content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: 'JoselynDRF',
        photoProfile: 'img/user-profile.png',
      },
    };
  }
  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <Content />
      </div>
    );
  }
}

export default App;
