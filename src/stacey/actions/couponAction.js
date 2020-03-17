

//------------stacey 優惠券 -----------------

 //回傳coupon
 export const showCoupon = val =>{
  return {type:'SHOW_VALUE',value:val}
}

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

      dispatch(nameSort(data))
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
    // const newsort = [...val] 
    // console.log('456',newsort)
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
export const getCoupon = (item) => {
    return async dispatch => {
      const request = new Request(`http://localhost:5500/getCoupon`, {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body:JSON.stringify({
          mb_id:5,
          cp_id:3
        })
      })
      const res = await fetch(request)
      const data = await res.json()
      // dispatch(formServerCouponData())
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