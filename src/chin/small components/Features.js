/*-----------------------Commoditylist.js的功能--------------------------*/
import React,{useState,useEffect} from 'react'

//classnames
import classNames from 'classnames'
function Features(){
    const [features,setFeatures] = useState(false)
    const FeaturesClassName= classNames('chin-features',{active:features})

    return(
        <>
        <li className={FeaturesClassName}>
            <div className="chin-price3" onClick={()=>{setFeatures(!features)}}>
                <span>功能</span>
                <img src="./chin-img/chevron-down-black.svg" alt=""/>
            </div>
            <div>
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
        </li>
        </>
    )
}

export default Features