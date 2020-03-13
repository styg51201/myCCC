import React ,{useState} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {addFilterCoupon,minusFilterCoupon} from '../../actions/index'


function SideFilter (props){

  const [box,setBox] = useState(true)

  const filter = function (e){
    if(e.target.checked){
      // console.log(e.target.checked,e.target.value)
      props.addFilterCoupon(e.target.value)
    }else{
      props.minusFilterCoupon(e.target.value)
    }
  }
  

    return(
        <>
        <div className="col-3 sty-sideFilter">
          <h3 className="">品牌</h3>
          
          <hr />
          <ul>
          <li>
          </li>
            <li>
              <input type="checkbox" name="apple" id="all" value="apple" onChange={(e)=>filter(e)} /><label htmlFor="all"
                >ALL</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="apple" value=""/><label
                htmlFor="apple"
                >APPLE</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="bpple" /><label
                htmlFor="bpple"
                >APPLE</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="cpple" /><label
                htmlFor="cpple"
                >APPLE</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="dpple" /><label
                htmlFor="dpple"
                >APPLE</label>
            </li>
            <li>
              <input type="checkbox" name="apple" id="epple" /><label
                htmlFor="epple"
                >APPLE</label>
            </li>
          </ul>
        </div>
        </>
    )
}


//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    addFilterCoupon,minusFilterCoupon
  },dispatch)
}


export default connect(null,mapDispatchToProps)(SideFilter)