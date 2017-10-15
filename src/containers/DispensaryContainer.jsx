import React from 'react';
import PropTypes from 'prop-types';
import service from '../services/weedmaps.service'; // TODO: connect to redux sagas, and/or inject into App
import Menu from '../models/Menu.model';
import { MenuDataTable } from '../components';

class DispensaryContainer extends React.Component {
  constructor() {
    super();
    this.getMenu = this.getMenu.bind(this);
    this.updateMenu = this.updateMenu.bind(this);
    this.state = {
      menu: [],
      // categories: {},
    };
  }
  componentDidMount() {
    service.getCategories()
      .then((rawCategories) => {
        const categories = Menu.mapCategories(rawCategories);
        this.getMenu(categories);
      });
  }
  getMenu(categories) {
    const { slug } = this.props.match.params;
    service.getMenu(slug)
      .then((rawMenu) => {
        const menu = Menu.map(rawMenu, categories);
        this.updateMenu(menu);
      });
    // this.setState({ categories });
  }
  updateMenu(menu) {
    this.setState({ menu });
  }
  render() {
    const { menu } = this.state;
    return (
      <MenuDataTable menu={menu} />
    );
  }
}

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
