import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { MenuDataTable } from '../../components';
import Menu from '../../models/Menu.model';
import categoriesJson from '../../mock/categories.json';
import menuJson from '../../mock/menu.json';

const categories = Menu.mapCategories(categoriesJson);
const menu = Menu.map(menuJson, categories);

storiesOf('MenuDataTable', module)
  .add('default', () => (
    <Router>
      <MenuDataTable menu={menu} />
    </Router>
  ));
