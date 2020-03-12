// 老師範例
// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}

// export const addValue = value => ({ type: 'ADD_VALUE', value: value })
// export const minusValue = value => ({ type: 'MINUS_VALUE', value: value })

// export const addValueAsync = value => {
//   return dispatch => {
//     setTimeout(() => {
//       console.log('delay 3s to add value')
//       dispatch(addValue(value))
//     }, 3000)
//   }
// }


//----stacey 優惠券 -------
export const showCoupon = val =>{
    return {type:'SHOW_VALUE',value:val}
}

export const formServerCouponData = val => {
    return async dispatch => {
      const request = new Request('http://localhost:5555/coupon', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const res = await fetch(request)
      const data = await res.json()
  
      console.log('data', data)
      dispatch(showCoupon(data))
    }
  }

  export const getCoupon = (item) => {
    return async dispatch => {
      const request = new Request(`http://localhost:5555/coupon/${item.id}`, {
        method: 'PATCH',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: `{"geted":${!item.geted},"getedCount":${+item.getedCount+5}}`,
  

      })
      const res = await fetch(request)
      const data = await res.json()
  
      console.log('data', data)
      dispatch(formServerCouponData())
    }
  }
