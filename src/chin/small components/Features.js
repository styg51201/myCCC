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
                    <li className="chin-brand-checkbox"  >
                        <input id="color-input6" type="checkbox"/>
                        <label for="color-input6" className="chin-label">
                        <div className="chin-box"></div>
                        GPS 定位 
                        </label>      
                    </li>
                    <li className="chin-brand-checkbox"  >
                        <input id="color-input7" type="checkbox"/>
                        <label for="color-input7" className="chin-label">
                        <div className="chin-box"></div>
                        運動偵測 
                        </label>      
                    </li>
                    <li className="chin-brand-checkbox"  >
                        <input id="color-input8" type="checkbox"/>
                        <label for="color-input8" className="chin-label">
                        <div className="chin-box"></div>
                        藍芽 
                        </label>      
                    </li>
                </ul>
            </div>
        </li>
        </>
    )
}

export default Features