import React, { Component } from 'react';
import 'normalize-css';
import './app.css';

import Header from '../Header';
import Main from '../Main';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1> App Component </h1>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
