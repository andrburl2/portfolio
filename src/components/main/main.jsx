import React, { PureComponent } from 'react';
import './main.css';

import Greeting from '../Greeting/Greeting.jsx';
import Description from '../Description/Description.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Skills from '../Skills/Skills.jsx';

class Main extends PureComponent {
  render() { 
    return (
      <main className='main'>
        <Greeting    />
        <Description />
        <Skills      />
        <Portfolio   />
      </main>
    )
  }
}

export default Main;