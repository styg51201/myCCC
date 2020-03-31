import React ,{useEffect ,useState}from 'react'

//classnames
import classNames from 'classnames'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {countSort,startTimeSort,endTimeSort,nameSort} from '../actions/couponAction'

//icon
import {
  FiChevronDown
} from 'react-icons/fi'

function CouPageTitle(props){
    
    const [clicked,setClicked]= useState(false)
    const [order,setOrder]= useState('排序方式')
    const couponOrderClassName= classNames('sty-orderDiv',{active:clicked})

  

    return (
        <>
            <div className="col-12 sty-pageTitle">
            <p>優惠券專區
            </p>
            <div className={couponOrderClassName}>
                <button onClick={()=>{setClicked(!clicked) 
                }}>
                <span>{order}</span>
                <FiChevronDown /></button>
                <ul className="sty-couponOrder">
                    <li onClick={()=>{
                        setClicked(!clicked)
                        setOrder('依熱門程度')
                        props.countSort(props.data)
                        }}>依熱門程度排序</li>
                    <li onClick={()=>{
                        setClicked(!clicked)
                        setOrder('依最新時間')
                        props.startTimeSort(props.data)
                    }}>依最新時間排序</li>
                    <li onClick={()=>{
                        setClicked(!clicked)
                        setOrder('依結束時間')
                        props.endTimeSort(props.data)
                    }}>依結束時間排序</li>
                    <li onClick={()=>{
                        setClicked(!clicked)
                        setOrder('排序方式')
                        props.nameSort(props.data)
                    }}>清除</li>
                </ul>
            </div>
            </div>
        </>
    )
}

// 選擇對應的reducer
const mapStateToProps = store => {
    return { data: store.getCouponData}
  }
  
  //action
  const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        countSort,startTimeSort,endTimeSort,nameSort
    },dispatch)
  }

export default connect(mapStateToProps,mapDispatchToProps)(CouPageTitle)