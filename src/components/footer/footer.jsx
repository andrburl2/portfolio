import React, { PureComponent } from 'react';
import './footer.css';
import { CONTACTS_DATA, SOCIAL_MEDIA_DATA } from '../../data/footerData';

import logo from '../../images/code_logo.svg';

import Link from '../Link/Link';

class Footer extends PureComponent {
  render() {
    return (
      <footer className='footer' id='footer'>

        <div className='footer__container'>
          <h2 className='footer__title'>Контакты</h2>

          {CONTACTS_DATA.map(el => {
            return <Link data={el} key={el.id} />
          })}
        </div>

        <div className='footer__container'>
          <h2 className='footer__title'>Соцсети</h2>

          {SOCIAL_MEDIA_DATA.map(el => {
            return <Link data={el} key={el.id} />
          })}
        </div>
      
        <div className='footer__container'>
          <img src={logo} alt='Лого' className='footer__logo'/>

          <p className='footer__text'>
            Автор иконок<br /> 
            <a
              className='footer__link'
              href='https://www.freepik.com'
              title='Freepik'
              target='_blank' rel='noopener noreferrer'
            >
              Freepik
            </a>
          </p>

          <p className='footer__text'>
            Автор шрифта 'Montserrat'<br />
            <a
              className='footer__link'
              href='https://fontstorage.com/ru/foundry/julieta-ulanovsky'
              title='Ссылка на шрифт'
              target='_blank' rel='noopener noreferrer'
            >
              Julieta Ulanovsky
            </a>
          </p>

          <p className='footer__text'>&copy; Бурлаков Андрей. 2022</p>
        </div>

      </footer>
    )
  }
}

export default Footer;