import React, {Component} from 'react';
import Portfolio from '../portfolio/portfolio.jsx';
import Perks from '../perks/perks.jsx';
import Description from '../description/description.jsx';
import './main.css';

export default class Main extends Component {
  render () { 
    return (
      <main className="main">
        <Description />
        <Perks />
        <Portfolio />
      </main>
    )
  }
}