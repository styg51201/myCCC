import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './css/all.css'
import './css/home.css'

import FeaturedProducts from './components/FeaturedProducts'

function Home(){
    return(
        <>
            <div className="bk-home-slider">
            </div>
            <Container>
                <div className="bk-ads">
                    <div className="bk-ad-block">
                        <div className="bk-block-num">
                            #1
                        </div>
                        <div className="bk-block-text">
                            <span class="bk-h3">
                                NEW IN 
                            </span>
                            <span class="bk-h5">
                                新品上市
                            </span>
                        </div>
                    </div>
                    <div className="bk-ad-slide">
                        <div className="bk-ad">
                        </div>
                        <div className="bk-ad-text">
                            <h3>Title</h3>
                            <h6 className="bk-white">Subtitle</h6>
                            <p>
                            context context context
                            </p>
                            <button className="bk-btn bordered white">BUTTON HERE</button>
                        </div>
                    </div>
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
                </div>
            </Container>
            <div className="bk-featured-products">
                <Container>
                    <div className="bk-featured-wrapper">
                        <FeaturedProducts />
                        <FeaturedProducts />
                        <FeaturedProducts />
                        <FeaturedProducts />
                        <div className="bk-featured-product-item bk-box">
                            <div className="bk-box-content">
                                <h3>FEATURED PRODUCTS</h3>
                                <h6 className="bk-white">精選商品</h6>
                                <button class="bk-btn bordered white">瀏覽商品</button>
                            </div>
                        </div>
                        <FeaturedProducts />
                        <FeaturedProducts />
                        <FeaturedProducts />
                        <FeaturedProducts />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Home