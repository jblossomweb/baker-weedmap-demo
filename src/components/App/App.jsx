import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import s from './App.css';
import { Header } from '../../components';
import { HomeContainer, AnotherContainer } from '../../containers';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <div className={s.root}>
      <Header title="Find a Dispensary" />
      <Route default exact path="/" component={HomeContainer} />
      <Route path="/home" component={HomeContainer} />
      <Route path="/another" component={AnotherContainer} />
    </div>
  </Router>
);

export default App;
