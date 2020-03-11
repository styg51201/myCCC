import React,{useState,useEffect} from 'react'
import classNames from 'classnames'
import img from '../img/Swatch.jpg'


//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {getCoupon} from '../../actions/index'


function CouponItem(props){


  let couponClassName = classNames('col','col-sm-6','coupon',{
    geted:props.data.geted,
  })

  let count = {background: `linear-gradient(to right, #0dd2c5 ${props.data.count}%, #a0a0a0 ${props.data.count}%)`}

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
                  <div className="state">
                    <div style={count}></div>
                    <p>{props.data.count}% 已領取</p>
                  </div>
                </div>
                <div className="button">
                  <button onClick={()=>{props.getCoupon(props.data.id,!props.data.geted)}}>
                    <span>領取</span>
                  </button>
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
