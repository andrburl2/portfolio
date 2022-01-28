import React, { PureComponent } from 'react';
import './perkBlock.css';

class PerkBlock extends PureComponent {
  render() {
    const { perk, active, handleClick } = this.props;

    return (
      <div className={active ? 'perk-block perk-block_active' : 'perk-block'} onClick={handleClick}>
        <img src={perk.img} alt='img' className='perk-block__img' />

        <div className='perk-block__header'>
          <h3 className='perk-block__title'>{perk.title}</h3>
          <p className='perk-block__number'>{perk.value}</p>
        </div>
      </div>
    )
  }
}

export default PerkBlock;