export const addValue = value => ({ type: 'ADD_VALUE', value: value })
export const minusValue = value => ({ type: 'MINUS_VALUE', value: value })

// Mao購物車
//跟server要資料
//呼叫購物車
export const sendCart =value=>{
    return {type:'SHOW_CART',value:value}
  }
  export const getShopCart = item => {
  return async dispatch => {
  const request = new Request(`http://localhost:5555/shopcart`, {
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
  // 加入購物車
  
  export const realCart=value=>({type:'DISPLAY_CART',value:value})
  export const AddCart = value => ({ type: 'ADD_CART', value: value })
  
  // // 加入購物車 先不加入json
  // export const updatehopCart = item => {
  //   let newItem={
  //     cdId:'CS002',
  //     pId:item.pId,
  //     count:1
  //   }
  //   return async dispatch => {
  //   const request = new Request('http://localhost:5555/shopcart', {
  //     method: 'PUT',
  //     body:JSON.stringify(newItem),
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })
  //   const res = await fetch(request)
  //   const data = await res.json()
  //   dispatch(sendCart(data))
  //   }
    // }
  