/*-----------------------Commoditylist.js的價格--------------------------*/
import React,{useState,useEffect} from 'react'
import Slide from './Slide'

function Price(){

    const [price,setPrice] = useState(false)

    const Price = ()=>{
        if (price !== true) {
            setPrice(true)
            document.querySelector('.chin-Price').classList.add('chin-Price2')
            document.querySelector('.chin-price img').classList.add('chin-sort2')
            document.querySelector('.chin-price img').classList.remove('chin-sort3')
        }
        else{
            setPrice(false)
            document.querySelector('.chin-Price').classList.remove('chin-Price2')
            document.querySelector('.chin-price img').classList.remove('chin-sort2')
            document.querySelector('.chin-price img').classList.add('chin-sort3')
        }
    }

   
    return(
        <>
            <div className="chin-price" onClick={Price}>
                <span>價格</span>
                <img src="./chin-img/chevron-down-black.svg" alt=""/>
            </div>
            <div className="chin-Price">
                <div className="chin-price-input">
                    <input type="text" placeholder="US$1,000"/>
                    <input type="text" placeholder="US$2,929"/>
                </div>
                <Slide />
            </div>
        </>
    )
}

export default Price
