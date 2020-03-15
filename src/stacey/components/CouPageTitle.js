import React ,{useEffect ,useState}from 'react'

import classNames from 'classnames'

//icon
import { IconContext } from 'react-icons'
import {
  FiChevronDown
} from 'react-icons/fi'

function CouPageTitle(){
    
    const [clicked,setClicked]= useState(false)
    const [order,setOrder]= useState('排序')
    const couponOrderClassName= classNames('sty-orderDiv',{active:clicked})

    return (
        <>
            <div className="col-12 sty-pageTitle">
            <p>
                <span>Coupon</span>
                優惠券專區
            </p>
            <div className={couponOrderClassName}>
                <button onClick={()=>{setClicked(!clicked) 
                }}>{order}<FiChevronDown /></button>
                <div className="sty-couponOrder">
                    <div onClick={()=>{
                        setClicked(!clicked)
                        setOrder('依時間排序')
                    }}>依時間排序</div>
                    
                    <div onClick={()=>{
                        setClicked(!clicked)
                        setOrder('依熱門程度')
                    }}>依熱門程度</div>
                </div>
            </div>
            </div>
        </>
    )
}

export default CouPageTitle