import React, { PureComponent } from 'react';
import './footer.css';

import logo from '../../images/code_logo.svg';
import githubIcon from '../../images/icon/github.png';
import mailIcon from '../../images/icon/mail.png';
import tgIcon from '../../images/icon/telegram.png';
import phoneIcon from '../../images/icon/phone.png';
import vkIcon from '../../images/icon/vk.png';
import fbIcon from '../../images/icon/facebook.png';
import instIcon from '../../images/icon/instagram.png';

class Footer extends PureComponent {
  render() {
    return (
      <footer className='footer' id='footer'>
        <div className='footer__container'>
          <h2 className='footer__title'>Контакты</h2>
  
          <a href='https://github.com/andrburl2'
            className='footer__link footer__link_type_contact'
            target='_blank' rel='noopener noreferrer'
            title='Мой профиль в Github'
          >
            <img src={githubIcon} alt='Иконка github' className='footer__icon' />
            Github
          </a>
          <a href='mailto:andrburl2@yandex.ru'
            className='footer__link footer__link_type_contact'
            title='Моя почта для связи'
          >
            <img src={mailIcon} alt='Почта' className='footer__icon' />
            andrburl2@yandex.ru
          </a>
          <a href='https://t.me/andrburl2'
            className='footer__link footer__link_type_contact'
            target='_blank' rel='noopener noreferrer'
            title='Telegram'
          >
            <img src={tgIcon} alt='Иконка Telegram' className='footer__icon' />
            Telegram
          </a>
          <a href='tel:+79524413698'
            className='footer__link footer__link_type_contact'
            title='Мой номер телефона'
          >
            <img src={phoneIcon} alt='Телефон' className='footer__icon' />
            89524413698
          </a>
        </div>

        <div className='footer__container'>
          <h2 className='footer__title'>Соцсети</h2>

          <a href='https://vk.com/andrburl2'
            className='footer__link footer__link_type_contact'
            target='_blank' rel='noopener noreferrer'
            title='ВКонтакте'
          >
            <img src={vkIcon} alt='Иконка Вконтакте' className='footer__icon' />
            ВКонтакте
          </a>
          <a href='https://www.facebook.com/andrburl2'
            className='footer__link footer__link_type_contact'
            target='_blank' rel='noopener noreferrer'
            title='Facebook'
          >
            <img src={fbIcon} alt='Иконка Facebook' className='footer__icon' />
            Facebook
          </a>
          <a href='https://www.instagram.com/andrburl2/'
            className='footer__link footer__link_type_contact'
            target='_blank' rel='noopener noreferrer'
            title='Instagram'
          >
            <img src={instIcon} alt='Иконка Instagram' className='footer__icon' />
            Instagram
          </a>
        </div>
      
        <div className='footer__container'>
          <img src={logo} alt='Лого' className='footer__logo'/>

          <p className='footer__text'>
            Иконки сделаны <a
              className='footer__link'
              href='https://www.freepik.com'
              title='Freepik'
              target='_blank' rel='noopener noreferrer'
            >Freepik</a><br />
            и взяты с <a
              className='footer__link'
              href='https://www.flaticon.com/'
              title='Flaticon'
              target='_blank' rel='noopener noreferrer'
            >www.flaticon.com</a>
          </p>

          <p className='footer__text'>
            Шрифт 'Montserrat' создан<br />
            Julieta Ulanovsky<br />
            <a
              className='footer__link'
              href='https://fontstorage.com/ru/font/julieta-ulanovsky/montserrat'
              title='Ссылка на шрифт'
              target='_blank' rel='noopener noreferrer'
            >
              fontstorage.com
            </a>
          </p>

          <p className='footer__author'>&copy; Бурлаков Андрей. 2021</p>
        </div>
      </footer>
    )
  }
}

export default Footer;