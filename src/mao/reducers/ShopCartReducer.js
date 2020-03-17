import { combineReducers } from 'redux'



//購物車
  

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
  console.log('state',state)
  console.log('action',action)
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
  // console.log('displayShopCart',action)
  switch (action.type){
    case 'DISPLAY_CART':
      return action.value
    default:
        return state
  }
}


