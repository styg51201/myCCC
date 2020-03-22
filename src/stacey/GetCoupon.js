import React ,{useEffect ,useState}from 'react'
import { BrowserRouter as Router, Route, Link, Switch ,withRouter } from 'react-router-dom'
import '../css/main.css'
import './css/GetCoupon.scss'

//components
import CouponSideFilter from './components/CouponSideFilter'
import CouPageTitle from './components/CouPageTitle'
import CouponItem from './components/CouponItem'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {fromServerCouponData} from './actions/couponAction'

//icon
import { IconContext } from 'react-icons'
import {
  FiChevronDown
} from 'react-icons/fi'


function GetCoupon(props) {

  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(props.data.length)
  const [end,setEnd] = useState(false)


  let rowInfo,rowHeight,cp_total
  console.log('222',props.cp_total)
  

  
  useEffect(()=>{
    props.fromServerCouponData(props.data.length)
 
  },[])



  useEffect(()=>{

    rowInfo = document.querySelector('.sty-row').getBoundingClientRect()
    rowHeight = (rowInfo.top + rowInfo.height) - window.screen.availHeight


    // cp_total = props.cp_total
    const handle = () =>{
      // console.log('222',cp_total)
      console.log('4444',props.data.length)
      if(window.scrollY > rowHeight){ 
        console.log('555')
        if(props.data.length !== props.cp_total){
          setLoading(true)
          // setTimeout(()=>{
            props.fromServerCouponData(props.data.length)
            console.log(props.data.length)
            setLoading(false)
          // },2000)
        }else{
          setLoading(true)
          // setTimeout(()=>{
            setEnd(true)
            setLoading(false)
          // },2000)
        }
      }
       
        
        window.removeEventListener("scroll", handle);
        console.log('333',props.data.length)


    }
    
  

  window.addEventListener('scroll',handle)

  // return () => window.removeEventListener("scroll", handle);

  },[props.data])


 //篩選過後的
  const filterCouponItem = props.data.map((val,ind)=>{
    if(props.vendor.indexOf(val.cp_vendor) > -1){
      return <CouponItem key={val.cp_id} item={val} arrIndex={ind} />
    }
  })

//全部顯示
  const allCouponItem = props.data.map((val,ind)=>{
    return <CouponItem key={val.cp_id} item={val} arrIndex={ind} />
  })

//取得品牌list
 let vendorList = []
 for(let i=0;i<props.data.length;i++){
   if(vendorList.indexOf(props.data[i].cp_vendor) === -1){
    vendorList.push(props.data[i].cp_vendor)
   }
 }
//篩選列表照廠商名排序
vendorList.sort()
 
const loadDiv = <div>等等</div>
const endDiv = <div>無最新資料</div>

  return (
    <>
      {/* <Bread /> */}
      <div className="row sty-wrap">
        {/* <!-- 側邊篩選欄 --> */}
        <CouponSideFilter list={vendorList}/>
        {/* <!-- 右邊coupon --> */}
        <div className="col col-sm-9">
          <div className="row sty-row">
            {/* <!-- title --> */}
            <CouPageTitle />
            {/* 優惠券 */}
            {props.vendor.length?filterCouponItem:allCouponItem}
            {loading ? loadDiv : "" }
            {end ? endDiv : "" }

          </div>
        </div>
      </div>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getCouponData ,
            vendor: store.filterCoupon,
          cp_total:store.couponTotal}
}

//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    fromServerCouponData
  },dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(GetCoupon))
