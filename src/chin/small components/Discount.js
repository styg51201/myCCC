/*-----------------------Commoditylist.js的優惠--------------------------*/
import React,{useState,useEffect} from 'react'
import { withRouter } from 'react-router-dom';

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {fromServerMemberCouponData} from '../../stacey/actions/couponAction'

//classnames
import classNames from 'classnames'
import { filter } from 'bluebird'

function Discount(props){

    const [discount,setDiscount] = useState(false)
    const DiscountClassName= classNames('chin-discount',{active:discount})

    useEffect(()=>{
        props.fromServerMemberCouponData()
      },[])
    

    return(
        <>
        <li className={DiscountClassName}>
            <div className="chin-price4" onChange={()=>{setDiscount(!discount)}}>
                <span>優惠</span>
                <img src="./chin-img/chevron-down-black.svg" alt=""/>
            </div>
            <div>
                
            </div>
        </li>
        </>
    )
}


// 選擇對應的reducer
const mapStateToProps = store => {
    return { couponData: store.memberCouponFilterData
              }
  }
  
  //action
  const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        fromServerMemberCouponData
    },dispatch)
  }

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Discount))