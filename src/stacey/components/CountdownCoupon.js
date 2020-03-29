import React,{useState,useEffect} from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom';

import '../css/countdownCoupon.scss'

import Countdown from './Countdown'


//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {countdownCouponGet , getCouponToServer ,fromServerCountdownCouponData,goShopping,showDiscountAction} from '../actions/couponAction'


function CountdownCoupon(props){


const mb_id = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0

useEffect(()=>{
    props.fromServerCountdownCouponData(mb_id) 

},[])


const coupon =  props.item.map((val,ind)=>{


    // 設定按鈕裡的字樣
    let couponState = '領取'
    if(val.geted){
    couponState = '去逛逛'
    }

    //設定優惠券的外觀
    let couponClassName = classNames('col','col-sm-6','sty-coupon',{
    geted:val.geted
    })

    
    //設定優惠字樣
    //連結
    let path = ''
    //目標
    let object = ""
    switch(val.cpr_object){
    case 0:
    object = "全部商品"
    path = '/watch'
    break
    case 1:
        object = "穿戴式裝置分類"
        path = '/watch'
    break
    case 2:
        object = "耳機/喇叭分類"
        path = '/headset'
        break
        case 3:
    object = "運動攝影機分類"
    path = '/actioncamera'
    break
    case 4:
        object = "周邊商品分類"
        path = '/surrounding'
    break
    case 5:
        object = "指定商品"
    break
    }
    //條件
    let rule = ""
    switch(val.cpr_rule){
    case 0:
        rule = "結帳金額"
    break
    case 1:
        rule = `滿${val.cpr_ruleNum}件`
    break
    case 2:
        rule = `滿${val.cpr_ruleNum}元`
        break
    }
    //金額
    let discount = ""
    switch(val.cpr_discount){
    case 0:
        if(val.cpr_discountNum%10===0) val.cpr_discountNum /=10
        discount = `打${val.cpr_discountNum}折`
    break
    case 1:
        discount = `折扣${val.cpr_discountNum}元`
    break
    }


    // 設定按鈕種類
    let getButton = (<button 
                        onClick={()=>{
                            if(mb_id){
                            props.getCouponToServer(val.cp_id,mb_id) //cp_id 跟 mb_id
                            props.countdownCouponGet(ind)
                            }else{
                                alert('請先登入')
                            }
                        }}>
                        <span>{couponState}</span>
                    </button>)

    let shopButton = (<button onClick={()=>{
                        
                        props.goShopping(val.cp_vendor) 
                        props.showDiscountAction(true,val)
                        props.history.push(path)

                        }}>
                        <span>{couponState}</span>
                    </button>)


return(
    <div className={couponClassName}>
              <div className="item">
        
                <div className="wrapForImg">
                  <img src={`/img/vendors/${val.cp_img}`} alt="" />
                  <div className="alreadyGet">
                    <img src="/sty-img/get_o.png"/>
                    <div><p>領取</p></div>
            
                  </div>
                  <div className="sty-dashed"></div>
                </div>
                <div className="text">
                  <ul>
                    <h3>{val.cpr_discount?val.cpr_discountNum+'元':val.cpr_discountNum+'折'} </h3>
                    <li className="vendorName">[ {val.cp_vendor} ]</li>
                    <li>{object}-{rule}{discount}</li>
                    <li>有效至 {val.cp_due}</li>
                  </ul>
                  
                </div>
                <div className="button">
                  {val.geted? shopButton:getButton}
                </div>
              </div>
            </div>
)


}) 


    

    return (
        <>
            <div className="row sty-countDownCoupon">
                <div className="col-12 sty-countdownTitle">
                    <h3 className="">每日限時優惠券</h3>
                    <Countdown />
                </div>
                {coupon}
            </div>
        </>
    )
}


// 選擇對應的reducer
const mapStateToProps = store => {
  return { item: store.countdownCouponData ,
            }
}

//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    countdownCouponGet,getCouponToServer,fromServerCountdownCouponData,goShopping,showDiscountAction
  },dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CountdownCoupon))


