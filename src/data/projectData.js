import learn from '../images/projects/learn_to_learn.png';
import travel from '../images/projects/travel_to_russia.png';
import news from '../images/projects/news-machine.png';
import funbox from '../images/projects/funbox_test.png';
import mesto from '../images/projects/mesto.png';
import tasks from '../images/projects/remember-the-tasks.png';

const PROJECT_DATA = [
  {
    title: 'Научиться учиться',
    description: 'Первый созданный мной сайт. Простой landing, в котором используются семантическая верстка и простые стили css, пока без адаптации.',
    img: learn,
    page: 'https://andrburl2.github.io/Learn-to-learn',
    ghLink: 'https://github.com/andrburl2/Learn-to-learn',
    id: 'p0a',
  },
  {
    title: 'Путешествия по России',
    description: 'Развитие моих навыков. Landing стал больше, появились новые теги, расширены стили и главное - добавлена адаптация для разных экранов.',
    img: travel,
    page: 'https://andrburl2.github.io/Travel-to-Russia',
    ghLink: 'https://github.com/andrburl2/Travel-to-Russia',
    id: 'p1b',
  },
  {
    title: 'NewsMachine',
    description: 'Дипломная работа. Создание проекта без подсказок опираясь только на собственный опыт. Адаптация и семантика, появился js. Также написал сервер на Node.js для регистрации пользователей и сохранения статей.',
    img: news,
    page: 'https://andrburl2.github.io/news-machine-frontend/',
    ghLink: 'https://github.com/andrburl2/news-machine-frontend',
    id: 'p2c',
  },
  {
    title: 'Нямушка',
    description: 'Тестовое задание. Написал сайт на React, по стандарту использовал семантику и адаптив.',
    img: funbox,
    page: 'https://andrburl2.github.io/funbox-test',
    ghLink: 'https://github.com/andrburl2/funbox-test',
    id: 'p3d',
  },
  {
    title: 'Mesto',
    description: 'Учебный проект, переделанный на React. Подключен react-router, добавлена страница входа/регистрации. Использовал классовые компоненты, HOC, fetch-запросы и promise. Для проекта написан REST API на Node.js. Проект выложен на хостинг.',
    img: mesto,
    page: 'https://andrburl-mesto.ml',
    ghLink: 'https://github.com/andrburl2/mesto_react',
    id: 'p4e',
  },
  {
    title: 'Remember-the-tasks',
    description: 'Простое тестовое задание для добавления задач в разные категории. Попробовал Angular. Написал для сайт API на Ruby on rails. Сайт выложен на Heroku.',
    img: tasks,
    page: 'https://remember-the-tasks.herokuapp.com',
    ghLink: 'https://github.com/andrburl2/remember-the-tasks',
    id: 'p5f',
  },
];

export default PROJECT_DATA;