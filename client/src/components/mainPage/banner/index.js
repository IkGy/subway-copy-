import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slide1 from './images/slide1.png';
import Slide2 from './images/slide2.png';
import Slide3 from './images/slide3.png';
import Map from './icons/icon_map.png';
import Ask from './icons/icon_ask.png';


import './top.css';

const images = [Slide1, Slide2, Slide3];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="top_secction">
                <div className='top_slider'>
                    {images.map((image, index) => (
                        <img 
                            key={index}
                            className={`top_slide ${index === currentIndex ? 'active' : ''}`}
                            src={image}
                            alt={`이미지 ${index + 1}`}
                        />
                    ))}
                </div>
                <div className='quick_link'>
                    <div className='quick_link_content'>
                        <Link to ='/'>
                            <div className="store">
                                <div className="store_section">
                                    <div className='link_section'>
                                        <img src={Map} alt="매장찾기"/>매장찾기     
                                    </div> 
                                </div>
                            </div>
                        </Link>
                        <Link to ='/'>
                            <div className="ask">
                                <div className="ask_section">
                                    <div className='link_section'>
                                        <img src={Ask} alt="가맹신청"/>가맹신청 문의     
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
