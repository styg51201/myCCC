import { combineReducers } from 'redux'
import { productList } from '../ProductList'

//購物車

//產品小計
export const calculator = (state = 0, action) => {
  // console.log('calculator', action)
  switch (action.type) {
    case 'CAL_TOTAL':
      return action.value
    default:
      return state
  }
}

//計算總額含運費行銷折扣
export const calculator_total = (state = 0, action) => {
  switch (action.type) {
    case 'FINAL_TOTAL':
      return action.value
    default:
      return state
  }
}

//防止重新呼叫data
export const ControlDataState = (state = true, action) => {
  switch (action.type) {
    case 'CTRL_DATA':
      return action.value
    default:
      return state
  }
}

//呼叫會員購物車
export const getShop = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_CART':
      return action.value
    default:
      return state
  }
}

// control購物車品項
export const AddItem = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CART':
      return action.value
    case 'DEL_CART':
      return action.value
    default:
      return state
  }
}

//我的最愛
export const MyFavorite = (state = [], action) => {
  // console.log('action',action)
  switch (action.type) {
    case 'LIKE_PRODUCT':
      return action.value
    default:
      return state
  }
}

//呼叫訂單資料
export const getOrderBuyer=(state=[],action)=>{
  console.log('getOrderBuyer',action)
  switch (action.type){
    case 'SHOW_ORDER':
      return action.value
    default:
      return state
  }
}

//呼叫訂單資料
export const saveOrderBuyerInfoReducer=(state='',action)=>{
  console.log('saveOrderBuyerInfoReducer',action)
  switch (action.type){
    case 'SAVE_ORDER':
      return action.value
    default:
      return state
  }
}

//暫時用不到
export const displayShopCart = (state = [], action) => {
  switch (action.type) {
    case 'DISPLAY_CART':
      return action.value
    default:
      return state
  }
}
