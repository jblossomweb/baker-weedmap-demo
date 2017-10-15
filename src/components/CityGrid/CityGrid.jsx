import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  GridList,
  GridListTile,
} from 'material-ui/GridList';
import { CityTile } from '../../components';
import s from './CityGrid.css';

const CityGrid = props => (
  <div className={s.root}>
    <GridList cellHeight={200} cols={1} className={s.grid}>
      {props.cities.map(city => (
        <GridListTile key={city.slug}>
          <CityTile city={city} />
        </GridListTile>
      ))}
    </GridList>
  </div>
);

CityGrid.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    state: PropTypes.string,
    slug: PropTypes.string,
  })),
};

CityGrid.defaultProps = {
  cities: [],
};

export default withStyles(s)(CityGrid);
