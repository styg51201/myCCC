/*-----------------------Commoditylist.js的品牌--------------------------*/
import React,{useState,useEffect} from 'react'

function Brand(){

    const [brand,setBrand] = useState(false)
    const [checked,setChecked] = useState(false)

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
    const asd = ()=>{
         if (checked !== true) {
            setChecked(true)
            document.querySelector('.chat-button-location-radio-input').checked=true
            console.log('123')
        }
        else{
            setChecked(false)
            document.querySelector('.chat-button-location-radio-input').checked=false
            console.log('456')
        }
    }
    return(
        <>
        <div className="chin-price2" onClick={Brand}>
            <span>品牌</span>
            <img src="./chin-img/chevron-down-black.svg" alt=""/>
        </div>
        <div className="chin-brand">
            <ul>
                <li className="chin-brand-checkbox"  onClick={asd}>
                    <input id="color-input-red" className="chat-button-location-radio-input" type="checkbox"/>
                    <label for="color-input-red" className="chin-color-input-red"><span>Apple</span></label>          
                </li>
                <li className="chin-brand-checkbox2">
                    <input id="color-input-red" className="chat-button-location-radio-input" type="checkbox"/>
                    <label for="color-input-red" className="chin-color-input-red"><span>Samsung</span></label>
                </li>
                <li className="chin-brand-checkbox3">
                    <input id="color-input-red" className="chat-button-location-radio-input" type="checkbox"/>
                    <label for="color-input-red" className="chin-color-input-red"><span>Audio-Technica</span></label>
                </li>
                <li className="chin-brand-checkbox4">
                    <input id="color-input-red" className="chat-button-location-radio-input" type="checkbox"/>
                    <label for="color-input-red" className="chin-color-input-red"><span>Audio-Technica2</span></label>
                </li>
                <li className="chin-brand-checkbox5"> 
                    <input id="color-input-red" className="chat-button-location-radio-input" type="checkbox"/>
                    <label for="color-input-red" className="chin-color-input-red"><span>Audio-Technica3</span></label>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Brand