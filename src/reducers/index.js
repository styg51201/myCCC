import { combineReducers } from 'redux'

// stacey
import {
  getCouponData,
  filterCoupon,
  memberCouponData,
  memberCouponFilterData,
  adData,
  memberData,
} from '../stacey/reducer/couponReducer'

//chin
import {
  getItems,
  getItemId,
  getMultipleItemId,
} from '../chin/reducer/itemsReducer'

//mao
import {
  AddItem,
  displayShopCart,
  getShop,
  calculator,
  calculator_total,
  MyFavorite,
  ControlDataState,
} from '../mao/reducers/ShopCartReducer'
import { getMemberID, member } from '../Irene/reducers/memberReducer'

//老師範例
// 第一步：建立reducer
// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'ADD_VALUE':
//       return state + action.value
//     case 'MINUS_VALUE':
//       return state - action.value
//     default:
//       return state
//   }
// }

// 合併多個reducer (必要，為了要配合瀏覽器開發外掛使用)
const rootReducer = combineReducers({
  memberCouponFilterData,
  memberCouponData,
  getCouponData,
  adData,
  memberData,
  filterCoupon, //sty 
  getItems,
  getItemId,
  getMultipleItemId,
  AddItem,
  displayShopCart,
  getShop,
  calculator,
  calculator_total,
  MyFavorite,
  ControlDataState,
  member,
  getMemberID,
})

export { rootReducer }
