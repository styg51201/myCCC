import { combineReducers } from 'redux'

// stacey
import {
  getCouponData,
  filterCoupon,
  memberCouponData,
  memberCouponFilterData,
  adData,
  memberData,
  couponTotal,
} from '../stacey/reducer/couponReducer'

//chin
import {
  getItems,
  getItemId,
  getMultipleItemId,
  getListitemName,
  reset,
  getListitemPrice,
  getItemNamehis,
} from '../chin/reducer/itemsReducer'

//mao
import {
  AddItem,
  //displayShopCart,
  getShop,
  calculator,
  calculator_total,
  MyFavorite,
  ControlDataState,
  getOrderBuyer,
  saveOrderBuyerInfoReducer,
  saveOrderBuyerProReducer
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
  couponTotal,
  filterCoupon, //sty
  getItems,
  getItemId,
  getMultipleItemId,
  getListitemName,
  reset,
  getListitemPrice,
  getItemNamehis,
  //--------- ShopCart------------
  AddItem,
  // displayShopCart,
  getShop,
  calculator,
  calculator_total,
  MyFavorite,
  ControlDataState,
  getOrderBuyer,
  saveOrderBuyerInfoReducer,
  saveOrderBuyerProReducer,
  //
  member,
  getMemberID,
})

export { rootReducer }
