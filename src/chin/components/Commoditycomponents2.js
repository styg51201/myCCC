import React,{useState} from 'react'
import { Link} from 'react-router-dom'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { formServerItemscompare,ItemscompareNo } from '../actions/itemsActions'

function Commoditycomponents(props){
    return(
        <>
            <div className="chin-commodity-item" onClick={()=>{
                                                          props.formServerItemscompare(props.data,props.compare)
                                                          props.ItemscompareNo('true', props.data, props.MyFavorite)     }}>
                <div className="chin-commodity-item-watch">
                    <img src="./chin-img/plus.svg"/>
                </div>
                <ul className="chin-star-heart-bag">
                </ul>
                <img className="chin-watchs" src={`./chin-img/images/${props.data.itemName}/${props.data.itemImg}`} alt=""/>
                <h6>{props.data.name}</h6>
                <h4>{props.data.itemName}</h4>
                <h5>NT{props.data.itemPrice}</h5>
            </div>
        </>
    )
}
const mapStateToProps = store => {
    return { compare: store.getItemscompare }
  }
  
  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        formServerItemscompare,
        ItemscompareNo
      },
      dispatch
    )
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Commoditycomponents)
  