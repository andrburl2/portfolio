import learn from '../images/projects/learn_to_learn.png';
import travels from '../images/projects/travels.png';
import news from '../images/projects/news-machine.png';
import yummy from '../images/projects/yummy.png';
import mesto from '../images/projects/mesto.png';
import tasks from '../images/projects/remember-the-tasks.png';

const PROJECT_DATA = [
  {
    title: 'Научиться учиться',
    description: 'Первый созданный сайт. Landing, на котором я учился семантической верстки и css. Улучшил стили и картинки, адаптировал под мобильные разрешения. Добавил немного js.',
    img: learn,
    page: 'https://andrburl2.github.io/learn-to-learn',
    ghLink: 'https://github.com/andrburl2/learn-to-learn',
    id: 'p0a',
  },
  {
    title: 'Путешествия по России',
    description: 'Большой landing с разнообразными блоками и стилями: сайт адаптирован, использованы flex и grid, анимации для ссылок и кнопок. С последним обновлением переделал проект с использованием React и scss, добавил контекст языка и его выбор (русский и английский).',
    img: travels,
    page: 'https://andrburl2.github.io/travels',
    ghLink: 'https://github.com/andrburl2/travels',
    id: 'p1b',
  },
  {
    title: 'NewsMachine',
    description: 'Дипломная работа. Проект на чистых HTML, CSS, JS. Сайт адаптирован, использована семантическая верстка. Также написал сервер на Node.js для регистрации пользователей и сохранения статей. Все ссылки есть в репозитории в README.',
    img: news,
    page: 'https://andrburl2.github.io/news-machine-frontend/',
    ghLink: 'https://github.com/andrburl2/news-machine-frontend',
    id: 'p2c',
  },
  {
    title: 'Mesto',
    description: 'Учебный проект, переделанный на React. Подключен react-router, добавлена страница входа/регистрации. Использовал классовые компоненты, HOC, fetch-запросы и promise. Для проекта написан REST API на express.js. Проект выложен на хостинг.',
    img: mesto,
    page: 'https://andrburl-mesto.ml',
    ghLink: 'https://github.com/andrburl2/mesto_react',
    id: 'p4e',
  },
  {
    title: 'Нямушка',
    description: 'Тестовое задание, написанное на React. Использованы функциональные компоненты и хуки. Карточки изменяются с помощью файла с данными.',
    img: yummy,
    page: 'https://andrburl2.github.io/yummy',
    ghLink: 'https://github.com/andrburl2/yummy',
    id: 'p3d',
  },
  {
    title: 'Remember-the-tasks',
    description: 'Тестовое задание для добавления задач в разные категории. Попробовал Angular. Написал для сайт API на Ruby on rails. Сайт выложен на Heroku.',
    img: tasks,
    page: 'https://remember-the-tasks.herokuapp.com',
    ghLink: 'https://github.com/andrburl2/remember-the-tasks',
    id: 'p5f',
  },
];

export default PROJECT_DATA;