import React from 'react';
import phone from "../images/phone.svg";

const Footer = () => (
    <header className="footer">
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
                    <li className="menu-item-footer">
                        <a className="img">
                            <img className="phone-img" src={phone} alt="Телефон"/>
                        </a>
                        <a className="phone" href="tel:+78125555555">+7 (812) 555-55-55</a>
                    </li>
                    <li className="menu-item-footer">
                        <p className="address">г. Санкт-Петербург, ул. Ефимова, 3</p>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);
export default Footer;