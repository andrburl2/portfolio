import React, { PureComponent } from 'react';
import './main.css';

import Greeting from '../Greeting/Greeting';
import Description from '../Description/Description';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';

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