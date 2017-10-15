import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import {
  GridListTileBar,
} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import s from './CityTile.css';

const CityTile = ({ city }) => (
  <div className={s.root}>
    <img src={city.image} alt={city.name} />
    <GridListTileBar
      title={city.name}
      subtitle={<span>{city.state}</span>}
      actionIcon={
        <Link to={`/${city.slug}`} href>
          <IconButton>
            <InfoIcon color="rgba(255, 255, 255, 0.54)" />
          </IconButton>
        </Link>
      }
    />
  </div>
);

CityTile.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    state: PropTypes.string,
    slug: PropTypes.string,
  }),
};

CityTile.defaultProps = {
  city: {
    name: '',
    state: '',
    slug: '',
  },
};
export default withStyles(s)(CityTile);
