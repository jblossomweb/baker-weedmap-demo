import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { DispensaryListItem } from '../../components';
import dispensaries from '../../mock/dispensaries';

storiesOf('DispensaryListItem', module)
  .add('default', () => (
    <Router>
      <DispensaryListItem dispensary={dispensaries[0]} />
    </Router>
  ));
