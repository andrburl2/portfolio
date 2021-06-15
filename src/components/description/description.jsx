import React, { Component } from 'react';
import DescriptionBlock from './descriptionBlock/descriptionBlock.jsx';
import DESCRIPTION_DATA from '../../data/descriptionData';
import './description.css';

export default class Description extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      scroll: window.pageYOffset
    }
  }
  
  render() {
    return (
      <section className="block description" id="description">
        <h2 className="block__title">Обо мне</h2>
        
        <div className="description__container">
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

  componentDidMount() {
    window.addEventListener('scroll', this.getScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getScroll);
  }

  getScroll = () => {
    this.setState({
      scroll: window.pageYOffset
    });
  }
}