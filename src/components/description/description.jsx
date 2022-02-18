import React, { useState, useEffect, useRef } from 'react';
import './description.css';
import DESCRIPTION_DATA from '../../data/descriptionData';

import DescriptionBlock from './DescriptionBlock/DescriptionBlock';

function Description() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const refContainer = useRef(null); // контейнер для определения пересечения

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {     // при пересечении меняет стейт пересечения, что вызовет выплывание текста 
      if (entry.isIntersecting ) {
        setIsIntersecting(true);
      }
    });
  }, { threshold: [ .5 ] });  // это свойство означает, что функция сработает при пересечении половины блока с областью видимости

  useEffect(() => {
    observer.observe(refContainer.current);
  })

  return (
    <section className='block description' id='description'>
      <h2 className='block__title'>Обо мне</h2>
      
      <div className='description__container' ref={refContainer}>
        {DESCRIPTION_DATA.map(el => {
          return (
            <DescriptionBlock
              block={el}
              isIntersecting={isIntersecting}
              key={el.id}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Description;