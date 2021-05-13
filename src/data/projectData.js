import learn from '../images/projects/learn_to_learn.png';
import travel from '../images/projects/travel_to_russia.png';
import news from '../images/projects/news-machine.png';
import funbox from '../images/projects/funbox_test.png';

export const PROJECTS_DATA = [
  {
    title: 'Научиться учиться',
    description: 'Первый созданный мной сайт. Простой landing, в котором используются семантическая верстка и простые стили css, пока без адаптаиции.',
    img: learn,
    id: 'p1a',
    ghPage: 'https://andrburl2.github.io/Learn-to-learn/',
    ghLink: 'https://github.com/andrburl2/Learn-to-learn',
  },
  {
    title: 'Путешествия по России',
    description: 'Развитие моих навыков. Landing стал больше, появились новые теги, расширены стили и главное - добавлена адаптация для разных экранов.',
    img: travel,
    id: 'p2b',
    ghPage: 'https://andrburl2.github.io/Travel-to-Russia/',
    ghLink: 'https://github.com/andrburl2/Travel-to-Russia',
  },
  {
    title: 'NewsMachine',
    description: 'Дипломная работа. Создание проекта без подсказок опираясь только на собственный опыт. Адаптация и семантика, появился js. Также написал сервер на Node.js для регистрации пользователей и сохранения статей.',
    img: news,
    id: 'p3c',
    ghPage: 'https://andrburl2.github.io/news-machine-frontend/',
    ghLink: 'https://github.com/andrburl2/news-machine-frontend',
  },
  {
    title: 'Нямушка',
    description: 'Тестовое задание. Написал сайт на React, по стандарту использовал семантику и адаптив.',
    img: funbox,
    id: 'p4d',
    ghPage: 'https://andrburl2.github.io/funbox-test/',
    ghLink: 'https://github.com/andrburl2/funbox-test',
  },
];