import React, { PureComponent } from 'react';
import './nav.css';
import NAV_DATA from '../../data/navData.js';

import NavItem from './NavItem/NavItem';

class Nav extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      isMobileNavOpen: false
    }
  }

  toggleMobileNav = () => {
    this.setState(state => ({
      isMobileNavOpen: !state.isMobileNavOpen
    }));
  }

  closeMobileNav = () => {
    this.setState({
      isMobileNavOpen: false
    });
  }

  render() {
    return (
      <nav className='nav'>
        <button
          className={this.state.isMobileNavOpen ? 'nav__button nav__button_active' : 'nav__button'}
          onClick={this.toggleMobileNav}
          title='Открыть навигацию'>
        </button>

        <ul className={this.state.isMobileNavOpen ? 'nav__list' : 'nav__list nav__list_hidden'}>
          {NAV_DATA.map(el => {
            return (
              <NavItem 
                text={el.text}
                link={el.link}
                key={el.id}
                closeMobileNav={this.closeMobileNav}
              />
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Nav;