import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import DispensaryListItem from './DispensaryListItem';
import dispensaries from '../../mock/dispensaries';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <DispensaryListItem />
    </Router>
    ,
    div,
  );
});

it('renders mock data without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <DispensaryListItem dispensary={dispensaries[0]} />
    </Router>
    ,
    div,
  );
});