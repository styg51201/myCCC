import React ,{useEffect ,useState}from 'react'
import SideFilter from './components/SideFilter'
import Bread from './components/Bread'
import { Route, withRouter, NavLink, Switch, matchPath } from 'react-router-dom'
import '../css/main.css'
import './css/GetCoupon.scss'
import CouponItem from './components/CouponItem'


//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {formServerCouponData,getCoupon} from '../actions/index'

function GetCoupon(props) {
  console.log(props)
  

  useEffect(()=>{
    props.formServerCouponData()
  },[])


  return (
    <>
      <Bread />
      <div className="row wrap">
        {/* <!-- 側邊篩選欄 --> */}
        <SideFilter />
        {/* <!-- 右邊coupon --> */}
        <div className="col col-sm-9">
          <div className="row">
            {/* <!-- 領取 --> */}
            {props.data.map((val,ind)=>{
              return <CouponItem key={ind} data={props.data[ind]} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getCouponData }
}
//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    formServerCouponData,getCoupon
  },dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(GetCoupon))
