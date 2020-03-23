import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getShopCart,
  AddCart,
  AddCartItem,
  DelCartItem,
  CalShopCart,
  Handle_AddMyFavorite,
  ControlDataOne,
  fromServerorderBuyerInfo,
  CalShopCartTotal,
  calCart,forServerorderProductInfo,saveOrderBuyerInfo,clearOrderBuyerproduct
} from './actions/ShopCartAction'


function OrderSend(props){

    function test(){
        console.log('I am OrderSend')
    }
        return (<>
            test
        </>)


}
const mapStateToProps = store => {
    return {
      //購物車內容
      AddItem: store.AddItem,
      FinalTotal: store.calculator_total,
      saveOrderBuyerInfoReducer:store.saveOrderBuyerInfoReducer
    }
  }
  
  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        getShopCart,
        AddCart,
        AddCartItem,
        DelCartItem,
        CalShopCart,
        Handle_AddMyFavorite,
        ControlDataOne,
        fromServerorderBuyerInfo,
        CalShopCartTotal,
        calCart,forServerorderProductInfo,saveOrderBuyerInfo,clearOrderBuyerproduct
      },
      dispatch
    )
  }
  export default connect(mapStateToProps, mapDispatchToProps)(OrderSend)
//   export default OrderSend