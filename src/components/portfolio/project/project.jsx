import React, { Component } from 'react';

export default class Project extends Component {
  render() {
    const { project } = this.props;

    return (
      <div className="project">
        <h3 className="project__title">{project.title}</h3>

        <div className="project__container">
          <img src={project.img} alt="Фото проекта" className="project__img"/>
          <p className="project__text">{project.description}</p>
        </div>

        <ul className="project__link-row">
          <li className="project__item">
            <a
              href={project.ghPage}
              className="project__link"
              target="_blank"
              title="Сайт на gitub.pages"
              rel="noreferrer">Сайт
            </a>
          </li>
          <li className="project__item">
            <a
              href={project.ghLink}
              className="project__link"
              target="_blank"
              title="Код на github"
              rel="noreferrer">Код
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
