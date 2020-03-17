import React ,{useEffect ,useState}from 'react'
import Bread from './components/Bread'
import { BrowserRouter as Router, Route, Link, Switch ,withRouter } from 'react-router-dom'
import '../css/main.css'
import './css/GetCoupon.scss'

//components
import SideFilter from './components/SideFilter'
import CouPageTitle from './components/CouPageTitle'
import CouponItem from './components/CouponItem'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {formServerCouponData} from './actions/couponAction'

//icon
import { IconContext } from 'react-icons'
import {
  FiChevronDown
} from 'react-icons/fi'


function GetCoupon(props) {

  const [loaded,setLoaded] = useState(false)

  
  useEffect(()=>{
    props.formServerCouponData()
      setLoaded(true)
  },[])


 //篩選過後的
  const filterCouponItem = props.data.map((val,ind)=>{
    if(props.vendor.indexOf(val.cp_vendor) > -1){
      return <CouponItem key={val.cp_id} data={val} arrIndex={ind} />
    }
  })

//全部顯示
  const allCouponItem = props.data.map((val,ind)=>{
    return <CouponItem key={val.cp_id} data={val} arrIndex={ind} />
  })

//取得品牌list
 let vendorList = []
 for(let i=0;i<props.data.length;i++){
   if(vendorList.indexOf(props.data[i].cp_vendor) === -1){
    vendorList.push(props.data[i].cp_vendor)
   }
 }
  vendorList.sort()
  console.log('vlist',vendorList)

  return (
    <>
    {console.log('666')}
      {/* <Bread /> */}
      <div className="row wrap mt-5">
        {/* <!-- 側邊篩選欄 --> */}
        <SideFilter list={vendorList}/>
        {/* <!-- 右邊coupon --> */}
        <div className="col col-sm-9">
          <div className="row">
            {/* <!-- title --> */}
            <CouPageTitle />
            {/* 優惠券 */}
            {props.vendor.length?filterCouponItem:allCouponItem}
          </div>
        </div>
      </div>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getCouponData ,
            vendor: store.filterCoupon,}
}

//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    formServerCouponData
  },dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(GetCoupon))
