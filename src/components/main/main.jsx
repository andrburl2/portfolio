import React, { Component } from 'react';
import './main.css';
import PERK_DATA from '../../data/perkData.js';

import Greeting from '../Greeting/Greeting.jsx';
import Description from '../Description/Description.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Perks from '../Perks/Perks.jsx';

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