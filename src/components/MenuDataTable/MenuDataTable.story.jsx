import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { MenuDataTable } from '../../components';
import Menu from '../../models/Menu.model';
import menuJson from '../../mock/menu.json';

const menu = Menu.map(menuJson);

storiesOf('MenuDataTable', module)
  .add('default', () => (
    <Router>
      <MenuDataTable menu={menu} />
    </Router>
  ));
