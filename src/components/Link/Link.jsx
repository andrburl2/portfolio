import React, { PureComponent } from 'react';
import './link.css';

class Link extends PureComponent { 
  render() {
    const { link, src, title, subtitle } = this.props.data;

    return (
      <a
        href={link}
        className='link'
        target='_blank' rel='noopener noreferrer'
        title={subtitle}
      >
        <img src={src} alt={subtitle} className='link__icon' />
        {title}
      </a>
    )
  }
}

export default Link;