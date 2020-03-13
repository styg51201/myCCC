import React,{useState,useEffect} from 'react'
import classNames from 'classnames'
import img from '../img/Swatch.jpg'


//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {getCoupon} from '../../actions/index'


function CouponItem(props){

  // const [couponState,setCouponState] = useState('領取')
  
  // 設定按鈕裡的字樣
  let couponState = '去逛逛'
  if(props.data.getedCount === props.data.count){
    couponState = '查看訂單'
  }else if(props.data.geted){
    couponState = '效期已過'
  }

  //設定優惠券的外觀
  let couponClassName = classNames('col','col-sm-6','sty-coupon',{
    used:false,
    exp:false,
  })

  
  // 設定按鈕種類
  let getButton = (<button disabled={couponState === '效期已過'}
                        onClick={()=> {}}>
                        <span>{couponState}</span>
                     </button>)
  let shopButton = (<button onClick={()=>{}}>
                      <span>{couponState}</span>
                    </button>)

  console.log('props',props)
    
    return (
        <>
        <div className={couponClassName}>
              <div className="item">
                <div className="wrapForImg">
                  <img src={img} alt="" />
                  <div className="alreadyGet">已領取</div>
                </div>
                <div className="text">
                  <ul>
                    <h3>{props.data.discount}</h3>
                    <li>{props.data.vendor}</li>
                    <li>穿戴式裝置指定商品{props.data.discount}</li>
                    <li>有效至 {props.data.dueDate}</li>
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
