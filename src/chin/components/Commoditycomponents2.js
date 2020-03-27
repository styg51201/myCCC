import React,{useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
//classnames
import classNames from 'classnames'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { ItemscompareNo,SelectItemscompare} from '../actions/itemsActions'
import { Popper } from '@material-ui/core'

function Commoditycomponents(props){

  const [compatrtrue,setCompatrtrue]=useState(false)
  const [compatritems,setCompatritems]=useState()
  const CompareClassName = classNames('chin-commodity-item-compare', {
    active:compatrtrue 
  })

  
  // const course = document.querySelector('.chin-commodity-item-compare').classList.add('chin-zzzzzzzzzz')
  // props.compare.length>4?CompareClassName:'chin-commmmmm'
  function itemsss(){
    props.sendx(compatritems)
  }
  useEffect(()=>{
    if(props.delitems===props.data.itemId)setCompatrtrue(false)
    itemsss()
  },[props.delitems])
    return(
        <>
            <div className={CompareClassName} onClick={()=>{
                                                            props.ItemscompareNo(!compatrtrue,props.data,props.compare)
                                                            //我得比較store小於4個才可以做狀態更改
                                                            if(props.compare.length < 4) setCompatrtrue(!compatrtrue)
                                                            //如果等於true才會進來
                                                            if(compatrtrue) setCompatrtrue(!compatrtrue)
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
        ItemscompareNo,
        SelectItemscompare,
      },
      dispatch
    )
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Commoditycomponents)
  