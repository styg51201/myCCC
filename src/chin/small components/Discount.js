/*-----------------------Commoditylist.js的優惠--------------------------*/
import React,{useState,useEffect} from 'react'

//classnames
import classNames from 'classnames'

function Discount(){

    const [discount,setDiscount] = useState(false)
    const DiscountClassName= classNames('chin-discount',{active:discount})


    return(
        <>
        <li className={DiscountClassName}>
            <div className="chin-price4" onClick={()=>{setDiscount(!discount)}}>
                <span>優惠</span>
                <img src="./chin-img/chevron-down-black.svg" alt=""/>
            </div>
        </li>
        </>
    )
}


export default Discount