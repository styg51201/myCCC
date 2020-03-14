// 老師範例
// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}

export const addValue = value => ({ type: 'ADD_VALUE', value: value })
export const minusValue = value => ({ type: 'MINUS_VALUE', value: value })

// export const addValueAsync = value => {
//   return dispatch => {
//     setTimeout(() => {
//       console.log('delay 3s to add value')
//       dispatch(addValue(value))
//     }, 3000)
//   }
// }



// Mao購物車
//跟server要資料
//呼叫購物車
export const sendCart =value=>{
  return {type:'SHOW_CART',value:value}
}

export const getShopCart = item => {
return async dispatch => {
const request = new Request('http://localhost:5555/shopcart', {
  method: 'GET',
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
})
const res = await fetch(request)
const data = await res.json()
dispatch(sendCart(data))
}
}
//------------stacey 優惠券 -----------------
//回傳coupon
export const showCoupon = val =>{
    return {type:'SHOW_VALUE',value:val}
}
//跟server要資料
export const formServerCouponData = val => {
    return async dispatch => {
      //getCoupon
      const request = new Request('http://localhost:5555/coupon', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      //memberCoupon
      // const request = new Request('http://localhost:5555/memberCoupon', {
      //   method: 'GET',
      //   headers: new Headers({
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   }),
      // })
      const res = await fetch(request)
      const data = await res.json()
      dispatch(showCoupon(data))
    }
  }

//領取的動作
export const getCoupon = (item) => {
    return async dispatch => {
      const request = new Request(`http://localhost:5555/coupon/${item.cp_id}`, {
        method: 'PATCH',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: `{"geted":${!item.geted},"cp_getedCount":${+item.cp_getedCount+5}}`,
      })
      const res = await fetch(request)
      const data = await res.json()
      dispatch(formServerCouponData())
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
export const minusFilterCoupon = val =>{
  return {type:'MINUS_VALUE',value:val}
}

//---------------------------------------------------------------------------chin商品列表 ---------------------------------------
//回傳showItems
export const showItems = val =>{
  return {type:'SHOW_WATCH',value:val}
}
//跟node要資料
export const formServerItemsData = val => {
  return async dispatch => {
    const request = new Request(`http://localhost:5500/items/${val}`, {
      method: 'GET',
      credentials: 'include'
    })
    const res = await fetch(request)
    const data = await res.json()

    console.log('我誰!!!', data)
    dispatch(showItems(data))
  }
}