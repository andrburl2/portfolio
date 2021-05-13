import React, { Component } from 'react';
import logo from '../../images/code_logo.svg';
import './footer.css';

class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <img src={logo} alt="Лого" className="footer__logo"/>

        <div className="footer__container">
          <p className="footer__text">
            Иконки сделаны <a
              className="footer__link"
              href="https://www.freepik.com"
              title="Freepik"
              target="_blank"
              rel="noopener noreferrer"
            >Freepik</a><br />
            и взяты с <a
              className="footer__link"
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noopener noreferrer"
            >www.flaticon.com</a>
          </p>

          <p className="footer__text">
            Шрифт "Montserrat" создан<br />
            Julieta Ulanovsky<br />
            <a
              className="footer__link"
              href="https://fontstorage.com/ru/font/julieta-ulanovsky/montserrat"
              title="Ссылка на шрифт"
              target="_blank"
              rel="noopener noreferrer"
            >
              fontstorage.com
            </a>
          </p>
        </div>

        <p className="footer__author">&copy; Бурлаков Андрей. 2021</p>
      </footer>
    )
  }
}

export default Footer;