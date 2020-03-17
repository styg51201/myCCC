import React,{useState,useEffect} from 'react'
import Features from '../small components/Features'
import Brand from '../small components/Brand'
import Price from '../small components/Price'
import Discount from '../small components/Discount'
import '../chin-css/checkbox.scss'


function Commoditylist(){
    
    return(
        <ul className="chin-commoditylist">
            <li>
                <Price/>
            </li>
            <li>
               <Brand/>
            </li>
            <li>
                <Features/>
            </li>
            <li>
               <Discount/>
            </li>
        </ul>
         )
}

export default Commoditylist