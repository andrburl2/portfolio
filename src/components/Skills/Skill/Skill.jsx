import React, { PureComponent } from 'react';
import './skill.css';

class Skill extends PureComponent {
  render() {
    const { skill } = this.props;

    return (
      <div className='skill'>
        <img src={skill.img} alt={skill.title} className='skill__img' />

        <div className='skill__text-column'>
          <h3 className='skill__title'>{skill.title}</h3>

          <div className='skill__progress-row'>
            <progress className='skill__progress' value={skill.value} max='100'>
              Уровень навыка:
            </progress>

            <p className='skill__number'>{skill.value}</p>
          </div>

          

          <p className='skill__text'>{skill.text}</p>
        </div>
      </div>
    )
  }
}

export default Skill;