import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './css/all.scss'
import './css/home.scss'
import 'animate.css/animate.min.css'

import FeaturedProducts from './components/FeaturedProducts'
import Collection from './components/Collection'

function Home(){

    const handleScroll = (evt)=>{

    }

    return(
        <>
            <section className="bk-home-slider">
                <div className='bk-mouse animated fadeIn' onScroll={handleScroll}>
                    <div className='bk-mouse-ball animated fadeOutDown infinite'></div>
                </div>
                <div className='bk-slides' style={{
                    background: `url('./biki-img/josh-nuttall-uNQ-TTg_qNY-unsplash.jpg') center center`,
                    backgroundSize: 'cover'
                }}>
                    <div className='bk-slide-content'>
                        Hello~
                    </div>
                </div>
            </section>
            <Container>
                <section className="bk-ads">
                    <div className="bk-ad-block">
                        <div className="bk-block-num">
                            #1
                        </div>
                        <div className="bk-block-text">
                            <span className="bk-h3">
                                NEW IN 
                            </span>
                            <span className="bk-h5">
                                新品上市
                            </span>
                        </div>
                    </div>
                    <Row className="bk-ad-slide">
                        <Col lg={10} className="bk-ad">
                        </Col>
                        <Col lg={4} className="bk-ad-text">
                            <h3>Title</h3>
                            <h6 className="bk-white">Subtitle</h6>
                            <p>
                            context context context
                            </p>
                            <button className="bk-btn-white">BUTTON HERE</button>
                        </Col>
                    </Row>
                    <div className="bk-arrows">
                        <div className="bk-arrow-r">
                            <img src='./biki-img/arrowLeft.svg' />
                        </div>
                        <div className="bk-arrow-l">
                        <img src='./biki-img/arrowRight.svg' />
                        </div>
                    </div>
                    <div className="bk-ad-list-buttons">
                        <ul>
                            <li><a></a></li>
                            <li><a></a></li>
                            <li><a></a></li>
                        </ul>
                    </div>
                </section>
            </Container>
            <section className="bk-featured-products">
                <Container>
                    <Row className='bk-featured-wrapper row-cols-xl-3 row-cols-md-2 row-cols-1'>
                        <FeaturedProducts 
                            img={`./chin-img/images/SONY 重低音降噪藍牙耳罩式耳機 WH-XB900N/0.jpg`}
                        />
                        <FeaturedProducts 
                            img={`./chin-img/images/繽特力 Plantronics Voyager 6200UC 雙向降噪藍牙耳機 白色/0.jpg`}
                        />
                        <FeaturedProducts 
                            img={`./chin-img/images/GoPro-HERO8 Black全方位運動攝影機 單車騎士升級組/0.jpg`}
                        />
                        <FeaturedProducts 
                            img={`./chin-img/images/Mavic Mini 充電管家/0.jpg`}
                        />
                        <Col>
                            <div className="bk-featured-product-item bk-box">
                                <div className="bk-box-content">
                                    <h3>FEATURED PRODUCTS</h3>
                                    <h6 className="bk-white">精選商品</h6>
                                    <button className="bk-btn-white">瀏覽商品</button>
                                </div>
                            </div>
                        </Col>
                        <FeaturedProducts 
                            img={`./chin-img/images/小米手環34 腕帶 替換帶 尼龍編織回環式錶帶 透氣舒適 運動智能錶帶/0.jpg`}
                        />
                        <FeaturedProducts 
                            img={`./chin-img/images/HTR 螺旋槳4726F 金銀槳 For Mavic Mini/0.jpg`}
                        />
                        <FeaturedProducts 
                            img={`./chin-img/images/SONY 運動藍牙入耳式耳機 WI-SP500/0.jpg`}
                        />
                        <FeaturedProducts 
                            img={`./chin-img/images/Holy Stone HS210 迷你遙控飛機-三電版/0.jpg`}
                        />
                    </Row>
                </Container>
            </section>
            <Collection 
            theme="white" 
            title="WEARIBLE DEVICES" 
            titleCn="穿戴式裝置" 
            info={<>穿戴式裝置的說明文<br />asdfasdfqwerasdovijwoiej;flkan;vjkhaiuwher;olek</>} 
            img="asdf" 
            bg="./biki-img/geronimo-giqueaux-ahPZamckL7A-unsplash.jpg" />

            <Collection 
            theme="blue" 
            title="WEARIBLE DEVICES" 
            titleCn="穿戴式裝置" 
            info={<>穿戴式裝置的說明文<br />asdfasdfqwerasdovijwoiej;flkan;vjkhaiuwher;olek</>} 
            img="asdf" 
            bg="./biki-img/geronimo-giqueaux-ahPZamckL7A-unsplash.jpg" />  

            <Collection 
            theme="orange" 
            title="WEARIBLE DEVICES" 
            titleCn="穿戴式裝置" 
            info={<>穿戴式裝置的說明文<br />asdfasdfqwerasdovijwoiej;flkan;vjkhaiuwher;olek</>} 
            img="asdf" 
            bg="./biki-img/geronimo-giqueaux-ahPZamckL7A-unsplash.jpg" />
        </>
    )
}

export default Home