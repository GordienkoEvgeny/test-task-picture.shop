import React, {useState} from 'react';
import modalimg1 from '../images/modalimg1.jpg';
import modalimg2 from '../images/modalimg2.jpg';
import modalimg3 from '../images/modalimg3.jpg';
import modalimg4 from '../images/modalimg4.jpg';

const Modal = ({active, setModalIsOpen}) => {
    const images = [modalimg4, modalimg3, modalimg2, modalimg1];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const previousSlide = () => {
        const lastIndex = images.length - 1;
        const isLastIndex = currentImageIndex === 0;
        setCurrentImageIndex(isLastIndex ? lastIndex : currentImageIndex - 1);
    };
    const nextSlide = () => {
        const lastIndex = images.length - 1;
        const isLastIndex = currentImageIndex === lastIndex;
        setCurrentImageIndex(isLastIndex ? 0 : currentImageIndex + 1);
    };

    return(
    <div className={active ? "modal active" : "modal"} onClick={()=> setModalIsOpen(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <div className="modal-title">
                    <h2>«Рождение Венеры» Сандро Боттичелли</h2>
                </div>
            </div>
            <div className="modal-img">
                <div className="slider">
                    <div className="slider-content">
                        <img src={images[currentImageIndex]} alt="Slider" />
                    </div>
                    <div className="slider-controls">
                        <button className="next-btn" onClick={previousSlide}>
                            <h1>❱</h1>
                        </button>
                        <button className="previous-btn" onClick={nextSlide}>
                            <h1>❰</h1>
                        </button>
                    </div>
                </div>
            </div>
            <div className="modal-body">
                <h3>«Рождение Венеры» 1482—1486 г. (итал. Nascita di Venere) — картина итальянского
                    художника тосканской школы Сандро Боттичелли.
                    Представляет собой живопись темперой на холсте размером
                    172,5 × 278,5 см.</h3>
            </div>
            <div className="price">
                <h2> Цена: 1 000 000 $</h2>
            </div>
        </div>
    </div>
)};

export default Modal;