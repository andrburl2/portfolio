import React, { PureComponent } from 'react';
import './header.css';

import logo from '../../images/code_logo.svg';

import Nav from '../Nav/Nav';

class Header extends PureComponent {
  scrollTop() {
    window.scrollTo ({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <header className='header'>
        <div className='header__container'>
          <img className='header__logo' alt='Лого' src={logo} title='В начало' onClick={this.scrollTop}/>

          <Nav />
        </div>
      </header>
    )
  }
}

export default Header;