import React, { Component } from 'react';
import NavItem from './navItem/navItem.jsx';
import NAV_DATA from '../../data/navData.js'
import './nav.css';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isClosed: true
    }
  }

  render() {
    return (
      <nav className="nav">
        <button
          className={this.state.isClosed ? "nav__button" : "nav__button nav__button_active"}
          onClick={this.toggleNav}
          title="Навигация">
        </button>

        <ul className={this.state.isClosed ? "nav__list nav__list_hidden" : "nav__list"}>
          {NAV_DATA.map(el => {
            return (
              <NavItem 
                text={el.text}
                link={el.link}
                key={el.id}
                handleClick={this.closeNav}
              />
            )
          })}
        </ul>
      </nav>
    )
  }

  toggleNav = () => {
    this.setState(state => ({
      isClosed: !state.isClosed
    }));
  }

  closeNav = () => {
    this.setState({
      isClosed: true
    });
  }
}