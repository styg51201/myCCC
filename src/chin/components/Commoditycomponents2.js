import React,{useState} from 'react'
import { Link} from 'react-router-dom'
import {AddCart} from '../../mao/actions/ShopCartAction'

function Commoditycomponents(props){
    // console.log(props.data.itemId)
    // console.log(props)
    return(
        <>
            <div className="chin-commodity-item" onClick={()=>{props.sendId(props.itemId==props.data.itemId)}}>
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


export default Commoditycomponents