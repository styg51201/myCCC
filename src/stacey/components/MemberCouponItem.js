import React,{useState,useEffect} from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom';



//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {goShopping,showDiscountAction} from '../actions/couponAction'


function MemberCouponItem(props){


  //設定優惠券的外觀
  let couponClassName = classNames('col','col-sm-6','sty-memberCoupon',{
    used:props.state==='use',
    dueEnd:props.state==='use' ? false : props.state ==='dueEnd',
  })




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
      rule = "一律"
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
  let buttonType = (<button><span className="">去逛逛</span></button>)

  if(props.state==='use'){
    buttonType = (<button><span>已使用</span></button>)
  }

  function shopAction (){
    props.showDiscountAction(true,props.item)
    props.goShopping(props.item.cp_vendor) 
    props.history.push(path)
  }
 
    return (
        <>
        <div className={couponClassName}>
              <div className="item" onClick={()=>{
                !(props.state==='use') && shopAction()
              }}>
                <div className="wrapForImg">
                  <img src={`/img/vendors/${props.item.cp_img}`} alt="" />

                  <div className="alreadyGet">
                  </div>
                  <div className="sty-getImg">
                      <img src="/sty-img/get_o.png"/>
                      <p>已使用</p>
                  </div>

                <div className="sty-dashed"></div>
                </div>
                <div className="text">
                  <ul>
                  <h3>{props.item.cpr_discount?props.item.cpr_discountNum+'元':props.item.cpr_discountNum+'折'}</h3>
                  <li className="vendorName">[ {props.item.cp_vendor} ]</li>
                    <li>{object}{rule}{discount}</li>
                    <li>有效至 {props.item.cp_due}</li>
                  </ul>
                </div>
                <div className="button">
                  {buttonType}
                </div>
              </div>
            </div>
        </>
    )
}


//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    goShopping,showDiscountAction
  },dispatch)
}


export default withRouter(connect(null,mapDispatchToProps)(MemberCouponItem))
