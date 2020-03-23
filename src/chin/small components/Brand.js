/*-----------------------Commoditylist.js的品牌--------------------------*/
import React,{useState,useEffect} from 'react'

//classnames
import classNames from 'classnames'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {ListItemName} from '../actions/itemsActions'


function Brand(props){
    console.log(props)
    const [brand,setBrand] = useState(false)
    const BrandClassName= classNames('chin-brand',{active:brand})

    const filter = function (e){
        props.ListItemName({isChecked:e.target.checked,name:e.target.value},props.itemList)
    }
    
    return(
        <>
        <li className={BrandClassName}>
            <div className="chin-price2" onClick={()=>{setBrand(!brand)}}>
                <span>品牌</span>
                <img src="./chin-img/chevron-down-black.svg" alt=""/>
            </div>
            <div>
                <ul onChange={(e)=>filter(e)}>
                {props.list.map((val,ind)=>{
                  return  <li className="chin-brand-checkbox"  key={ind}>
                        <input name={val} id={val} value={val} type="checkbox"/>
                        <label for={val} className="chin-label">
                        <div className="chin-box"></div>
                        {val}
                        </label>      
                    </li>
                })}
                </ul>
            </div>
        </li>
        </>
    )
}
// 選擇對應的reducer
const mapStateToProps = store => {
    return {itemList: store.getListitemName}
  }
  
  //action
  const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        ListItemName
    },dispatch)
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Brand)