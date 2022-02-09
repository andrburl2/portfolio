import React, { PureComponent } from 'react';
import './portfolio.css';
import PROJECT_DATA from '../../data/projectData.js';

import Project from './Project/Project.jsx';

class Portfolio extends PureComponent {
  render() {
    return (
      <section className="block portfolio" id="portfolio">
        <h2 className="block__title">Портфолио</h2>

        <div className="portfolio__container">
          {PROJECT_DATA.map(el => {
            return (
              <Project key={el.id} project={el} />
            )
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;