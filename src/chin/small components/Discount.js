/*-----------------------Commoditylist.js的優惠--------------------------*/
import React,{useState,useEffect} from 'react'


function Discount(){

    const [discount,setDiscount] = useState(false)

    const Discount = ()=>{
        if (discount !== true) {
            setDiscount(true)
            document.querySelector('.chin-price4 img').classList.add('chin-sort2')
            document.querySelector('.chin-price4 img').classList.remove('chin-sort3')
        }
        else{
            setDiscount(false)
            document.querySelector('.chin-price4 img').classList.remove('chin-sort2')
            document.querySelector('.chin-price4 img').classList.add('chin-sort3')
        }
    }


    return(
        <>
         <div className="chin-price4" onClick={Discount}>
            <span>優惠</span>
            <img src="./chin-img/chevron-down-black.svg" alt=""/>
        </div>
        </>
    )
}


export default Discount