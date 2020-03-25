//---------------------------------------------------------------------------chin商品列表 ---------------------------------------
//回傳showItems
export const showItems = val => {
  return { type: 'SHOW_ITEMS', value: val }
}
//跟node要資料
export const formServerItemsData = val => {
  return async dispatch => {
    const request = new Request(`http://localhost:5500/items/${val}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(request)
    const data = await res.json()

    console.log('ffff', data)
    dispatch(showItems(data))
  }
}
//  I AM YOUR FATHER

export const showRANDItemId = val => {
  return { type: 'SHOW_RAND_ITEMID', value: val }
}

export const commidtyRANDItemId = val => {
  return async dispatch => {
    const request = new Request(`http://localhost:5500/items/allitems`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(request)
    const data = await res.json()
    await console.log('lllllll', data)
    dispatch(showRANDItemId(data))
  }
}

//回傳showItemId
export const showItemId = val => {
  return { type: 'SHOW_ITEMID', value: val }
}
export const commidtyItemId = val => {
  return async dispatch => {
    const request = new Request(`http://localhost:5500/items/commidty/${val}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(request)
    const data = await res.json()
    console.log()
    console.log('lllllll', data)
    dispatch(showItemId(data))
  }
}
//回傳showMultipleItemId
export const showMultipleItemId = val => {
  return { type: 'SHOW_MULTIPLE', value: val }
}
export const multiple_imagesItemId = val => {
  return async dispatch => {
    const request = new Request(
      `http://localhost:5500/items/multiple_images/${val}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    const res = await fetch(request)
    const data = await res.json()
    console.log()
    console.log('mmmmmmm', data)
    dispatch(showMultipleItemId(data))
  }
}
//-------------商品排序-------------//
export const PriceHightToLow = val => {
  return dispatch => {
    val.sort(function(a, b) {
      return a.itemPrice < b.itemPrice ? 1 : -1
    })
    dispatch(showItems([...val]))
  }
}

export const PriceLowToHight = val => {
  return dispatch => {
    val.sort(function(a, b) {
      return a.itemPrice > b.itemPrice ? 1 : -1
    })
    dispatch(showItems([...val]))
  }
}

export const NewTimeSort = val => {
  return dispatch => {
    val.sort(function(a, b) {
      return a.created_at > b.created_at ? 1 : -1
    })
    dispatch(showItems([...val]))
  }
}
//itemQty商品數量
export const HotItemsSort = val => {
  return dispatch => {
    val.sort(function(a, b) {
      return a.itemQty > b.itemQty ? 1 : -1
    })
    dispatch(showItems([...val]))
  }
}
export const AllItemsSort = val => {
  return dispatch => {
    val.sort(function(a, b) {
      return a.itemId > b.itemId ? 1 : -1
    })
    dispatch(showItems([...val]))
  }
}

//list品牌

export const ListItemName = (obj, val) => {
  if (obj.isChecked) {
    return { type: 'ITEMNAME_VALUE', value: [obj.name, ...val] }
  } else {
    let ind = val.indexOf(obj.name)
    //有空可以解bug => 只用splice失靈??? 一定要splice+map
    val.splice(ind, 1)
    let newList = val.map((val, ind) => {
      if (val !== obj.name) {
        return val
      }
    })
    return { type: 'ITEMNAME_VALUE', value: newList }
  }
}

export const ResetListItemName = (obj, val) => {
  const newList = []
  return { type: 'ITEMNAME_RESET', value: newList }
}
//Price金錢塞選

export const ListItemPrice = (obj,val)=>{
  if(obj.val){
    return { type: 'ITEMPRICE_VALUE', value: [obj.name, ...val] }
  }
}
//-----itemscompare------------------------
export const Itemscompare = val => {
  return { type: 'SHOW_ITEMSCOMPARE', value: val }
}
export const formServerItemscompare = (val,data) => {
  console.log(val,data)
  return dispatch =>{
      let newdata = [...data,val]
  dispatch(Itemscompare(newdata))
  }
  }
