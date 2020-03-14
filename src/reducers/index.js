import { combineReducers } from 'redux'

//老師範例
// 第一步：建立reducer
// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_VALUE':
      return state + action.value
    case 'MINUS_VALUE':
      return state - action.value
    default:
      return state
  }
}

//---------------chin items--------------------

const getItems = (state=[],action)=>{
  switch (action.type){
    case 'SHOW_WATCH':
      return action.value
      default :
      return state
  }
}




//優惠券
//-----------stacey 優惠券---------------------
const getCouponData = (state=[],action)=>{
  switch (action.type){
    case 'SHOW_VALUE':
      return action.value
    default :
      return state
  }
}

//優惠券篩選
const filterCoupon = (state=[],action)=>{
  switch (action.type){
    case 'FILTER_VALUE':
        return action.value
    default :
      return state
  }
}


// 合併多個reducer (必要，為了要配合瀏覽器開發外掛使用)
const rootReducer = combineReducers({
  counter,getCouponData,filterCoupon,getItems
})

export { rootReducer }
