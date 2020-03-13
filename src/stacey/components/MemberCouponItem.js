import React,{useState,useEffect} from 'react'
import classNames from 'classnames'
import img from '../img/Swatch.jpg'


//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {getCoupon} from '../../actions/index'


function CouponItem(props){
console.log(props.data.cp_due)

  let isExp = false 
  let dueDate = props.data.cp_due.split('-')

  const today = new Date().getTime()
  const expDate = new Date(dueDate[0],dueDate[1]-1,dueDate[2]).getTime()

  if(today>expDate){
    isExp = true
  }

  console.log(today,expDate)
  // 設定按鈕裡的字樣
  let couponState = '去逛逛'
  if(props.data.cpi_use){
    couponState = '查看訂單'
  }else if(isExp){
    couponState = '效期已過'
  }

  //設定優惠券的外觀
  let couponClassName = classNames('col','col-sm-6','sty-coupon',{
    used:props.data.cpi_use,
    exp:props.data.cpi_use?false:isExp,
  })

  

  // 設定按鈕種類
  let getButton = (<button disabled={couponState === '效期已過'}
                        onClick={()=> {}}>
                        <span>{couponState}</span>
                     </button>)
  let shopButton = (<button onClick={()=>{}}>
                      <span>{couponState}</span>
                    </button>)

//設定優惠字樣
  //目標
  let object = ""
  switch(props.data.cpr_object){
    case 0:
     object = "全部商品"
     break
    case 1:
      object = "穿戴式裝置分類"
     break
    case 2:
      object = "耳機/喇叭分類"
      break
      case 3:
     object = "運動攝影機分類"
     break
     case 4:
      object = "周邊商品分類"
     break
     case 5:
      object = "指定商品"
     break
  }
  //條件
  let rule = ""
  switch(props.data.cpr_rule){
    case 0:
      rule = "一律"
     break
    case 1:
      rule = `滿${props.data.cpr_ruleNum}件`
     break
    case 2:
      rule = `滿${props.data.cpr_ruleNum}元`
      break
  }
  //金額
  let discount = ""
  switch(props.data.cpr_discount){
    case 0:
      discount = `打${props.data.cpr_discountNum}折`
     break
    case 1:
      discount = `折扣${props.data.cpr_discountNum}元`
     break
  }



  // console.log('props',props)
    
    return (
        <>
        <div className={couponClassName}>
              <div className="item">
                <div className="wrapForImg">
                  <img src={`./sty-img/${props.data.cp_img}`} alt="" />
                  <div className="alreadyGet">{props.data.cpi_use?'已使用':'無效'}</div>
                </div>
                <div className="text">
                  <ul>
                  <h3>{props.data.cpr_discount?props.data.cpr_discountNum+'元':props.data.cpr_discountNum+'折'}</h3>
                  <li className="vendorName">{props.data.cp_vendor}</li>
                    <li>{object}{rule}{discount}</li>
                    <li>有效至 {props.data.cp_due}</li>
                  </ul>
                </div>
                <div className="button">
                  {props.data.geted? shopButton:getButton}
                </div>
              </div>
            </div>
        </>
    )
}


//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    getCoupon
  },dispatch)
}


export default connect(null,mapDispatchToProps)(CouponItem)
