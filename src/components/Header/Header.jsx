import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import classNames from 'classnames/bind';
import Logo from '../../assets/logo.svg';
import s from './Header.css';

const cx = classNames.bind(s);

const Header = props => (
  <AppBar position="static" color="default">
    <Toolbar className={s.root}>
      <IconButton aria-label="Logo">
        <Logo className={cx(s.logo, { spin: props.spin })} alt="logo" />
      </IconButton>
      <Typography type="title" color="inherit" className={s.title}>
        { props.title }
      </Typography>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  title: PropTypes.string,
  spin: PropTypes.bool,
};

Header.defaultProps = {
  title: '',
  spin: false,
};

export default withStyles(s)(Header);
