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

export const ItemscompareNocompare = value => ({ type: 'NP_COMPARE', value: value })
export const ItemscompareNo = (val, product, data) => {
  // console.log(val, product, data)
  let pIdBox = []
  data.map((v, i) => {
    pIdBox.push(v.itemId)
  })
  let newData = [...data]
  return dispatch => {
    if (val == true) {
      if(newData.length<4){
        newData.push(product)
      }else{
         newData=data
      }
    } else if (val == false) {
      let delIndex = pIdBox.findIndex(e => e == product.itemId)
      let delpId = data.filter(e => e !== data[delIndex])
      newData = [...delpId]
    } else {
      return newData
    }
    dispatch(ItemscompareNocompare(newData))
  }
}
  export const ResetListItemNameCom = (obj, val) => {
    const newdata = []
    return { type: 'ITEMNAME_RESETCOM', value: newdata }
  }

//---------------comparepages--------------------------
export const showComparepages = val => {
  return { type: 'SHOW_COMPAREPAGES', value: val }
}
//跟node要comparepages資料
export const formServercomparepagesData = val => {
  return async dispatch => {
    const request = new Request(`http://localhost:5500/items/comparepages/${val}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(request)
    const data = await res.json()

    console.log('comparepages', data)
    dispatch(showComparepages(data))
  }
}