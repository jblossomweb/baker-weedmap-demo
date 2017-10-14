import React, { Component } from 'react';
import s from './App.css';
import { Header } from '../../components';

class App extends Component {
  render() {
    return (
      <div className={s.root}>
        <Header title="Find a Dispensary" />
      </div>
    );
  }
}

export default App;
