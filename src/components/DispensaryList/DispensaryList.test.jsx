import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import DispensaryList from './DispensaryList';
import dispensaries from '../../mock/dispensaries';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <DispensaryList />
    </Router>
    ,
    div,
  );
});

it('renders mock data without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <DispensaryList dispensaries={dispensaries} />
    </Router>
    ,
    div,
  );
});
