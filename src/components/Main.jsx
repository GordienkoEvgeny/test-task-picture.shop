import React, {useState} from 'react';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import {useContext} from "react";
import {ValueContext} from "../App";
import cn from 'classnames';
import ViewModal from "./Modal";

const Main = () => {
    const searchName = useContext(ValueContext);
    const [renderId, setRenderId] = useState(1);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImageData, setCurrentImageData] = useState('');
    const [pictureInfo] =
        useState([{
        id: 1,
        img: pic1,
        pictureName:'Рождение Венеры',
        author:'Сандро Боттичелли',
        description: `«Рождение Венеры» 1482—1486 г. (итал. Nascita di Venere) — картина
                      итальянскогохудожника тосканской школы Сандро Боттичелли.
                      Представляет собой живопись темперой на холсте размером
                      172,5 × 278,5 см.`,
        oldPrice: '2 000 000 $',
        newPrice: '1 000 000 $',
        inBasket: 'Купить',
        },
        {
        id: 2,
        img: pic2,
        pictureName:'Тайная вечеря',
        author:'Леонардо да Винчи',
        description: `«Тáйная вéчеря» 1495—1498 г. (итал. Il Cenacolo или L'Ultima Cena) — событие
                      новозаветной истории, последняя трапеза Иисуса Христа со своими
                      двенадцатью ближайшими учениками.`,
        oldPrice: null,
        newPrice: '3 000 000 $',
        inBasket: 'Купить',
        },
        {
        id: 3,
        img: pic3,
        pictureName:'Сотворение Адама',
        author:'Микеланджело',
        description: `«Сотворение Адама» (итал. La creazione di Adamo) — фреска Микеланджело,
                      написанная около 1511 года. Фреска является четвёртой из девяти
                      центральных композиций потолка Сикстинской капеллы,
                      посвящённых девяти сюжетам книги Бытия.`,
        oldPrice: '6 000 000 $',
        newPrice: '5 000 000 $',
        inBasket: 'Купить',
        },
        {
        id: 4,
        img: pic4,
        pictureName:'Урок анатомии',
        author:'Рембрандт',
        description: `«Урок анатомии доктора Тульпа» — картина Рембрандта, написанная в 1632 году.
                      Центральная фигура картины — доктор Николас Тульп,
                      который показывает собравшимся устройство мускулатуры руки человека.`,
        oldPrice: null,
        newPrice: null,
        inBasket: 'Купить',
        }])
    const handleModalIsOpen = () => {
        setModalIsOpen(true);
    };
    const handleModalClose = () => {
        setModalIsOpen(false);
    }
    const currentPicture = pictureInfo && pictureInfo.filter((picture) =>
        picture.pictureName.toLowerCase().includes(searchName.inputValue.toLowerCase()));
    return(
    <section className="main">
        <div className="container">
            <h1 className="title">Картины эпохи Возрождения</h1>
            <ul className="picture-list">
                {currentPicture && currentPicture.map((picture) =>{
                        const classPictureItem = cn('picture-item', {disabled: !picture.newPrice});
                        const classNewPrice = cn(picture.newPrice ? 'new-price' : 'sold');
                        const classBtn = cn(`picture-btn headline-btn-bg-changed`);
                        return(<li id={picture.id} key={picture.id} className={classPictureItem}>
                            <img className="picture-img" src={picture.img} alt="Рождение Венеры" onClick={()=>{
                                setCurrentImageData(picture);
                                handleModalIsOpen()}}/>
                            <a className="picture-link" href="#"/>
                            <h2 className="picture-name">{`«${picture.pictureName}» ${picture.author}`}</h2>
                            <h3 className="old-price">{picture.oldPrice}</h3>
                            <h3 className={classNewPrice}>{picture.newPrice ? picture.newPrice : 'Продана на аукционе'}</h3>
                            {picture.newPrice ? <button
                                className = {localStorage.getItem(`key${picture.id}`) === '✔ в корзине' ? classBtn : `picture-btn`}
                                type="button"
                                onClick={()=>{
                                    console.log(renderId);
                                        setRenderId(renderId + 1);
                                    if(localStorage.getItem(`key${picture.id}`) === '✔ в корзине'){
                                        localStorage.removeItem(`key${picture.id}`)
                                        setRenderId(renderId + 1);
                                    } else {
                                        setRenderId(renderId + 1);
                                        localStorage.setItem(`key${picture.id}`, '✔ в корзине' );
                                    }
                                }}>
                                <span className="loader"></span>
                                {localStorage.getItem(`key${picture.id}`) || picture.inBasket}</button> : null}
                        </li>)
                })}
            </ul>
        </div>
        <ViewModal active={modalIsOpen} setModalIsOpen={setModalIsOpen} currentImageData={currentImageData}/>
    </section>
)}
export default Main;