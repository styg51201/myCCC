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
import {fromServerMemberCouponData,memberCouponFilter} from './actions/couponAction'

function MemberCoupon(props) {

  const [state,setState] = useState('get')

  useEffect(()=>{
    props.fromServerMemberCouponData()
  },[])


  return (
    <>
      <Bread />
      <div className="row wrap">
        {/* <!-- 側邊篩選欄 --> */}
        {/* <SideFilter /> */}
     <div className="col-3">
       <button onClick={()=>{props.memberCouponFilter(props.data,'get')
                            setState('get')}}>已領取</button>
       <button onClick={()=>{props.memberCouponFilter(props.data,'use')
                            setState('use')}}>已使用</button>
       <button onClick={()=>{props.memberCouponFilter(props.data,'end')
                            setState('end')}}>無效</button>

     </div>
        {/* <!-- 右邊coupon --> */}
        <div className="col col-sm-9">
          <div className="row">
            {/* <!-- 領取 --> */}
            {props.filterData.map((val,ind)=>{
              return <MemberCouponItem key={val.cpi_cp_id} item={val} state={state} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.memberCouponData,
            filterData :store.memberCouponFilterData }
}
//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    fromServerMemberCouponData,memberCouponFilter
  },dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MemberCoupon))
