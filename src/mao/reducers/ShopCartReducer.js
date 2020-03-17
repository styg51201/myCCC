import { combineReducers } from 'redux'
import {productList} from '../ProductList'


//購物車

//產品小計
export const calculator=(state=0,action)=>{
  switch(action.type){
    case 'CAL_TOTAL':
      return action.value
      default:
        return state
  }
}
//呼叫會員購物車
export const getShop = (state=[],action)=>{
  switch (action.type){
    case 'SHOW_CART':
      return action.value
    default :
      return state
  }
}
// control購物車品項
export const AddItem=(state=[],action)=>{
  switch (action.type){
    case 'ADD_CART':
      return  action.value
    case 'DEL_CART':
      return action.value
      default:
        return state
  }
}
export const displayShopCart=(state=[],action)=>{
  switch (action.type){
    case 'DISPLAY_CART':
      return action.value
    default:
        return state
  }
}


