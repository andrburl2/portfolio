import React, { Component } from 'react';

export default class Perk extends Component {
  render() {
    const { perk, active, handleClick } = this.props;

    return (
      <div className={active ? "perk perk_active" : "perk"} onClick={handleClick}>
        <img src={perk.img} alt="img" className="perk__img" />

        <div className="perk__header">
          <h3 className="perk__title">{perk.title}</h3>
          <p className="perk__number">{perk.value}</p>
        </div>
      </div>
    )
  }
}