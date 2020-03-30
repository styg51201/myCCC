import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    AddCart,
    getShopCart,
    AddCartItem,
    DelCartItem,
    CalShopCart,
    Handle_AddMyFavorite,} from '../../mao/actions/ShopCartAction'

function MaoShopCartBTN(productInfo,props) {
// console.log('What is BTN',props)
  let RealCart = []
  let checkBox = []
  props.AddItem.map((v, i) => {
    RealCart.push(v)
    checkBox.push(v.itemId)
  })
  function checkCart(val) {
    // console.log(productInfo)
    let index = checkBox.findIndex(e => e == val.itemId)
    if (index == -1) {
      val.count=1
      RealCart.push(val)
    }else{
      RealCart.map((v, i) => {
        if (val.itemId == v.itemId) {
          v.count=+v.count+1
        }
      })
    }
    props.AddCartNewItem_sendcal(RealCart)
  }
  
  return {
    checkCart
  }
  
  
}




// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
  return {
    //購物車內容
    // data: store.getShop,
    AddItem: store.AddItem,
    // Cart: store.displayShopCart,
    MyFavorite: store.MyFavorite,
    CtrlData: store.ControlDataState,
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      AddCart,
      getShopCart,
      AddCartItem,
      DelCartItem,
      CalShopCart,
      Handle_AddMyFavorite,
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(MaoShopCartBTN)
// export default MaoShopCartBTN
