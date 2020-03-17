export const addValue = value => ({ type: 'ADD_VALUE', value: value })
export const minusValue = value => ({ type: 'MINUS_VALUE', value: value })

// Mao購物車
//跟server要資料
//呼叫購物車
export const sendCart =value=>{
    return {type:'SHOW_CART',value:value}
  }

  //獲取資料庫購物車
  export const getShopCart = item => {
  return async dispatch => {
  const request = new Request(`http://localhost:5500/shopCart/shopCart`, {
    method: 'GET',
    credentials: 'include'
  })
  const res = await fetch(request)
  const data = await res.json()
  let newData=[]
  let hadleData=data.map((v,i)=>{
    newData.push({pId:v.pId,count:v.count})
  })
  dispatch(sendCart(newData))
  dispatch(AddCartNewItem(newData))
  }
  }

  // 加入購物車
  export const realCart=value=>({type:'DISPLAY_CART',value:value})

  //刪除
  export const DelCartItem=(i,data)=>{
    return dispatch=>{
      let newData=data.filter(e=>e!==data[i])
      dispatch(DelCart(newData))
    }
  }

//數量調整
  export const AddCartItem=(val,pId,data)=>{
    
    let box=null
    return dispatch=>{  
    data.map((v,i)=>{
      if(v.pId==pId){
        box=i
      }
    })
    console.log('77777',data)

    console.log('data[box].count',data[box].count)
      if(val){
          data[box].count++
        }else{
          if(data[box].count==1){
            data[box].count=1
          }else{
            data[box].count--
          }
      }
      dispatch(AddCart(data))
    }
  }

  // 購物車新增 刪除
  export const AddCart = value => ({ type: 'ADD_CART', value: value })
  export const DelCart = value =>({type:'DEL_CART',value:value})

  //購物車按鍵
  export const AddCartNewItem = value =>({type:'ADD_CART',value:value})
  
