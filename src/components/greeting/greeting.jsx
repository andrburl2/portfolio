import React, { Component } from 'react';
import me from '../../images/me.jpg';
import './greeting.css';

export default class Greeting extends Component {
  render() {
    return (
      <section className="greeting">
        <div className="greeting__container">
          <img src={me} className="greeting__img" alt="Моя фотография" />

          <h1 className="greeting__title">
            Привет, меня зовут<br />Андрей Бурлаков.<br />Я начинающий<br />веб-разработчик.
          </h1>
        </div>
      </section>
    )
  }
}