import React from 'react';
import {useEffect, useRef, useState, useContext} from "react";
import {ValueContext} from "../App";

const Form = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const value = useContext(ValueContext);
    return(
        <form className="header-form" action="">
            <input className="header-input" placeholder="Поиск по названию картины"
                   ref={inputRef}
                   onChange={(event)=>value.setInputValue(event.target.value)}/>
            <button className="headline-btn" type="submit" >Найти</button>
    </form>
)};

export default Form;