import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import '../index.css';

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    const navigate = useNavigate();
    return(
        <>
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src="/img/windows.png" alt="Slide 1" className="slider-image" />
                </div>
                <div>
                    <img src="/img/windows.png" alt="Slide 2" className="slider-image" />
                </div>
                <div>
                    <img src="/img/windows.png" alt="Slide 3" className="slider-image" />
                </div>
            </Slider>
        </div>
        </>
    );
}

export default Sliders;