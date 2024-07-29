import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">WOODKEY</h1>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="/">Головна</a>
          </li>
          <li>
            <a href="/about">О компанії</a>
          </li>
          <li>
            <a href="/contacts">Наші роботи</a>
          </li>
          <li>
            <a href="/contacts">Контакти</a>
          </li>
        </ul>
      </nav>
      <div className="header__lang">Lang switch</div>
    </header>
  );
};

export default Header;
