import React, { PureComponent } from 'react';
import './description.css';
import DESCRIPTION_DATA from '../../data/descriptionData';

import DescriptionBlock from './descriptionBlock/descriptionBlock.jsx';

class Description extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      scroll: window.pageYOffset
    }
  }

  getScroll = () => {
    this.setState({
      scroll: window.pageYOffset
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.getScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getScroll);
  }

  render() {
    return (
      <section className='block description' id='description'>
        <h2 className='block__title'>Обо мне</h2>
        
        <div className='description__container'>
          {DESCRIPTION_DATA.map(el => {
            return (
              <DescriptionBlock
                block={el}
                scroll={this.state.scroll}
                key={el.id}
              />
            )
          })}
        </div>
      </section>
    )
  }
}

export default Description;