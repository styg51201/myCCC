//---------------------------------------------------------------------------chin商品列表 ---------------------------------------
//回傳showItems
export const showItems = val =>{
    return {type:'SHOW_ITEMS',value:val}
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
//回傳showItemId
export const showItemId = val =>{
  return {type:'SHOW_ITEMID',value:val}
}
  export const commidtyItemId = val =>{
    return async dispatch => {
      const request = new Request(`http://localhost:5500/items/commidty/${val}`,{
        method:'GET',
        credentials: 'include'
      })
      const res = await fetch(request)
      const data = await res.json()
    console.log()
    console.log('lllllll', data)
    dispatch(showItemId(data))
  }
}