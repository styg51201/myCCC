/*-----------------------Commoditylist.js的價格--------------------------*/
import React,{useState,useEffect} from 'react'
import Slide from './Slide'
//classnames
import classNames from 'classnames'
function Price(){

    const [price,setPrice] = useState(false)
    const PriceClassName= classNames('chin-totalprice',{active:price})
   
    return(
        <>
            <li className={PriceClassName}>
                <div className="chin-price" onClick={()=>{setPrice(!price)}}>
                    <span>價格</span>
                    <img src="./chin-img/chevron-down-black.svg" alt=""/>
                </div>
                <div className="chin-slide">
                    <div className="chin-price-input">
                        <input type="text" placeholder="US$1,000"/>
                        <input type="text" placeholder="US$2,929"/>
                    </div>
                    <Slide />
                </div>
            </li>
        </>
    )
}

export default Price
