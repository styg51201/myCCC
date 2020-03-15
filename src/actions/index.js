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