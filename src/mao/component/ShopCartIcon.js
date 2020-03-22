import React, { useEffect } from 'react'
import { IconContext } from 'react-icons'
import {FiShoppingBag } from 'react-icons/fi'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    getShopCart,
    AddCart,
    AddCartItem,
    ControlDataOne,
  } from '../actions/ShopCartAction'

function ShopCartIcon(props){
    console.log('ShopCartIcon',props.AddItem.length)

    const CartData=props.data
    const RealCart=props.AddItem

    
    useEffect(()=>{
        props.getShopCart()
    },[])
    const shopCartBoxNum=(
        <div className="Mao-ShopCartIcon-num">
            <span></span>
        </div>
    )
    const shopCartBox=(
        <div className="Mao-ShopCartIcon-box">
        {shopCartBoxNum}
        <FiShoppingBag className="Mao-ShopCarticon-icon"/>
        </div>
    )
    return(<>
    {shopCartBox}
    </>)
}
const mapStateToProps = store => {
    return {
      //購物車內容
      data: store.getShop,
      AddItem: store.AddItem,
    }
  }
  
  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        getShopCart,
        AddCart,
        AddCartItem,
      },
      dispatch
    )
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ShopCartIcon)
