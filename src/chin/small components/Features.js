/*-----------------------Commoditylist.js的功能--------------------------*/
import React,{useState,useEffect} from 'react'

function Features(){
    const [features,setFeatures] = useState(false)

    const Features = ()=>{
        if (features !== true) {
            setFeatures(true)
            document.querySelector('.chin-features').classList.add('chin-features2')
            document.querySelector('.chin-price3 img').classList.add('chin-sort2')
            document.querySelector('.chin-price3 img').classList.remove('chin-sort3')
        }
        else{
            setFeatures(false)
            document.querySelector('.chin-features').classList.remove('chin-features2')
            document.querySelector('.chin-price3 img').classList.remove('chin-sort2')
            document.querySelector('.chin-price3 img').classList.add('chin-sort3')
        }
    }
    return(
        <>
            <div className="chin-price3" onClick={Features}>
                <span>功能</span>
                <img src="./chin-img/chevron-down-black.svg" alt=""/>
            </div>
            <div className="chin-features">
                <ul>
                    <li className="chin-brand-checkbox6"  >
                        <input id="color-input6" type="checkbox"/>
                        <label for="color-input6"></label>
                        <span>GPS 定位</span>          
                    </li>
                    <li className="chin-brand-checkbox7" >
                        <input id="color-input7" type="checkbox"/>
                        <label for="color-input7"></label>
                        <span>運動偵測</span>          
                    </li>
                    <li className="chin-brand-checkbox8" >
                        <input id="color-input8" type="checkbox"/>
                        <label for="color-input8"></label>
                        <span>藍芽</span>          
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Features