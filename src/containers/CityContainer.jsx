import React from 'react';
import PropTypes from 'prop-types';

const CityContainer = ({ match }) => (
  <div>
    CityContainer. City slug is: { match.params.slug }
  </div>
);

CityContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
};

CityContainer.defaultProps = {
  match: {
    params: {
      slug: '',
    },
  },
};

export default CityContainer;
