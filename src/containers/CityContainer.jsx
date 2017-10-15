import React from 'react';
import PropTypes from 'prop-types';
import { DispensaryList } from '../components';
import service from '../services/weedmaps.service'; // TODO: connect to redux sagas, and/or inject into App

class CityContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      dispensaries: [],
    };
  }
  componentDidMount() {
    const { slug } = this.props.match.params;
    service.getDispensariesByCity(slug).then((dispensaries) => {
      this.setState({ dispensaries });
    });
  }
  render() {
    return (
      <DispensaryList dispensaries={this.state.dispensaries} />
    );
  }
}

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
