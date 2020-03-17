import React,{useState,useEffect} from 'react'
import classNames from 'classnames'
import img from '../img/Swatch.jpg'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {getCoupon} from '../actions/couponAction'

//icon
import { IconContext } from 'react-icons'
import {
  IoMdArrowDropright
} from 'react-icons/io'

function CouponItem(props){

  // console.log('789456',props)
  // const [couponState,setCouponState] = useState('領取')

  const [item,setItem] = useState(props.data)
  const [geted,setGeted] = useState(false)
  
  let newItem = {...item}

  // console.log('123456798',item)

  // 設定按鈕裡的字樣
  let couponState = '領取'
  if(geted){
    couponState = '去逛逛'
  }else if(item.cp_getedCount === item.cp_count){
    couponState = '發放結束'
  }

  //設定優惠券的外觀
  let couponClassName = classNames('col','col-sm-6','sty-coupon',{
    geted:geted,
    end:item.geted?false:item.cp_getedCount === item.cp_count,
  })

  //設定進度條的外觀
  let getedCountStyle = {background: `linear-gradient(to right, #0dd2c5 ${item.cp_getedCount}%, #a0a0a0 ${item.cp_getedCount}%)`}
  let endCouponStyle = { background:'#a0a0a0'}

  // 設定按鈕種類
  let getButton = (<button disabled={couponState === '發放結束'}
                        onClick={()=>{props.getCoupon()
                                      newItem.cp_getedCount+=1
                                      setItem(newItem)
                                      setGeted(true) }}>
                        <span>{couponState}</span>
                     </button>)
  let shopButton = (<button onClick={()=>{}}>
                      <span>{couponState}</span>
                    </button>)

  //設定優惠字樣
  //目標
  let object = ""
  switch(item.cpr_object){
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
  switch(item.cpr_rule){
    case 0:
      rule = "一律"
     break
    case 1:
      rule = `滿${item.cpr_ruleNum}件`
     break
    case 2:
      rule = `滿${item.cpr_ruleNum}元`
      break
  }
  //金額
  let discount = ""
  switch(item.cpr_discount){
    case 0:
      discount = `打${item.cpr_discountNum}折`
     break
    case 1:
      discount = `折扣${item.cpr_discountNum}元`
     break
  }


    
    return (
        <>
        <div className={couponClassName}>
              <div className="item">
                <div className="wrapForImg">
                  <img src={`./sty-img/${item.cp_img}`} alt="" />
                  <div className="alreadyGet"><p>已領取</p></div>
                </div>
                <div className="text">
                  <ul>
                    <h3>{item.cpr_discount?item.cpr_discountNum+'元':item.cpr_discountNum+'折'}</h3>
                    <li className="vendorName">[ {item.cp_vendor} ]</li>
                    <li>{object}{rule}{discount}</li>
                    <li>有效至 {item.cp_due}</li>
                  </ul>
                  <div >
                    <div className="state" style={item.cp_getedCount === item.cp_count?endCouponStyle:getedCountStyle}></div>
                    <p>{item.cp_getedCount === item.cp_count?'全數領取完畢':item.cp_getedCount +'% 已領取'}</p>
                  </div>
                </div>
                <div className="button">
                  {geted? shopButton:getButton}
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
    getCoupon
  },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(CouponItem)
