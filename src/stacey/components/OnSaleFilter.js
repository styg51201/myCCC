import React ,{useState} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {} from '../actions/couponAction'


//icon
import { IconContext } from 'react-icons'
import {
  FiChevronDown
} from 'react-icons/fi'


function OnSaleFilter (props){


  const filter = function (e){
      
  }
  

    return(
        <>
         <div className="col-3 sty-onSale-sideFilter">
          <div className="sty-FilterItem">
            <div className="sty-title">
              <h3>價格</h3>
              <FiChevronDown />
            </div>
            <hr />
            <ul>
              <li>
                <input type="checkbox" name="{val}" id="{val}" value="{val}" />
                <label htmlFor="{val}">
                  <div className="sty-box"></div>
                
                </label>
              </li>
            </ul>
          </div>
          <div className="sty-FilterItem">
            <div className="sty-title">
              <h3>品牌</h3>
              <FiChevronDown />
            </div>
            <hr />
            <ul>
              <li>
                <input type="checkbox" name="{val}" id="{val}" value="{val}" />
                <label htmlFor="{val}">
                  <div className="sty-box"></div>
                 
                </label>
              </li>
            </ul>
          </div>
        </div>
        </>
    )
}


// 選擇對應的reducer
const mapStateToProps = store => {
  return {  filterList: store.filterCoupon,}
}

//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    
  },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(OnSaleFilter)