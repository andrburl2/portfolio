import React, { Component } from 'react';
import DescriptionBlock from './descriptionBlock.jsx';
import DESCRIPTION_DATA from '../../data/descriptionData';
import './description.css';

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: window.pageYOffset
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.getScroll);
  }
  
  render() {
    return (
      <section className="description" id="description">
        <h2 className="description__title">Обо мне</h2>
        
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

  getScroll = () => {
    this.setState({
      scroll: window.pageYOffset
    })
  }
}