import React, { Component } from 'react';

export default class DescriptionBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0
    };
  }

  render() {
    const { block, scroll } = this.props;
    
    return (
      <div
        id={block.id} className={this.state.height <= scroll+(window.innerHeight/1.5) ?
          "description__block description__block_visible" :
          "description__block"
        }
        onLoad={this.getHeight}
      >
        <p className="description__text">
          <b>{block.title}</b> {block.text}
        </p>

        <img src={block.img} alt={block.alt} className="description__img"/>
      </div>
    )
  }

  getHeight = () => {
    this.setState({
      height: document.getElementById(this.props.block.id).offsetTop
    });
  }
}