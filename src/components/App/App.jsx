import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import s from './App.css';
import { Header } from '../../components';
import {
  HomeContainer,
  CityContainer,
  DispensaryContainer,
} from '../../containers';

const App = () => (
  <Router>
    <div className={s.root}>
      <div className={s.header}>
        <Header title="Find a Dispensary" />
      </div>
      <div className={s.container}>
        <Route default exact path="/" component={HomeContainer} />
        <Route path="/menu/:slug" component={DispensaryContainer} />
        <Route path="/city/:slug" component={CityContainer} />
      </div>
    </div>
  </Router>
);

export default App;
