

//------------stacey 優惠券 -----------------

 //回傳coupon
 export const showCoupon = val =>{
  return {type:'SHOW_VALUE',value:val}
}

export const getCoupon = val =>{
  return {type:'GET_VALUE',index:val}
}


//跟server要資料
export const fromServerCouponData = val => {
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
      const res = await fetch(request)
      const data = await res.json()
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
export const getCouponToServer = (item) => {
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
          mb_id:7
        })
    })
    const res = await fetch(request)
    const data = await res.json()
    dispatch(showMemberCoupon(data))
    dispatch(memberCouponFilter(data))
  }
}

//會員優惠券-分類
export const memberCouponFilter = (val,state) =>{
  let useList = []
  let endList = []
  let getList = []
  const today = `${new Date().getFullYear()}-${(new Date().getMonth())+1}-${new Date().getDate()}`
  const todayDateTime = (Date.parse(today)).valueOf()

  for(let i=0;i<val.length;i++){

    let dueDateTime =  (Date.parse(val[i].cp_due)).valueOf()

    if(val[i].cpi_use){
      useList.push(val[i])
    }else if(todayDateTime > dueDateTime){
      endList.push(val[i])
    }else{
      getList.push(val[i])
    }
  }
    switch (state) {
      case 'use':
        return {type:'M_FILTER_VALUE',value:useList}
        break
      case 'end':
        return {type:'M_FILTER_VALUE',value:endList}
        break
      case 'get':
        return {type:'M_FILTER_VALUE',value:getList}
        break
      default :
        return {type:'M_FILTER_VALUE',value:getList}
        break
    }
}

