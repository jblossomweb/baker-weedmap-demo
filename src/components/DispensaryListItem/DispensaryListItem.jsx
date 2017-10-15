import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link, Redirect } from 'react-router-dom';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import Avatar from 'material-ui/Avatar';
import s from './DispensaryListItem.css';

class DispensaryListItem extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicked: false,
    };
  }
  handleClick() {
    console.log('clicked');
    this.setState({ clicked: true });
  }
  render() {
    const { dispensary } = this.props;
    return this.state.clicked ? <Redirect push to={`/menu/${dispensary.slug}`} /> : (
      <ListItem key={dispensary.slug} dense button className={s.item} onClick={this.handleClick}>
        <Avatar alt={dispensary.name} src={dispensary.avatar} />
        <ListItemText primary={dispensary.name} />
        <ListItemSecondaryAction>
          <Link to={`/menu/${dispensary.slug}`} href>
            <IconButton>
              <InfoIcon color="rgba(255, 255, 255, 0.54)" />
            </IconButton>
          </Link>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

DispensaryListItem.propTypes = {
  dispensary: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

DispensaryListItem.defaultProps = {
  dispensary: {
    name: '',
    slug: '',
    city: '',
    state: '',
    avatar: '',
  },
};

export default withStyles(s)(DispensaryListItem);
