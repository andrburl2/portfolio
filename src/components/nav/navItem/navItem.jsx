import React, { PureComponent } from 'react';

class NavItem extends PureComponent {
  smoothScroll = (e) => {
    e.preventDefault();

    const blockHeight = document.getElementById(this.props.link.substr(1)).offsetTop; // через ссылку получаем высоту нужного блока
    const headerHeight = document.querySelector('.header').scrollHeight;              // вычисляем высоту header

    this.props.closeMobileNav(); // закрываем навигацию, это нужно только для маленьких разрешений
    
    window.scrollTo ({
      top: (blockHeight-headerHeight), // скроллим до нужного блока, вычитая высоту header
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    const { text, link } = this.props;

    return (
      <li className='nav__item'>
        <a className='nav__link' href={link} onClick={this.smoothScroll}>{text}</a>
      </li>
    )
  }
}

export default NavItem;