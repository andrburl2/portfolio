import React, { Component } from 'react';
import hexagon from '../../../images/hexagon.svg'; 

export default class NavItem extends Component {
  render() {
    const { text, link } = this.props;

    return (
      <li className="nav__item">
        <a className="nav__link" href={link} onClick={this.smoothScroll}>{text}</a>
        <img className="nav__hexagon" src={hexagon} alt="hexagon"></img>
      </li>
    )
  }

  smoothScroll = (e) => {
    e.preventDefault();

    const blockHeight = document.getElementById(this.props.link.substr(1)).offsetTop;
    const navHeight = document.querySelector('.header').scrollHeight;

    this.props.handleClick();
    
    window.scrollTo ({
      top: (blockHeight-navHeight),
      left: 0,
      behavior: 'smooth'
    });
  }
}