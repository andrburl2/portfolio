import React, { Component } from 'react';
import Nav from '../nav/nav.jsx'
import logo from '../../images/code_logo.svg';
import './header.css';

export default class Header extends Component {
  render () {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__name">
            <img className="header__logo" alt="Лого" src={logo} />
            <h1 className="header__title">Мое рюземе-портфолио</h1>
          </div>
                    
          <Nav />
        </div>
      </header>
    )
  }
}