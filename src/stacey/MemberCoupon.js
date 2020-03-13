import React ,{useEffect ,useState}from 'react'
import SideFilter from './components/SideFilter'
import Bread from './components/Bread'
import { BrowserRouter as Router, Route, Link, Switch ,withRouter} from 'react-router-dom'
import './css/MemberCoupon.scss'
import MemberCouponItem from './components/MemberCouponItem'



//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {formServerCouponData} from '../actions/index'

function MemberCoupon(props) {
  // console.log(props)
  

  useEffect(()=>{
    props.formServerCouponData()
  },[])



  return (
    <>
      <Bread />
      <div className="row wrap">
        {/* <!-- 側邊篩選欄 --> */}
        {/* <SideFilter /> */}
     <div className="col-3"></div>
        {/* <!-- 右邊coupon --> */}
        <div className="col col-sm-9">
          <div className="row">
            {/* <!-- 領取 --> */}
            {props.data.map((val,ind)=>{
              return <MemberCouponItem key={ind} data={props.data[ind]} />
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
    formServerCouponData
  },dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MemberCoupon))
