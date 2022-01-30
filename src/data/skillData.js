import html from '../images/skill/html.png';
import css from '../images/skill/css.png';
import js from '../images/skill/js.jpg';
import react from '../images/skill/react.png';
import webpack from '../images/skill/webpack.png';
import git from '../images/skill/git.png';
import nodeJs from '../images/skill/node_js.jpg';

const SKILL_DATA = [
  {
    img: html,
    title: 'HTML',
    value: 90,
    text: 'Знаю все основные теги, а также некоторые редкие и специфические. Понимаю смысл семантической верстки, pixel perfect, здоровое чувство перфекционизма.',
    id: 's0a',
  },
  {
    img: css,
    title: 'CSS',
    value: 90,
    text: 'Знаю основные свойства, легко делаю резиновую адаптивную верстку, пишу разные анимации. Понимаю каскадность стилей, позиционирование и поток, псевдоклассы и псевдоэдлементы. Могу найти и разобраться во всем, что понадобиться.',
    id: 's1b',
  },
  {
    img: js,
    title: 'JS',
    value: 80,
    text: 'Я использую стандарт ES6. Люблю классы, стрелочные функции, fetch запросы и промисы. Нравится изучать новое и находить неизвестное - недавно обнаружил для себя Observer.',
    id: 's2c',
  },
  {
    img: react,
    title: 'React',
    value: 80,
    text: 'Использую все основные концепции React: компоненты, стейт и пропсы, жизненный цикл. Я предпочитаю классы, но могу работать и с хуками. Также пользуюсь контекстом, HOC и ref.',
    id: 's3d',
  },
  {
    img: webpack,
    title: 'Webpack',
    value: 70,
    text: 'С React пользуюсь CRA, но могу настроить и установить все необходимое для сборки проекта самостоятельно.',
    id: 's4e',
  },
  {
    img: git,
    title: 'Git',
    value: 75,
    text: 'Понимаю принципы работы Git. Я разделяю проекты на ветки, часто пишу коммиты и теги. На работе работал в команде над одним проектом с помощью Git.',
    id: 's5f',
  },
  {
    img: nodeJs,
    title: 'NodeJS',
    value: 70,
    text: 'Я использую стек из Express и MongoDB, понимаю принципы RestAPI для сайтов, делаю SPA в связке с React-router.',
    id: 's6g',
  },
];

export default SKILL_DATA;