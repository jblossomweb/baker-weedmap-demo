import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { CityGrid } from '../../components';
import cities from '../../data/cities';

storiesOf('CityGrid', module)
  .add('default', () => (
    <Router>
      <CityGrid cities={cities} />
    </Router>
  ));
