import React, { PureComponent } from 'react';
import './skills.css';
import SKILL_DATA from '../../data/skillData.js';

import Skill from './Skill/Skill.jsx';

class Skills extends PureComponent {
  render() {
    return (
      <section className='block skills' id='skills'>
        <h2 className='block__title'>Мои навыки</h2>

        <div className='skills__container'>
          {SKILL_DATA.map(el => {
            return <Skill skill={el} key={el.id} />
          })}
        </div>
      </section>
    )
  }
}

export default Skills;