import React from 'react';
import {useEffect, useRef, useState, useContext} from "react";

const Form = (setInputValue) => {
    // const valueContext = useContext();
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    // const [inputValue, setInputValue] = useState('')
    // console.log(inputValue, 'inputValue')

    return(
    <form className="header-form" action="">
        <input className="header-input" placeholder="Поиск по названию картины"
               ref={inputRef}
               onChange={(event)=>setInputValue(event.target.value)}/>
        <button className="headline-btn" type="submit">Найти</button>
    </form>
)};

export default Form;