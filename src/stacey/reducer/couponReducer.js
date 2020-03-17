//優惠券
export const getCouponData = (state=[],action)=>{
    switch (action.type){
      case 'SHOW_VALUE':
        return action.value
      case 'GET_VALUE':
        state[action.index].geted = true
        state[action.index].cp_getedCount+=1
        return [...state]
      default :
        return state
    }
  }
  
  //優惠券篩選
 export const filterCoupon = (state=[],action)=>{
    switch (action.type){
      case 'FILTER_VALUE':
          return action.value
      default :
        return state
    }
  }

//會員優惠券-全部種類
export const memberCouponData = (state=[],action)=>{
  switch (action.type){
    case 'M_SHOW_VALUE':
      return action.value
    default :
      return state
  }
}

//會員優惠券-分種類
export const memberCouponFilterData = (state=[],action)=>{
  switch (action.type){
    case 'M_FILTER_VALUE':
      return action.value
    default :
      return state
  }
}