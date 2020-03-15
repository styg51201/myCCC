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
  
      console.log('ddddddd', data)
      dispatch(showItems(data))
    }
  }