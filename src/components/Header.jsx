import React from 'react';
import Form from  './Form';

const Header = (items, setInputValue) =>{
    console.log(items,'items');
    return(
    <header className="header">
        <div className="container">
            <nav className="nav">
                <ul className="menu">
                    {items && items.items.map((item, index)=>{
                        return(
                            <li className="menu-item">
                                <a href="#" key={index} className="menu-link">{item}</a>
                            </li>)
                    })}
                </ul>
                <Form setInputValue={setInputValue}/>
            </nav>
        </div>
        <div className="header-line"/>
    </header>
)};
export default Header;