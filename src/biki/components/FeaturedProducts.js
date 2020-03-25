import React, {useRef, useEffect} from 'react'

import '../css/home.scss'
import { FiShoppingBag, FiHeart, FiStar } from "react-icons/fi";
import {Col} from 'react-bootstrap'

function FeaturedProducts(props){

    useEffect(()=>{
        let prevPos = 0;
        // window.addEventListener('scroll', throttle(()=>{handleScroll(prevPos)}, 200))


    }, [])

    // const handleScroll = (prevPos)=>{
    //     let top = window.scrollY
    //     let num = 0;
    //     const newTop = (top - prevPos) * 0.3;

    //     console.log('offset:', (top - prevPos))
    //     console.log('prevPos',prevPos)
    //     prevPos = top;
    // }

    const throttle = (fn, wait)=>{
        let time = Date.now()

        return function(){
            if((time + wait - Date.now()) < 0){
                fn()
                time = Date.now()
            }
        }
    }

    const parallax = useRef()


    return(
    <>
        <Col>
            <div className="bk-featured-product-item" ref={parallax}>
                <div className="bk-featured-img">
                    <img src={props.img} />
                </div>
                <div className="bk-featured-hover">
                <div className="bk-featured-icon-list bk-icon">
                    <div role="button"><FiHeart /></div>
                    <div role="button"><FiShoppingBag /></div>
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