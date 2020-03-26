import React,{useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { formServerItemscompare,ItemscompareNo} from '../actions/itemsActions'
import { Popper } from '@material-ui/core'

function Commoditycomponents(props){
  const [compatrtrue,setCompatrtrue]=useState(false)
    return(
        <>
            <div className="chin-commodity-item" onClick={()=>{
                                                          props.formServerItemscompare(props.data,props.compare)
                                                          props.ItemscompareNo(!compatrtrue,props.data,props.compare)
                                                          setCompatrtrue(!compatrtrue)
                                                          }}>
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
    return { compare: store.getItemscompare}
  }
  
  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        formServerItemscompare,
        ItemscompareNo,
      },
      dispatch
    )
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Commoditycomponents)
  