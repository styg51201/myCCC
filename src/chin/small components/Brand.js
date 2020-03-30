/*-----------------------Commoditylist.js的品牌--------------------------*/
import React,{useState,useEffect} from 'react'

//classnames
import classNames from 'classnames'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {ListItemName,ResetListItemName} from '../actions/itemsActions'
import {showDiscountAction} from '../../stacey/actions/couponAction'


import { CommunicationCallSplit } from 'material-ui/svg-icons'


function Brand(props){
    const [brand,setBrand] = useState(false)
    const BrandClassName= classNames('chin-brand',{active:brand})

    const filter = function (e){
        props.ListItemName({isChecked:e.target.checked,name:e.target.value},props.itemList)
        props.showDiscountAction(false,{})
    }
    

    useEffect(()=>{
    
        // setTimeout(()=>{
            // if( props.itemList.length > 0 ) {
            //     setBrand(true)
            // } 
            // else{
            //     setBrand(false)

            // }
        //    },2000)

        return () => props.ResetListItemName()
    },[])

   useEffect(()=>{
    if( props.itemList.length > 0 ) {
        setBrand(true)
    } 
        
    },[props.itemList])
    

    
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

                   let checked =  ''
                   if (props.itemList.indexOf(val) > -1 ) checked = 'checked'

                  return  <li className="chin-brand-checkbox"  key={ind}>
                        <input name={val} id={val} value={val} type="checkbox" checked={checked}/>
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
        ListItemName,ResetListItemName,showDiscountAction
    },dispatch)
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Brand)