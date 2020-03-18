/*-----------------------Commoditylist.js的品牌--------------------------*/
import React,{useState,useEffect} from 'react'


//classnames
import classNames from 'classnames'

function Brand(){

    const [brand,setBrand] = useState(false)
    const BrandClassName= classNames('chin-brand',{active:brand})
    
    return(
        <>
        <li className={BrandClassName}>
            <div className="chin-price2" onClick={()=>{setBrand(!brand)}}>
                <span>品牌</span>
                <img src="./chin-img/chevron-down-black.svg" alt=""/>
            </div>
            <div>
                <ul className="test">
                    <li className="chin-brand-checkbox"  >
                        <input id="color-input" type="checkbox"/>
                        <label for="color-input" className="chin-label">
                        <div className="chin-box"></div>
                        Apple  
                        </label>      
                    </li>
                    <li className="chin-brand-checkbox"  >
                        <input id="color-input2" type="checkbox"/>
                        <label for="color-input2" className="chin-label">
                        <div className="chin-box"></div>
                        Samsung 
                        </label>      
                    </li>
                    <li className="chin-brand-checkbox"  >
                        <input id="color-input3" type="checkbox"/>
                        <label for="color-input3" className="chin-label">
                        <div className="chin-box"></div>
                        Samsung 
                        </label>      
                    </li>
                    <li className="chin-brand-checkbox"  >
                        <input id="color-input4" type="checkbox"/>
                        <label for="color-input4" className="chin-label">
                        <div className="chin-box"></div>
                        Samsung 
                        </label>      
                    </li>
                    <li className="chin-brand-checkbox"  >
                        <input id="color-input5" type="checkbox"/>
                        <label for="color-input5" className="chin-label">
                        <div className="chin-box"></div>
                        Samsung 
                        </label>      
                    </li>
                </ul>
            </div>
        </li>
        </>
    )
}

export default Brand