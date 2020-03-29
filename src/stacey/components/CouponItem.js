import React,{useState,useEffect} from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom';


//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {getCouponToServer,getCoupon,goShopping,showDiscountAction} from '../actions/couponAction'

//icon
import { IconContext } from 'react-icons'
import {
  IoMdArrowDropright
} from 'react-icons/io'

//動畫
import { bounceIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


function CouponItem(props){
 

  const styles = {
    bounceIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounceIn, 'bounceIn')
    }
  }

  const mb_id = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0
  
  // 設定按鈕裡的字樣
  let couponState = '領取'
  if(props.item.geted){
    couponState = '去逛逛'
  }else if(props.item.cp_getedCount >= props.item.cp_count){
    couponState = '發放結束'
  }

  //設定優惠券的外觀
  let couponClassName = classNames('col','col-sm-6','sty-coupon',{
    geted:props.item.geted,
    end:props.item.geted ? false : props.item.cp_getedCount >= props.item.cp_count,
  })

  //設定進度條的外觀
  let getNum = (props.item.cp_getedCount / props.item.cp_count *100) 
 
  getNum = getNum % 1 === 0 ? getNum :  getNum.toFixed(1)//取小數點2位

  let getedCountStyle = {background: `linear-gradient(to right, #0dd2c5 ${getNum}%, #a0a0a0 ${getNum}%)`}
  let endCouponStyle = { background:'#a0a0a0'}

  //設定剩餘張數
  let canGetNum = null
  if(props.item.cp_getedCount >= props.item.cp_count * 0.8) {
     canGetNum = props.item.cp_count - props.item.cp_getedCount
  }
  

  //設定優惠字樣
 //連結
  let path = ''
  //目標
  let object = ""
  switch(props.item.cpr_object){
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
  switch(props.item.cpr_rule){
    case 0:
      rule = "結帳金額"
     break
    case 1:
      rule = `滿${props.item.cpr_ruleNum}件`
     break
    case 2:
      rule = `滿${props.item.cpr_ruleNum}元`
      break
  }
  //金額
  let discount = ""
  switch(props.item.cpr_discount){
    case 0:
      if(props.item.cpr_discountNum%10===0) props.item.cpr_discountNum /=10
      discount = `打${props.item.cpr_discountNum}折`
     break
    case 1:
      discount = `折扣${props.item.cpr_discountNum}元`
     break
  }


  // 設定按鈕種類
  let getButton = (<button disabled={couponState === '發放結束'}>
                        <span>{couponState}</span>
                     </button>)
  let shopButton = (<button>
                      <span>{couponState}</span>
                    </button>)


  function shopAction (){
    props.showDiscountAction(true,props.item)
    props.goShopping(props.item.cp_vendor) 
    props.history.push(path)
  }

  function getAction () {
    if(mb_id){
      props.getCouponToServer(props.item.cp_id,mb_id) //cp_id 跟 mb_id
      props.getCoupon(props.arrIndex)
      }else{
        alert('請先登入')
      }
  }

    return (
        <>
        <div className={couponClassName}>
              <div className="item" onClick={()=>{
                if( !(couponState === '發放結束')){
                  props.item.geted? shopAction():getAction()
                }
              }}>
        {canGetNum ? <span className="sty-alertText">還剩 {canGetNum} 張 ! </span> : ''}

                <div className="wrapForImg">
                  <img src={`/img/vendors/${props.item.cp_img}`} alt="" />
                  
                  { props.item.geted ? 
                  <>
                  <div className="alreadyGet">
                  </div>
                  <StyleRoot className="sty-getImg" style={styles.bounceIn}>
                      <img src="/sty-img/get_o.png"/>
                      <p>領取</p>
                  </StyleRoot></> : 
                  ''}
                  
                  <div className="sty-dashed">
                  </div>
                </div>
                <div className="text">
                  <ul>
                    <h3>{props.item.cpr_discount?props.item.cpr_discountNum+'元':props.item.cpr_discountNum+'折'} </h3>
                    <li className="vendorName">[ {props.item.cp_vendor} ]</li>
                    <li>{object}-{rule}{discount}</li>
                    <li>有效至 {props.item.cp_due}</li>
                  </ul>
                  <div >
                    <div className="state" style={props.item.cp_getedCount >= props.item.cp_count?endCouponStyle:getedCountStyle}>
                    <span>{props.item.cp_getedCount >= props.item.cp_count?'全數領取完畢':getNum +' % 已領取'}</span>
                    </div>
                    {/* <p>還剩 5 張 !</p> */}
                  </div>
                </div>
                <div className="button">
                  {props.item.geted ? shopButton:getButton}
                </div>
              </div>
            </div>
        </>
    )
}


// 選擇對應的reducer
const mapStateToProps = store => {
  return { obj: store.getCouponData}
}

//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    getCouponToServer,getCoupon,goShopping,showDiscountAction,
  },dispatch)
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CouponItem))
