import React from 'react';
import PropTypes from 'prop-types';

const DispensaryContainer = ({ match }) => (
  <div>
    DispensaryContainer. Dispensary slug is: { match.params.slug }
  </div>
);

DispensaryContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
};

DispensaryContainer.defaultProps = {
  match: {
    params: {
      slug: '',
    },
  },
};

export default DispensaryContainer;
