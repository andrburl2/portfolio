import React, { PureComponent } from 'react';
import './perks.css';

import PerkBlock from './PerkBlock/PerkBlock.jsx';

class Perks extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    }
  }

  nextPerk = () => {
    if (this.state.selected === (this.props.data.length-1)) {
      this.setState({
        selected: 0
      });
    } else {
      this.setState(state => ({
        selected: state.selected+1
      }));
    }    
  }

  prevPerk = () => {
    if (this.state.selected === 0) {
      this.setState({
        selected: this.props.data.length-1
      });
    } else {
      this.setState(state => ({
        selected: state.selected-1
      }));
    }
  }

  togglePerk = (e) => {
    switch (e.keyCode) {
      case 37:
        this.prevPerk()
        break;

      case 39:
        this.nextPerk()
        break;

      default:
        break;
    }
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.togglePerk);
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.togglePerk);
  }

  render() {
    const { selected } = this.state;

    return (
      <section className='block perks' id='perks'>
        <h2 className='block__title'>Мои навыки</h2>

        <div className='perks__container'>
          <button
            className='perks__arrow perks__arrow_position_left'
            title='Предыдущий навык'
            onClick={this.prevPerk}
          >
          </button>

          <PerkBlock
            active={false}
            perk={selected === 0 ?
              this.props.data[this.props.data.length-1] :
              this.props.data[selected-1]}
            handleClick={this.prevPerk}
          />

          <PerkBlock
            active={true}
            perk={this.props.data[selected]}
          />

          <PerkBlock
            active={false}
            perk={selected === (this.props.data.length-1) ? 
              this.props.data[0] :
              this.props.data[selected+1]}
            handleClick={this.nextPerk}
          />

          <button
            className='perks__arrow perks__arrow_position_right'
            title='Следующий навык'
            onClick={this.nextPerk}
          >
          </button>
        </div>

        <p className='perks__subtitle'>{this.props.data[selected].text}</p>
      </section>
    )
  }
}

export default Perks;