/*-----------------------Commoditylist.js的品牌--------------------------*/
import React,{useState,useEffect} from 'react'

function Brand(){

    const [brand,setBrand] = useState(false)

    const Brand = ()=>{
        if (brand !== true) {
            setBrand(true)
            document.querySelector('.chin-brand').classList.add('chin-brand2')
        }
        else{
            setBrand(false)
            document.querySelector('.chin-brand').classList.remove('chin-brand2')
        }
    }

    return(
        <>
        <div className="chin-price" onClick={Brand}>
            <span>品牌</span>
            <img src="./chin-img/chevron-up.svg" alt=""/>
        </div>
        <div className="chin-brand">
            <ul>
                <li><input type="checkbox" />Apple</li>
                <li><input type="checkbox" />Samsung</li>
                <li><input type="checkbox" />Audio-Technica</li>
                <li><input type="checkbox" />Audio-Technica2</li>
                <li><input type="checkbox" />Audio-Technica3</li>
            </ul>
        </div>
        </>
    )
}

export default Brand