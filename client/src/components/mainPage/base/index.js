import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import BaseTopImg2 from './images/top_02.png';
import Btm_Data from './data/btm_data';
import Ads_Data from './data/ads_data';
import QM_Data from './data/qm_data';

import './base.css';

const Base = () => {

    const [adChange, setAdChange] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAdChange(prevAd => (prevAd + 1) % Ads_Data.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className="base_base">
                <div className="base_all">
                    <div className="base_section">
                        <div className="base_info">
                            {/* 이용 방법 */}
                            <div className="base_top_info_1">
                                <div className="base_top_info_1_detail">
                                    써브웨이를
                                    <br />
                                    제데로 즐기는 방법 !
                                </div>
                                <div className="base_top_button">
                                    <Link to="/" className="base_top_1_info_button">
                                        <span>이용방법</span>
                                    </Link>
                                </div>
                            </div>
                            {/* 역사 */}
                            <div className="base_top_info_2">
                                <img src={BaseTopImg2} alt="역사" />
                                <div className="base_top_info_2_detail">
                                    50년 역사를 가진
                                    <br />
                                    No.1 프랜차이즈의 성장기
                                </div>
                                <div className="base_top_button">
                                    <Link to="/" className="base_top_2_info_button">
                                        <span>서브웨이 역사</span>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="base_bottom">
                        <div className="base_btm_section_1">
                            <div className="base_btm_info_1">
                                <h2>What's New</h2>
                                <p>
                                    써브웨이의 다양한 소식을
                                    <br />
                                    빠르게 전달해드립니다.
                                </p>
                            </div>
                            <div className="base_btm_info_2">
                                {Btm_Data.map((item) => (
                                    <div key={item.id} className="base_btm_info_contents">
                                        <Link to={item.path}>
                                            {item.text}
                                        </Link>
                                    </div>
                                ))}
                                <div className="base_btm_info_more">
                                    <Link to="/">더보기</Link>
                                </div>
                            </div>
                        </div>
                        <div className="base_btm_info_3">
                            <div className="base_slider">
                                <div className="base_slider">
                                    {Ads_Data.map((ads, index) => (
                                        <img 
                                            key={index}
                                            className={`base_slide ${index === adChange ? 'active' : ''}`}
                                            src={ads.img}
                                            alt={`이미지 ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quick_menu">
                        <div className="qm_info">
                            {QM_Data.map((item) => (
                                <Link key={item.id} to={item.path}>
                                    <div className="btm_qm">
                                        <div className="btm_qm_info">
                                            <div className="btm_qms">
                                                <img
                                                    src={item.img}
                                                    alt={item.alt}
                                                    />
                                                <strong>{item.title}</strong>
                                                <span>{item.text}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Base;