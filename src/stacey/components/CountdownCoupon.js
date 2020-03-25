import React,{useState,useEffect} from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom';

import '../css/countdownCoupon.scss'

import CouponItem from './CouponItem'
import Countdown from './Countdown'


//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
// import {getCouponToServer,getCoupon,goShopping,noReset} from '../actions/couponAction'


function CountdownCoupon(props){

    return (
        <>
            <div className="row sty-countDownCoupon">
            <div className="col-12 sty-countdownTitle">
                <h3 className="">每日限時優惠券</h3>
                <Countdown />
            </div>
            {props.item.map((val,ind)=>{
              return <CouponItem key={val.cp_id} item={val} arrIndex={ind} />
            })} 
            {/* <hr className="col-12"/> */}
            </div>
        </>
    )
}


export default withRouter(CountdownCoupon)
