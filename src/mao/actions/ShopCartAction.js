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
  const request = new Request(`http://localhost:5500/shopcart/shopcart`, {
    method: 'GET',
    credentials: 'include'
  })
  const res = await fetch(request)
  const data = await res.json()
  let newData=[]
  let hadleData=data.map((v,i)=>{
    newData.push({pId:v.pId,count:v.count})
  })
  console.log(newData)
  dispatch(sendCart(newData))
  }
  }
  // 加入購物車
  
  export const realCart=value=>({type:'DISPLAY_CART',value:value})

  export const AddCart = value => ({ type: 'ADD_CART', value: value })
//數量調整
  export const AddCartItem=(val,i,data)=>{
    return dispatch=>{
      if(val){
        data[i].count+=1
      }else{
        if(data[i].count==1){
          data[i].count=1
        }else{
          data[i].count-=1
        }
      }
      dispatch(AddCart(data))
    }
  }
  //購物車增加
  export const AddCartNewItem=(val,data)=>{
    return dispatch=>{
      let newData=[]
      data.map((v,i)=>{
        newData.push(v.pId)
      })
      let test=newData.findIndex(e=>e==val)
      if(test==-1){
        
        let obj={pId:val,count:1}
        let b=[...data,obj]
        console.log(b)
        return [...data,obj]
      }else{
        data.map((v,i)=>{
          if(v.pId==val){
            v.count+=1
            return data
          }
        })
      }
      console.log('data',data)
      dispatch(AddCart(data))
    }
  }
  
