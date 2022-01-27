import React, { Component } from 'react';
import './main.css';
import PERK_DATA from '../../data/perkData.js';

import Greeting from '../greeting/greeting.jsx';
import Description from '../description/description.jsx';
import Portfolio from '../portfolio/portfolio.jsx';
import Perks from '../perks/perks.jsx';

class Main extends Component {
  render() { 
    return (
      <main className='main'>
        <Greeting />
        <Description />
        <Perks data={PERK_DATA}/>
        <Portfolio />
      </main>
    )
  }
}

export default Main;