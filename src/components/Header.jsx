import React from 'react';
import Form from  './Form';

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
                <Form/>
            </nav>
        </div>
        <div className="header-line"/>
    </header>
);
export default Header;