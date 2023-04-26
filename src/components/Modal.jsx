import React, {useState} from 'react';
import BirthOfVenus1 from '../images/BirthOfVenus/modalimg1.jpg';
import BirthOfVenus2 from '../images/BirthOfVenus/modalimg2.jpg';
import BirthOfVenus3 from '../images/BirthOfVenus/modalimg3.jpg';
import BirthOfVenus4 from '../images/BirthOfVenus/modalimg4.jpg';
import lastSupper1 from '../images/lastSupper/ModallMG1.jpg';
import lastSupper2 from '../images/lastSupper/ModalIMG2.jpg';
import lastSupper3 from '../images/lastSupper/ModalIMG3.jpg';
import lastSupper4 from '../images/lastSupper/ModalIMG4.jpg';
import Michelangelo1 from '../images/CreationOfAdam/Mickelangelo1.jpg';
import Michelangelo2 from '../images/CreationOfAdam/Mickelangelo2.jpg';
import Michelangelo3 from '../images/CreationOfAdam/Mickelangelo3.jpg';
import Michelangelo4 from '../images/CreationOfAdam/Mickelangelo4.jpg';
import Rembrandt1 from '../images/AnatomyLesson/Rembrandt1.jpg';
import Rembrandt2 from '../images/AnatomyLesson/Rembrandt2.jpg';
import Rembrandt3 from '../images/AnatomyLesson/Rembrandt3.jpg';
import Rembrandt4 from '../images/AnatomyLesson/Rembrandt4.jpg';

const Modal = ({active, setModalIsOpen, currentImageData}) => {
    const imagesBirthOfVenus = [BirthOfVenus4, BirthOfVenus3, BirthOfVenus2, BirthOfVenus1];
    const lastSupper = [lastSupper4, lastSupper2, lastSupper1 , lastSupper3];
    const creationOfAdam = [Michelangelo4, Michelangelo3, Michelangelo1, Michelangelo2];
    const anatomyLesson = [Rembrandt1, Rembrandt2, Rembrandt3, Rembrandt4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    let images = null;

    switch (currentImageData.pictureName){
        case 'Тайная вечеря':
            images = lastSupper;
            break;
        case 'Рождение Венеры':
            images = imagesBirthOfVenus;
            break
        case 'Сотворение Адама':
            images = creationOfAdam;
            break;
        default:
            images = anatomyLesson;
    }
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
                    <h2>{`«${currentImageData.pictureName}» ${currentImageData.author}`}</h2>
                </div>
            </div>
            <div className="modal-slider">
                <div className="slider">
                    <div className="slider-content">
                        <img className="modal-img" src={images[currentImageIndex]} alt={currentImageData.pictureName} />
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
                <h3>{`${currentImageData.description}`}</h3>
            </div>
            <div className="price">
                <h2> {`Цена: ${currentImageData.newPrice ? currentImageData.newPrice : 'Продана на аукционе'}`}</h2>
            </div>
        </div>
    </div>
)};

export default Modal;