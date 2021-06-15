import React, { Component } from 'react';
import Project from './project/project.jsx'
import PROJECT_DATA from '../../data/projectData.js'
import './portfolio.css';

export default class Portfolio extends Component {
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