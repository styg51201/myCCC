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
                    <li><input type="checkbox" />GPS 定位</li>
                    <li><input type="checkbox" />運動偵測</li>
                    <li><input type="checkbox" />藍芽</li>
                </ul>
            </div>
        </>
    )
}

export default Features