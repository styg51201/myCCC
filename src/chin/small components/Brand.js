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
            <ul className="chin-brand-input-checkbox">
                <li className="chin-brand-checkbox"  >
                    <input id="color-input" type="checkbox" />
                    <label for="color-input"></label>
                    <span>Apple</span>          
                </li>
                <li className="chin-brand-checkbox2" >
                    <input id="color-input2" type="checkbox"/>
                    <label for="color-input2"></label>
                    <span>Samsung</span>
                </li>
                <li className="chin-brand-checkbox3" >
                    <input id="color-input3"  type="checkbox"/>
                    <label for="color-input3"></label>
                    <span>Audio-Technica</span>
                </li>
                <li className="chin-brand-checkbox4" >
                    <input id="color-input4"  type="checkbox"/>
                    <label for="color-input4"></label>
                    <span>Audio-Technica2</span>
                </li>
                <li className="chin-brand-checkbox5" > 
                    <input id="color-input5"  type="checkbox"/>
                    <label for="color-input5"></label>
                    <span>Audio-Technica3</span>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Brand