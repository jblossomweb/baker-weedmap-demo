import React, { Component } from 'react';
import s from './App.css';
import { Header } from '../../components';

class App extends Component {
  render() {
    console.log(s.root);
    return (
      <div className={s.root}>
        <Header title="Find a Dispensary" />
      </div>
    );
  }
}

export default App;
