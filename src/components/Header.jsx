import React from 'react';
import Form from "./Form";

const Header = (items) =>{
    return(
    <header className="header">
        <div className="container">
            <nav className="nav">
                <ul className="menu">
                    {items && items.items.map((item, index)=>{
                        return(
                        <li className="menu-item" key={index}>
                            <a href="#"  className="menu-link">{item}</a>
                        </li>)
                    })}
                </ul>
                <Form/>
            </nav>
        </div>
        <div className="header-line"/>
    </header>
)};
export default Header;