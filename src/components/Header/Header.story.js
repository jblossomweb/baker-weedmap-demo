import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';

storiesOf('Header', module)
  .add('default', () => <Header title="Header Title" />)
  .add('spinning', () => <Header title="Header Title" spin />);
