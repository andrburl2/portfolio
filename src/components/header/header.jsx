import React, { Component } from 'react';
import Nav from '../nav/nav.jsx'
import logo from '../../images/code_logo.svg';
import './header.css';

export default class Header extends Component {
  render () {
    return (
      <header className="header">
        <div className="header__container">
          <img className="header__logo" alt="Лого" src={logo} />
                    
          <Nav />
        </div>
      </header>
    )
  }
}