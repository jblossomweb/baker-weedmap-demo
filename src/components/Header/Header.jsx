import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg';
import classNames from 'classnames/bind';
import s from './Header.css';

var cx = classNames.bind(s);

class Header extends Component {
  render() {
    const { spin, title } = this.props;
    return (
      <header className={s.root}>
        <img src={logo} className={cx('logo', { spin })} alt="logo" />
        <h1 className="Header-title">{ title }</h1>
      </header>
    );
  }
}

Header.propTypes = {
  spin: PropTypes.bool
};

export default Header;
