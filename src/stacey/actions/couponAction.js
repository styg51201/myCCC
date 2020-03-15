

//------------stacey 優惠券 -----------------
//跟server要資料
export const formServerCouponData = val => {
    return async dispatch => {
      //getCoupon
      const request = new Request('http://localhost:5500/getCoupon', {
        method: 'GET',
        credentials: 'include',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          })
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
      console.log('4444',data)

      dispatch(showCoupon(data))
    }
  }


  //回傳coupon
export const showCoupon = val =>{
    return {type:'SHOW_VALUE',value:val}
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