import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import { DispensaryListItem } from '../../components';
import s from './DispensaryList.css';

const DispensaryList = props => (
  <div className={s.root}>
    <List className={s.list}>
      {props.dispensaries.map(dispensary => (
        <DispensaryListItem dispensary={dispensary} />
      ))}
    </List>
  </div>
);

DispensaryList.propTypes = {
  dispensaries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    avatar: PropTypes.string,
  })),
};

DispensaryList.defaultProps = {
  dispensaries: [],
};

export default withStyles(s)(DispensaryList);
