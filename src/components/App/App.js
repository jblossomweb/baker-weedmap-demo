import React, { Component } from 'react';
import './App.css';
import { Header } from '../../components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Find a Dispensary" />
      </div>
    );
  }
}

export default App;
