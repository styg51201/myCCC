import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './css/all.scss'
import './css/home.scss'

import FeaturedProducts from './components/FeaturedProducts'
import Collection from './components/Collection'

function Home(){
    return(
        <>
            <section className="bk-home-slider">
                <div className='bk-slides'>
                    <img src="./biki-img/geronimo-giqueaux-ahPZamckL7A-unsplash.jpg" />
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
                            ---->
                        </div>
                        <div className="bk-arrow-l">
                            >----
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
                        <FeaturedProducts />
                        <FeaturedProducts />
                        <FeaturedProducts />
                        <FeaturedProducts />
                        <Col>
                            <div className="bk-featured-product-item bk-box">
                                <div className="bk-box-content">
                                    <h3>FEATURED PRODUCTS</h3>
                                    <h6 className="bk-white">精選商品</h6>
                                    <button className="bk-btn-white">瀏覽商品</button>
                                </div>
                            </div>
                        </Col>
                        <FeaturedProducts />
                        <FeaturedProducts />
                        <FeaturedProducts />
                        <FeaturedProducts />
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