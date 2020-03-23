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
  const [end,setEnd] = useState(false)
  const [finish,setFinish] = useState(false)



  let rowInfo,rowHeight

  
  useEffect(()=>{
    props.fromServerCouponData(props.data.length)
 
  },[])



  useEffect(()=>{

    rowInfo = document.querySelector('.sty-row').getBoundingClientRect()

    //取得絕對位置
    rowHeight = (rowInfo.top + rowInfo.height) + window.pageYOffset
 


    const handle = () =>{



      if(!finish){
        if( (window.pageYOffset + (window.screen.availHeight/3)*2)> rowHeight){ 
  
          if(props.data.length !== props.cp_total){
            setLoading(true)
            setTimeout(()=>{
              props.fromServerCouponData(props.data.length)
     
              setLoading(false)
            },1000)
          }else{
            setLoading(true)
            setTimeout(()=>{
              setEnd(true)
              setLoading(false)
              setFinish(true)
            },1000)
            setTimeout(()=>{
              setEnd(false)
            },3000)
          }
      window.removeEventListener("scroll", handle);

        }
      }
    }
    
  window.addEventListener('scroll',handle)

  return () => window.removeEventListener("scroll", handle);

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
 
const loadDiv = (<div className="sty-coupon-loading"><div className="spinner-border " role="status"></div></div>)

const endDiv = (<div className="sty-coupon-finish"><div>已是最新資料</div></div>)

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
            
            

          </div>
          {loading ? loadDiv : "" }
          {end ? endDiv : "" }
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
