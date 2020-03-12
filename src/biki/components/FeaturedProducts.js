import React from 'react'
import '../css/home.scss'
import { FiShoppingBag, FiHeart, FiStar } from "react-icons/fi";
import {Col} from 'react-bootstrap'

function FeaturedProducts(){

    return(
    <>
        <Col>
            <div className="bk-featured-product-item">
                <div className="bk-featured-img"></div>
                <div className="bk-featured-hover">
                <div className="bk-featured-icon-list bk-icon">
                    <FiHeart />
                    <FiShoppingBag />
                </div>
                <div className="bk-featured-stars">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                </div>
                <div className="bk-featured-info">
                    <div className="bk-featured-name">
                        <span className="bk-ftr-brand">brand</span>
                        <span className="bk-ftr-product-name">product nameasdfqw eroiapsdokj;xzlc npfoq iuwepr  oij;lsdk jaf;kldjasfih</span>
                    </div> 
                    <div className="bk-featured-price">
                    $-00000
                    </div>
                </div>
                </div>
            </div>
        </Col>
    </>
    )
}

export default FeaturedProducts