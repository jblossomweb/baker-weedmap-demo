import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import MenuDataTable from './MenuDataTable';
import Menu from '../../models/Menu.model';
import menuJson from '../../mock/menu.json';

const menu = Menu.map(menuJson);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <MenuDataTable />
    </Router>
    ,
    div,
  );
});

it('renders mock data without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <MenuDataTable menu={menu} />
    </Router>
    ,
    div,
  );
});
