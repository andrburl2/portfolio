import React, { PureComponent } from 'react';
import './descriptionBlock.css';

class DescriptionBlock extends PureComponent {
  render() {
    const { block, isIntersecting } = this.props;
    
    return (
      <div
        id={block.id}
        className={isIntersecting ? 'description__block description__block_visible' : 'description__block'}
        onLoad={this.getHeight}
      >
        <p className='description__text'>
          <b>{block.title}</b> {block.text}
        </p>

        <img className='description__img' src={block.img} alt={block.alt} />
      </div>
    )
  }
}

export default DescriptionBlock;