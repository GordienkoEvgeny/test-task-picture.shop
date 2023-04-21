import React from 'react';

const Header = () =>(
    <header className="header">
        <div className="container">
            <nav className="nav">
                <ul className="menu">
                    <li className="menu-item">
                        <a href="#" className="menu-link">Каталог</a>
                    </li>
                    <li className="menu-item">
                        <a href="#" className="menu-link">Доставка</a>
                    </li>
                    <li className="menu-item">
                        <a href="#" className="menu-link">Оплата</a>
                    </li>
                    <li className="menu-item">
                        <a href="#" className="menu-link">Контакты</a>
                    </li>
                    <li className="menu-item">
                        <a href="#" className="menu-link">О компании</a>
                    </li>
                </ul>
                <form className="header-form" action="">
                   <input className="header-input" placeholder="Поиск по названию картины"/>
                   <button className="headline-btn" type="submit">Найти</button>
                </form>
            </nav>
        </div>
        <div className="header-line"/>
    </header>
);
export default Header;