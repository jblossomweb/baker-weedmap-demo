import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Header } from '../../components';

storiesOf('Header', module)
  .add('default', () => (
    <Router>
      <Header title="Header Title" />
    </Router>
  ))
  .add('spinning', () => (
    <Router>
      <Header title="Header Title" spin />
    </Router>
  ));
