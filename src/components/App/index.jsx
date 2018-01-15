import React, { Component } from 'react';
import 'normalize-css';
import './app.css';

import Header from '../Header';
import Content from '../Content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: 'Crazy Team',
        photoProfile: 'http://thecodeplayer.com/uploads/media/2rT2vdx.jpg',
      },
    };
  }
  render() {
    return (
      <div>
        <h1> App Component </h1>
        <Header user={this.state.user} />
        <Content />
      </div>
    );
  }
}

export default App;
