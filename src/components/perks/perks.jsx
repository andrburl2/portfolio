import React, { Component } from 'react';
import Perk from './perk.jsx';
import './perks.css';

export default class Perks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actived: 0,
    }
  }

  render() {
    const {actived} = this.state;

    return (
      <section className="perks" id="perks">
        <h2 className="perks__title">Мои навыки</h2>

        <div className="perks__container" onMouseDown={this.DND}>
          <button className="perk__arrow perk__arrow_prev" title="Предыдущий" onClick={this.prevPerk}></button>

          <Perk
            active={false}
            perk={actived === 0 ?
              this.props.data[this.props.data.length-1] :
              this.props.data[actived-1]}
            handleClick={this.prevPerk}
          />

          <Perk active={true} perk={this.props.data[actived]}/>

          <Perk
            active={false}
            perk={actived === (this.props.data.length-1) ? 
              this.props.data[0] :
              this.props.data[actived+1]}
            handleClick={this.nextPerk}
          />

          <button className="perk__arrow perk__arrow" title="Следующий" onClick={this.nextPerk}></button>
        </div>

        <p className="perks__subtitle">{this.props.data[actived].text}</p>
      </section>
    )
  }

  nextPerk = () => {
    if (this.state.actived === (this.props.data.length-1)) {
      this.setState({
        actived: 0,
      });
    } else {
      this.setState(state => ({
        actived: state.actived+1,
      }));
    }    
  }

  prevPerk = () => {
    if (this.state.actived === 0) {
      this.setState({
        actived: this.props.data.length-1,
      });
    } else {
      this.setState(state => ({
        actived: state.actived-1,
      }));
    }
  }
}