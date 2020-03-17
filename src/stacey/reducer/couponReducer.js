//優惠券
export const getCouponData = (state=[],action)=>{
    switch (action.type){
      case 'SHOW_VALUE':
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

  