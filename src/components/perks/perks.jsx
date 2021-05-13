import React, { Component } from 'react';
import './perks.css';

export default class Perks extends Component {
  render() {
    return (
      <section className="perks" id="perks">
        <h2 className="perks__title">Мои навыки</h2>

        <div className="perks__grid-container">
          <p className="perk">HTML5</p>
          <p className="perk">CSS3</p>
          <p className="perk">JS</p>
          <p className="perk">React</p>
          <p className="perk">WebPack</p>
          <p className="perk">Git</p>
          <p className="perk">ООП</p>
          <p className="perk">БЭМ</p>
        </div>
      </section>
    )
  }
}