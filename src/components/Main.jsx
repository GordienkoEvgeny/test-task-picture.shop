import React from 'react';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';

const Main = () => (
    <section className="main">
        <div className="container">
            <h1 className="title">Картины эпохи Возрождения</h1>
            <ul className="picture-list">
                <li id="1" className="picture-item">
                    <img src={pic1} alt="Рождение Венеры"/>
                    <a className="picture-link" href="#"/>
                    <h2 className="picture-name">«Рождение Венеры» Сандро Боттичелли</h2>
                    <h3 className="old-price">2 000 000 $</h3>
                    <h3 className="new-price">1 000 000 $</h3>
                    <button className="picture-btn" type="button">Купить</button>
                </li>
                <li id="2" className="picture-item">
                    <img src={pic2} alt="Тайная вечеря"/>
                    <a className="picture-link" href="#"/>
                    <h2 className="picture-name">«Тайная вечеря»  Леонардо да Винчи</h2>
                    <h3 className="new-price">3 000 000 $</h3>
                    <button className="picture-btn" type="button">Купить</button>
                </li>
                <li id="3" className="picture-item">
                    <img src={pic3} alt="Сотворение Адама"/>
                    <a className="picture-link" href="#"/>
                    <h2 className="picture-name">«Сотворение Адама» Микеланджело</h2>
                    <h3 className="old-price">6 000 000 $</h3>
                    <h3 className="new-price">5 000 000 $</h3>
                    <button className="picture-btn" type="button">Купить</button>
                </li>
                <li id="4" className="picture-item-sold">
                    <img src={pic4} alt="Урок Анатомии"/>
                    <a className="picture-link" href="#"/>
                    <h2 className="picture-name">«Урок анатомии»  Рембрандт</h2>
                    <h3 className="sold">Продана на аукционе</h3>
                </li>
            </ul>
        </div>
    </section>
)
export default Main;