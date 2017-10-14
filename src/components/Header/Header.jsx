import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Logo from '../../assets/logo.svg';
import classNames from 'classnames/bind';
import s from './Header.css';

var cx = classNames.bind(s);

class Header extends Component {
  render() {
    const { spin, title } = this.props;
    return (
      <AppBar position="static" color="default">
        <Toolbar className={s.root}>
          <IconButton aria-label="Logo">
            <Logo className={cx(s.logo, { spin })} alt="logo" />
          </IconButton>
          <Typography type="title" color="inherit" className={s.title}>
            { title }
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  spin: PropTypes.bool
};

export default withStyles(s)(Header);
