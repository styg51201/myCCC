//優惠券
export const getCouponData = (state=[],action)=>{
    switch (action.type){
      case 'SHOW_VALUE':
        return action.value
      case 'PAGE_VALUE':
        return [...state,...action.value]
      case 'GET_VALUE':
        state[action.index].geted = true
        state[action.index].cp_getedCount+=1
        return [...state]
      default :
        return state
    }
  }

  export const countdownCouponData = (state=[],action)=>{
    switch (action.type){
      case 'COUNTDOWN_VALUE':
        return action.value
      case 'COUNTDOWN_GET':
        state[action.index].geted = true
        state[action.index].cp_getedCount+=1
        return [...state]
      default :
        return state
    }
  }

  
//優惠券篩選
export const couponTotal = (state=0,action)=>{
  switch (action.type){
    case 'TOTAL_VALUE':
        return action.value
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


//廣告測試
export const adData = (state=[],action)=>{
  switch (action.type){
    case 'SHOW_AD':
      return action.value
    default :
      return state
  }
}

export const memberLikeData = (state=[],action)=>{
  switch (action.type){
    case 'SHOW_LIKE_VALUE':
      return action.value
    case 'ADD_LIKE_VALUE':
      return [...state,action.value]
    case 'DEL_LIKE_VALUE':
      let newState = state.filter((val,ind)=>val.p_id !== action.value.itemId)
      return newState
    default :
      return state
  }
}

