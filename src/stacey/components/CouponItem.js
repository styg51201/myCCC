import React,{useState,useEffect} from 'react'
import classNames from 'classnames'
import img from '../img/Swatch.jpg'


//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {getCoupon} from '../../actions/index'

//icon
import { IconContext } from 'react-icons'
import {
  IoMdArrowDropright
} from 'react-icons/io'

function CouponItem(props){

  // const [couponState,setCouponState] = useState('領取')
  
  // 設定按鈕裡的字樣
  let couponState = '領取'
  if(props.data.geted){
    couponState = '去逛逛'
  }else if(props.data.cp_getedCount === props.data.cp_count){
    couponState = '發放結束'
  }

  //設定優惠券的外觀
  let couponClassName = classNames('col','col-sm-6','sty-coupon',{
    geted:props.data.geted,
    end:props.data.geted?false:props.data.cp_getedCount === props.data.cp_count,
  })

  //設定進度條的外觀
  let getedCountStyle = {background: `linear-gradient(to right, #0dd2c5 ${props.data.cp_getedCount}%, #a0a0a0 ${props.data.cp_getedCount}%)`}
  let endCouponStyle = { background:'#a0a0a0'}

  // 設定按鈕種類
  let getButton = (<button disabled={couponState === '發放結束'}
                        onClick={()=>{props.getCoupon(props.data) }}>
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


    
    return (
        <>
        <div className={couponClassName}>
              <div className="item">
                <div className="wrapForImg">
                  <img src={`./sty-img/${props.data.cp_img}`} alt="" />
                  <div className="alreadyGet"><p>已領取</p></div>
                </div>
                <div className="text">
                  <ul>
                    <h3>{props.data.cpr_discount?props.data.cpr_discountNum+'元':props.data.cpr_discountNum+'折'}</h3>
                    <li className="vendorName">[ {props.data.cp_vendor} ]</li>
                    <li>{object}{rule}{discount}</li>
                    <li>有效至 {props.data.cp_due}</li>
                  </ul>
                  <div >
                    <div className="state" style={props.data.cp_getedCount === props.data.cp_count?endCouponStyle:getedCountStyle}></div>
                    <p>{props.data.cp_getedCount === props.data.cp_count?'全數領取完畢':props.data.cp_getedCount +'% 已領取'}</p>
                  </div>
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
