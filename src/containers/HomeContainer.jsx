import React from 'react';
import { CityGrid } from '../components';
import cities from '../data/cities';

const HomeContainer = () => (
  <CityGrid cities={cities} />
);

export default HomeContainer;
