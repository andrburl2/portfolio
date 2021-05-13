import React, { Component } from 'react';
import './contacts.css';

export default class Contacts extends Component {
  render() {
    return (
      <section className="contacts" id="contacts">
        <div className="contacts__container">
          <h2 className="contacts__title">Контакты</h2>
  
          <p className="contacts__text">
            GitHub: <a href="https://github.com/andrburl2" className="contacts__link" target="_blank" rel="noopener noreferrer" title="Мой профиль в Github">github.com</a>
          </p>
          <p className="contacts__text">
            Почта: <a href="mailto:andrburl2@yandex.ru" className="contacts__link" title="Моя почта для связи">andrburl2@yandex.ru</a>
          </p>
          <p className="contacts__text">
            Telegram: <a href="https://t.me/andrburl2" className="contacts__link" target="_blank" rel="noopener noreferrer" title="Telegram">andrburl2</a>
          </p>
          <p className="contacts__text">
            Телефон: <a href="tel:+79524413698" className="contacts__link" title="Мой номер телефона">89524413698</a>
          </p>
        </div>

        <div className="contacts__container">
          <h2 className="contacts__title">Соцсети</h2>

          <a href="https://vk.com/andrburl2"
            className="contacts__link"
            target="_blank"
            rel="noopener noreferrer"
            title="ВКонтакте">
            ВКонтакте
          </a>
          <a href="https://www.facebook.com/andrburl2"
            className="contacts__link"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook">
            Facebook
          </a>
          <a href="https://www.instagram.com/andrburl2/"
            className="contacts__link"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram">
            Instagram
          </a>
        </div>
      </section>
    )
  }
}