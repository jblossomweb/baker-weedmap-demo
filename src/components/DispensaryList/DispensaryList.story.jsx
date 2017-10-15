import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { DispensaryList } from '../../components';
import dispensaries from '../../mock/dispensaries';

storiesOf('DispensaryList', module)
  .add('default', () => (
    <Router>
      <DispensaryList dispensaries={dispensaries} />
    </Router>
  ));
