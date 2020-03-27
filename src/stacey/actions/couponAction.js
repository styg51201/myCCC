

//------------stacey 優惠券 -----------------

 //回傳coupon
 export const showCoupon = val =>{
  return {type:'SHOW_VALUE',value:val}
}

export const getCoupon = val =>{
  return {type:'GET_VALUE',index:val}
}

export const countdownCoupon = val =>{
  return {type:'COUNTDOWN_VALUE',value:val}
}

export const countdownCouponGet = val =>{
  return {type:'COUNTDOWN_GET',index:val}
}


//跟server要資料
export const fromServerCouponData = (val,id) => {
  
    return async dispatch => {
      //getCoupon
      const request = new Request('http://localhost:5500/getCoupon', {
        method: 'POST',
        credentials: 'include',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          body:JSON.stringify({
            page:val,
            mb_id:id
          })
      })
      const res = await fetch(request)
      const data = await res.json()
  
      val === 0 ? dispatch(showCoupon(data.couponData)) : dispatch({type:'PAGE_VALUE',value:data.couponData})
      
      dispatch({type:'TOTAL_VALUE',value:data.total[0].cp_total})
    }  
 
}


  export const fromServerCountdownCouponData = (id) => {
    console.log('9999')
    return async dispatch => {
      const request = new Request('http://localhost:5500/getCoupon/countdownCoupon', {
        method: 'POST',
        credentials: 'include',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          body:JSON.stringify({
            mb_id:id
          })
      })
      const res = await fetch(request)
      const data = await res.json()
      console.log('6666',data)
  
      dispatch(countdownCoupon(data))
    }
  }



//排序方式
//依廠商名 (預設)
export const nameSort = val =>{
  return dispatch =>{
    val.sort(function(a,b){
      return a.cp_vendor > b.cp_vendor ? 1 : -1
    })
    dispatch(showCoupon([...val]))
  }
}

//依熱門程度
export const countSort = val =>{
  return dispatch =>{
    val.sort(function(a,b){
      return a.cp_getedCount > b.cp_getedCount ? -1 : 1
    })
    dispatch(showCoupon([...val]))
  }
}

//依最新時間
export const startTimeSort = val =>{
  return dispatch =>{
    val.sort(function(a,b){
      return a.cp_start > b.cp_start ? -1 : 1
    })
    dispatch(showCoupon([...val]))
  }
}

//依結束時間
export const endTimeSort = val =>{
  return dispatch =>{
    val.sort(function(a,b){
      return a.cp_due > b.cp_due ? 1 : -1
    })
    dispatch(showCoupon([...val]))
  }
}


//領取的動作
export const getCouponToServer = (cp_id,mb_id) => {
    return async dispatch => {
      const request = new Request(`http://localhost:5500/getCoupon/geted`, {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body:JSON.stringify({
          mb_id,
          cp_id
        })
      })
      const res = await fetch(request)
      const data = await res.json()
    }
  }


//篩選的動作
export const addFilterCoupon = (obj,val) =>{
  if(obj.isChecked){
    return {type:'FILTER_VALUE',value:[obj.vendorName,...val]}
  }else{
    let ind = val.indexOf(obj.vendorName)
    //有空可以解bug => 只用splice失靈??? 一定要splice+map
    val.splice(ind,1)
    let newList = val.map((val,ind)=>{
      if(val!==obj.vendorName){
        return val
      }
    })
    return {type:'FILTER_VALUE',value:newList}
  }
}

//會員的優惠券
export const showMemberCoupon = val =>{
  return {type:'M_SHOW_VALUE',value:val}
}

//會員優惠券-全部種類
export const fromServerMemberCouponData = val => {
  return async dispatch => {
    const request = new Request('http://localhost:5500/getCoupon/memberCoupon', {
      method: 'POST',
      credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body:JSON.stringify({
          mb_id:val
        })
    })
    const res = await fetch(request)
    const data = await res.json()
    dispatch(showMemberCoupon(data))
    // dispatch(memberCouponFilter(data,'get'))
  }
}

// //會員優惠券-分類
// export const memberCouponFilter = (val,state) =>{
//   console.log('5555',val)
//   let useList = []
//   let dueEndList = []
//   let getList = []
//   const today = `${new Date().getFullYear()}-${(new Date().getMonth())+1}-${new Date().getDate()}`
//   const add3days = `${new Date().getFullYear()}-${(new Date().getMonth())+1}-${new Date().getDate()+4}`

//   const todayDateTime = (Date.parse(today)).valueOf()
//   const add3daysTime = (Date.parse(add3days)).valueOf()


//   for(let i=0;i<val.length;i++){

//     let dueDateTime =  (Date.parse(val[i].cp_due)).valueOf()

//     if(val[i].cpi_use){
//       useList.push(val[i])
//     }else if( dueDateTime <= add3daysTime){
//       dueEndList.push(val[i])
//     }else{
//       getList.push(val[i])
//     }
//   }
//     switch (state) {
//       case 'use':
//         return {type:'M_FILTER_VALUE',value:useList}
//         break
//       case 'dueEnd':
//         return {type:'M_FILTER_VALUE',value:dueEndList}
//         break
//       case 'get':
//         return {type:'M_FILTER_VALUE',value:getList}
//         break
//       default :
//         return {type:'M_FILTER_VALUE',value:getList}
//         break
//     }
// }

//測試廣告

export const showAd = val =>{
  return {type:'SHOW_AD',value:val}
}

export const fromServerAdData = val => {
  // console.log('4444')
  return async dispatch => {
    const request = new Request('http://localhost:5500/getCoupon/adData', {
      method: 'GET',
      credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        })
    })
    const res = await fetch(request)
    const data = await res.json()
    dispatch(showAd(data))
  }
}

export const showMbData = val =>{
  return {type:'SHOW_MB_VALUE',value:val}
}
export const addMbData = val =>{
  return {type:'ADD_MB_VALUE',value:val}
}

export const showDiscountAction = (val,data) =>{
  return { type: 'SHOW_DISCOUNT', value: {isShow:val,value:data }}
}


export const goShopping = val =>{
  return { type: 'ITEMNAME_VALUE', value: [val] }
}

export const noReset = val =>{
  return { type: 'NO_RESET', value: val }
}