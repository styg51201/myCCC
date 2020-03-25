import React ,{useEffect ,useState}from 'react'
import { BrowserRouter as Router, Route, Link, Switch ,withRouter} from 'react-router-dom'
import './css/MemberCoupon.scss'
import classNames from 'classnames'


import MemberSidebar from '../Irene/components/MemberSidebar'

import MemberCouponItem from './components/MemberCouponItem'



//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {fromServerMemberCouponData} from './actions/couponAction'

function MemberCoupon(props) {

  const [state,setState] = useState('get')

  const mb_id = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0
  

  useEffect(()=>{
    props.fromServerMemberCouponData(mb_id)
  },[])

  const buttonStyleForGet = classNames({active:state==='get'})
  const buttonStyleForUse = classNames({active:state==='use'})
  const buttonStyleForDueEndList = classNames({active:state==='dueEnd'})


  let useList = []
  let dueEndList = []
  let getList = []
  const today = `${new Date().getFullYear()}-${(new Date().getMonth())+1}-${new Date().getDate()}`
  const add3days = `${new Date().getFullYear()}-${(new Date().getMonth())+1}-${new Date().getDate()+4}`

  const todayDateTime = (Date.parse(today)).valueOf()
  const add3daysTime = (Date.parse(add3days)).valueOf()


  for(let i=0;i<props.data.length;i++){

    let dueDateTime =  (Date.parse(props.data[i].cp_due)).valueOf()

    if(props.data[i].cpi_use){
      useList.push(props.data[i])
    }else if( dueDateTime <= add3daysTime){
      dueEndList.push(props.data[i])
    }else{
      getList.push(props.data[i])
    }
  }
  
  const getListData = getList.map((val,ind)=>{
    return <MemberCouponItem key={val.cpi_cp_id} item={val} state={state} />
  })
  const useListData = useList.map((val,ind)=>{
    return <MemberCouponItem key={val.cpi_cp_id} item={val} state={state} />
  })
  const dueEndListData = dueEndList.map((val,ind)=>{
    return <MemberCouponItem key={val.cpi_cp_id} item={val} state={state} />
  })


  return (
    <>
      <div className="row wrap">
       
     <MemberSidebar />
        {/* <!-- 右邊coupon --> */}
        <div className="col col-sm-9">
        <div className="sty-memberTitle mb-3">
          <h3>我的優惠券</h3>
          <hr />
            <button className={buttonStyleForGet} onClick={()=>{setState('get')}}>已領取</button>
            
            <button className={buttonStyleForDueEndList} onClick={()=>{setState('dueEnd')}}>即將過期
                                {dueEndListData.length > 0 && <span className="sty-alertNum">{dueEndListData.length}</span>}
                                </button>
                                
            <button className={buttonStyleForUse} onClick={()=>{setState('use')}}>已使用</button>                    
        </div>
          <div className="row">
            {state === 'get' ? getListData :''}
            {state === 'dueEnd' ? dueEndListData :''}
            {state === 'use' ? useListData :''}
          </div>
        </div>
      </div>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.memberCouponData,
            }
}
//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    fromServerMemberCouponData
  },dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MemberCoupon))
