import React from 'react';
import phone from "../images/phone.svg";

const Footer = (items) => (
    <header className="footer">
        <div className="container">
            <nav className="nav-footer">
                <ul className="menu-footer">
                    {items && items.items.map((item, index)=>{
                        return(
                            <li className="menu-item" key={index}>
                                <a href="#" className="menu-link">{item}</a>
                            </li>)
                    })}
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