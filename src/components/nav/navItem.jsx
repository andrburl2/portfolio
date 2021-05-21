import React, { Component } from 'react';
import hexagon from '../../images/hexagon.svg'; 

export default class NavItem extends Component {
  smoothScroll = (e) => {
    e.preventDefault();

    const blockHeight = document.getElementById(this.props.link.substr(1)).offsetTop;

    this.props.handleClick();
    
    window.scrollTo ({
      top: (blockHeight-60),
      left: 0,
      behavior: 'smooth'
    });
  }

  render () {
    const { text, link } = this.props;

    return (
      <li className="nav__item">
        <a className="nav__link" href={link} onClick={this.smoothScroll}>{text}</a>
        <img className="nav__hexagon" src={hexagon} alt="hexagon"></img>
      </li>
    )
  }
}