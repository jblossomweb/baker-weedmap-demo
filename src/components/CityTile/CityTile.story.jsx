import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { CityTile } from '../../components';
import cities from '../../data/cities';

storiesOf('CityTile', module)
  .add('default', () => (
    <Router>
      <CityTile city={cities[0]} />
    </Router>
  ));
