/*-----------------------Commoditylist.js的品牌--------------------------*/
import React,{useState,useEffect} from 'react'


//classnames
import classNames from 'classnames'

function Brand(props){

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
                <ul>
                {props.list.map((val,ind)=>{
                  return  <li className="chin-brand-checkbox"  key={ind}>
                        <input name={val} id={val} value={val} type="checkbox"/>
                        <label for={val} className="chin-label">
                        <div className="chin-box"></div>
                        {val}
                        </label>      
                    </li>
                })}
                </ul>
            </div>
        </li>
        </>
    )
}

export default Brand