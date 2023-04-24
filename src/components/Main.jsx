import React, {useState} from 'react';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
// import {useContext} from "react";
// import {valueContext} from "../App";

const Main = (searchName) => {
    // const searchName = useContext(valueContext)
    const [pictureInfo] =
        useState([{
        id: 1,
        img: pic1,
        pictureName:'Рождение Венеры',
        author:'Сандро Боттичелли',
        oldPrice: '2 000 000 $',
        newPrice: '1 000 000 $'},
        {
        id: 2,
        img: pic2,
        pictureName:'Тайная вечеря',
        author:'Леонардо да Винчи',
        oldPrice: null,
        newPrice: '3 000 000 $',
        },
        {
        id: 3,
        img: pic3,
        pictureName:'Сотворение Адама',
        author:'Микеланджело',
        oldPrice: '6 000 000 $',
        newPrice: '5 000 000 $',
        },
        {
        id: 4,
        img: pic4,
        pictureName:'Урок анатомии',
        author:'Рембрандт',
        oldPrice: null,
        newPrice: null,
        }])
    // console.log(pictureInfo,'picture')
    const currentPicture = pictureInfo && pictureInfo.filter((picture) =>
        picture.pictureName !== searchName);
    return(
    <section className="main">
        <div className="container">
            <h1 className="title">Картины эпохи Возрождения</h1>
            <ul className="picture-list">
                {currentPicture && currentPicture.map((picture) =>{
                        return(<li id={picture.id} key={picture.id} className="picture-item" onClick={()=> console.log('click')}>
                            <img src={picture.img} alt="Рождение Венеры"/>
                            <a className="picture-link" href="#"/>
                            <h2 className="picture-name">{`«${picture.pictureName}» ${picture.author}`}</h2>
                            <h3 className="old-price">{picture.oldPrice}</h3>
                            <h3 className="new-price">{picture.newPrice}</h3>
                            <button className="picture-btn" type="button">Купить</button>
                        </li>)
                    // return(<li id={picture.id} key={picture.id} className="picture-item" onClick={()=> console.log('click')}>
                    //     <img src={picture.img} alt="Рождение Венеры"/>
                    //     <a className="picture-link" href="#"/>
                    //     <h2 className="picture-name">{`«${picture.pictureName}» ${picture.author}`}</h2>
                    //     <h3 className="old-price">{picture.oldPrice}</h3>
                    //     <h3 className="new-price">{picture.newPrice}</h3>
                    //     <button className="picture-btn" type="button">Купить</button>
                    // </li>)
                })}
                {/*<li id="1" className="picture-item" onClick={()=> console.log('click')}>*/}
                {/*    <img src={pic1} alt="Рождение Венеры"/>*/}
                {/*    <a className="picture-link" href="#"/>*/}
                {/*    <h2 className="picture-name">«Рождение Венеры» Сандро Боттичелли</h2>*/}
                {/*    <h3 className="old-price">2 000 000 </h3>*/}
                {/*    <h3 className="new-price">1 000 000 $</h3>*/}
                {/*    <button className="picture-btn" type="button">Купить</button>*/}
                {/*</li>*/}
                {/*<li id="2" className="picture-item">*/}
                {/*    <img src={pic2} alt="Тайная вечеря"/>*/}
                {/*    <a className="picture-link" href="#"/>*/}
                {/*    <h2 className="picture-name">«Тайная вечеря»  Леонардо да Винчи</h2>*/}
                {/*    <h3 className="new-price undiscouted">3 000 000 $</h3>*/}
                {/*    <button className="picture-btn" type="button">Купить</button>*/}
                {/*</li>*/}
                {/*<li id="3" className="picture-item">*/}
                {/*    <img src={pic3} alt="Сотворение Адама"/>*/}
                {/*    <a className="picture-link" href="#"/>*/}
                {/*    <h2 className="picture-name">«Сотворение Адама» Микеланджело</h2>*/}
                {/*    <h3 className="old-price">6 000 000 $</h3>*/}
                {/*    <h3 className="new-price">5 000 000 $</h3>*/}
                {/*    <button className="picture-btn" type="button">Купить</button>*/}
                {/*</li>*/}
                {/*<li id="4" className="picture-item disabled">*/}
                {/*    <img src={pic4} alt="Урок Анатомии"/>*/}
                {/*    <a className="picture-link" href="#"/>*/}
                {/*    <h2 className="picture-name">«Урок анатомии»  Рембрандт</h2>*/}
                {/*    <h3 className="sold">Продана на аукционе</h3>*/}
                {/*</li>*/}
            </ul>
        </div>
    </section>
)}
export default Main;