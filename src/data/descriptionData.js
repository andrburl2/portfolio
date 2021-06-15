import diplom from '../images/description/diplom.jpg';
import work from '../images/description/work.jpg';
import quality from '../images/description/quality.jpg';

const DESCRIPTION_DATA = [
  {
    title: 'Образование.',
    text: `Я закончил курс веб-разработчика Яндекс Практикума. 
      Обучаясь, я научился создавать сайты и сделал несколько проектов для портфолио.
      Полностью сам написал дипломную работу, применив в ней все изученные технологии. 
      React изучаю самостотельно.`,
    img: diplom,
    alt: 'Диплом',
    isReversed: false,
    id: 'd0a',
  },
  {
    title: 'Опыт работы.',
    text: `Его мало. 3 месяца я работал в небольшой веб-студии. 
      За это время сверстал интернет-магазин из тридцати страниц и написал часть 
      скриптов для него за месяц, также сделал пару landing-ов.`,
    img: work,
    alt: 'Картинка программист',
    isReversed: true,
    id: 'd1b',
  },
  {
    title: 'Личностные качества.',
    text: `Я усидчивый и старательный - на прошлой работе один проект 
      сделал без перерывов, чтобы успеть к дедлайну. Также аккуратный и прилежный ученик - 
      в школе средний балл был равен 4,75, а техникум закончил с красным дипломом. 
      Из минусов отмечу, что я привыкаю к людям и новой обстановке пару недель, 
      а общение дается мне непросто.`,
    img: quality,
    alt: 'Картинка работа мозга',
    isReversed: false,
    id: 'd2c',
  },
];

export default DESCRIPTION_DATA;