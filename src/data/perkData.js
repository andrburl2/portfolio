import html from '../images/perks/html.png';
import css from '../images/perks/css.png';
import js from '../images/perks/js.jpg';
import react from '../images/perks/react.png';
import webpack from '../images/perks/webpack.png';
import git from '../images/perks/git.png';
import nodeJs from '../images/perks/node_js.jpg';

const PERK_DATA = [
  {
    img: html,
    alt: 'Логотип HTML',
    title: 'HTML',
    value: 90,
    text: `Язык разметки веб-страниц. Навык позволет создавать более доступные сайты, 
      используя семантические теги и атрибуты.`,
  },
  {
    img: css,
    alt: 'Логотип CSS',
    title: 'CSS',
    value: 80,
    text: `Язык описания внешнего вида документа. Дает возможность создавать приятные глазу сайты,
      адаптировать их под разные разрешения, а также анимировать.`,
  },
  {
    img: js,
    alt: 'Логотип JS',
    title: 'JS',
    value: 70,
    text: 'Язык программирования, с помощью которого создаются интерактивные веб-страницы.',
  },
  {
    img: react,
    alt: 'Логотип React',
    title: 'React',
    value: 50,
    text: `Декларативная javaScript-библиотека для создания пользовательких интерфейсов. 
      Позволяет создавать UI из отдельных компонентов.`,
  },
  {
    img: webpack,
    alt: 'Логотип Webpack',
    title: 'Webpack',
    value: 50,
    text: `Позволяет компилировать проект, объединяя модули в единый файл.
      Уменьшает размер проекта и обрабатывает код согласно заданым правилам.`,
  },
  {
    img: git,
    alt: 'Логотип Git',
    title: 'Git',
    value: 70,
    text: 'Система управления версиями для отслеживания и ведения историй изменений.',
  },
  {
    img: nodeJs,
    alt: 'Логотип NodeJS',
    title: 'NodeJS',
    value: 40,
    text: 'Среда выполнения js-кода, позволяющая писать на нем серверную часть веб-стараницы.',
  },
];

export default PERK_DATA;