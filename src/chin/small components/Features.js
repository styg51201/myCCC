/*-----------------------Commoditylist.js的功能--------------------------*/
import React,{useState,useEffect} from 'react'

function Features(){
    const [features,setFeatures] = useState(false)

    const Features = ()=>{
        if (features !== true) {
            setFeatures(true)
            document.querySelector('.chin-features').classList.add('chin-features2')
        }
        else{
            setFeatures(false)
            document.querySelector('.chin-features').classList.remove('chin-features2')
        }
    }
    
    return(
        <>
            <div className="chin-price" onClick={Features}>
                <span>功能</span>
                <img src="./chin-img/chevron-up.svg" alt=""/>
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