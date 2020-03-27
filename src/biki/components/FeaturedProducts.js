import React, {useRef, useEffect, useState} from 'react'

import '../css/home.scss'
import { FiShoppingBag, FiHeart, FiStar } from "react-icons/fi";
import {Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function FeaturedProducts(props){

    // console.log(props)

    const [bag, setBag] = useState(false)
    const [fav, setFav] = useState(false)

    const toggleFav = (e)=>{
        e.preventDefault()
        setFav(!fav)
        console.log("add to fave!!")
    }

    const toggleBag = (e)=>{
        e.preventDefault()
        setBag(!bag)
        console.log("add to bag!!")
    }

    // if(!props.data) return <div>nope</div>

    return(
    <>
        <Col>
            <Link to={props.url}>
                <div className="bk-featured-product-item">
                    <div className="bk-featured-img">
                        <img src={props.img} />
                    </div>
                    <div className="bk-featured-hover">
                        <div className="bk-featured-icon-list bk-icon">
                            <div role="button" onClick={toggleFav}>
                                <FiHeart className={!fav ? '' : 'active'} />
                            </div>
                            <div role="button" onClick={toggleBag}>
                                <FiShoppingBag className={!bag ? '' : 'active'} />   
                            </div>
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
                                <span className="bk-ftr-brand">{props.data.brand}</span>
                                <span className="bk-ftr-product-name">{props.data.name}</span>
                            </div> 
                            <div className="bk-featured-price">{props.data.price}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    </>
    )
}

export default FeaturedProducts