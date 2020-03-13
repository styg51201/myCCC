import React ,{useState} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {addFilterCoupon} from '../../actions/index'


function SideFilter (props){

  console.log('888',props)

  const filter = function (e){
      props.addFilterCoupon({isChecked:e.target.checked,vendorName:e.target.value},props.filterList)
  }
  
    return(
        <>
        <div className="col-3 sty-sideFilter">
          <h3 className="">品牌</h3>
          <hr />
          <ul onChange={(e)=>filter(e)}>
          {props.list.map((val,ind)=>{
            return (<li key={ind}>
              <input type="checkbox" name={val} id={val} value={val}/><label
                htmlFor={val}
                >{val}</label>
            </li>)
          })}
          </ul>
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
    addFilterCoupon
  },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(SideFilter)