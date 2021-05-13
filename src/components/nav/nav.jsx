import React, { Component } from 'react';
import NavItem from './navItem.jsx';
import { NAV_DATA } from '../../data/navData.js'
import './nav.css';

export default class Nav extends Component {
  render () {
    return (
      <nav className="nav">
        <ul className="nav__list">
          {NAV_DATA.map(el => {
            return (
              <NavItem 
                text={el.text}
                link={el.link}
                key={el.id}
              />
            )
          })}
        </ul>
      </nav>
    )
  }
}