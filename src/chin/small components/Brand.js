/*-----------------------Commoditylist.js的品牌--------------------------*/
import React,{useState,useEffect} from 'react'

function Brand(){

    const [brand,setBrand] = useState(false)

    const Brand = ()=>{
        if (brand !== true) {
            setBrand(true)
            document.querySelector('.chin-brand').classList.add('chin-brand2')
            document.querySelector('.chin-price2 img').classList.add('chin-sort2')
            document.querySelector('.chin-price2 img').classList.remove('chin-sort3')
        }
        else{
            setBrand(false)
            document.querySelector('.chin-brand').classList.remove('chin-brand2')
            document.querySelector('.chin-price2 img').classList.remove('chin-sort2')
            document.querySelector('.chin-price2 img').classList.add('chin-sort3')
        }
    }

    return(
        <>
        <div className="chin-price2" onClick={Brand}>
            <span>品牌</span>
            <img src="./chin-img/chevron-down-black.svg" alt=""/>
        </div>
        <div className="chin-brand">
            <ul className="chin-brand-checkbox">
                <li>
                    <label className="chin-checkbox" for="checkboxInput">
                        <input type="checkbox" id="checkboxInput"/><span>Apple</span>
                    </label>            
                </li>
                <li>
                    <label className="chin-checkbox">
                        <input type="checkbox" />Samsung
                    </label>
                </li>
                <li>
                    <label className="chin-checkbox"> 
                        <input type="checkbox" />Audio-Technica
                    </label>
                </li>
                <li>
                    <label className="chin-checkbox">
                        <input type="checkbox" />Audio-Technica2
                    </label>
                </li>
                <li> 
                    <label className="chin-checkbox">   
                    <input type="checkbox" />Audio-Technica3
                    </label>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Brand