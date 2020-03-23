import { productList } from '../ProductList'

export const addValue = value => ({ type: 'ADD_VALUE', value: value })
export const minusValue = value => ({ type: 'MINUS_VALUE', value: value })

// Mao購物車
//跟server要資料
//呼叫購物車
export const sendCart = value => {
  return { type: 'SHOW_CART', value: value }
}

//獲取資料庫購物車
export const getShopCart = item => {
  return async dispatch => {
    const request = new Request(`http://localhost:5500/shopCart/shopCart`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(request)
    const data = await res.json()
    let newData = []
    let hadleData = data.map((v, i) => {
      newData.push({
        pId: v.pId,
        price: v.price,
        count: v.count,
        itemCategoryId: v.itemCategoryId,
        name: v.name,
      })
    })
    dispatch(sendCart(newData))
    if (item) {
      dispatch(AddCart(newData))
      dispatch(CalShopCart(newData))
      dispatch(ControlDataOne(false))
    }
  }
}

//訂單購買人資料產生
export const fromServerorderBuyerInfo = val => {
  return async dispatch => {
    const request = new Request(
      'http://localhost:5500/shopCart/orderBuyerInfo',
      {
        method: 'POST',
        credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(val),
      }
    )
    const res = await fetch(request)
    const data = await res.json()
    await console.log('000000000000000', val)
    await dispatch(saveOrderBuyerInfo(val))
  }
}

//訂單產品資料
export const forServerorderProductInfo = val => {
  return async dispatch => {
    const request = new Request(
      'http://localhost:5500/shopCart/orderproductInfo',
      {
        method: 'POST',
        credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(val),
      }
    )
    const res = await fetch(request)
    const data = await res.json()
    console.log('444444444444444444444444', data)
    await dispatch(saveOrderBuyerproduct(val))
  }
}

//呼叫訂單資料
export const getOrderFromServer = value => {
  return async dispatch => {
    const request = new Request(
      `http://localhost:5500/shopCart/orderbuyerInfo`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )
    const res = await fetch(request)
    const data = await res.json()
    let newData = []
    let hadleData = data.map((v, i) => {
      newData.push({
        orderId: v.orderId,
        buyerName: v.buyerName,
        shipping: v.shipping,
        buyerAdress: v.buyerAdress,
        total: v.total,
        ship: v.shipCost,
        discount: v.discount,
      })
    })
    dispatch(getBuyerInfo(newData))
  }
}
//儲存會員訂單資訊
export const saveOrderBuyerInfo = value => ({
  type: 'SAVE_ORDER',
  value: value,
})

//儲存會員購買產品
export const saveOrderBuyerproduct = value => ({
  type: 'SAVE_ORDER_PRODUCT',
  value: value,
})

//清除儲存會員購買產品
export const clearOrderBuyerproduct = value => ({
  type: 'CLEAR_ORDER_PRODUCT',
  value: value,
})

//呼叫訂單資料
export const getBuyerInfo = value => ({ type: 'SHOW_ORDER', value: value })

//控制資料庫的呼叫
export const ControlDataOne = value => ({ type: 'CTRL_DATA', value: value })

// 計算產品總額
export const CalShopCart = value => {
  return dispatch => {
    let total = 0
    value.map((v, i) => {
      let sCount = v.price * v.count
      total += sCount
    })
    dispatch(calCart(total))
  }
}

//產品小計 計算功能
export const calCart = value => ({ type: 'CAL_TOTAL', value: value })

// 計算總額含運費活動折扣
export const CalShopCartTotal = value => ({ type: 'FINAL_TOTAL', value: value })

//刪除
export const DelCartItem = (i, data) => {
  return dispatch => {
    let newData = data.filter(e => e !== data[i])
    dispatch(DelCart(newData))
    dispatch(CalShopCart(newData))
  }
}

// 購物車新增 & 刪除
export const AddCart = value => ({ type: 'ADD_CART', value: value })
export const DelCart = value => ({ type: 'DEL_CART', value: value })
//數量調整
export const AddCartItem = (val, pId, data) => {
  let box = null
  return dispatch => {
    data.map((v, i) => {
      if (v.pId == pId) {
        box = i
      }
    })
    if (val) {
      data[box].count++
    } else {
      if (data[box].count == 1) {
        data[box].count = 1
      } else {
        data[box].count--
      }
    }
    dispatch(AddCart(data))
  }
}

//購物車按鍵
export const AddCartNewItem_sendcal = data => {
  return dispatch => {
    dispatch(AddCart(data))
    dispatch(CalShopCart(data))
  }
}

//加入最愛 目前會出錯 點選加入最愛會出現undefined
export const Handle_AddMyFavorite = (val, product, data) => {
  let pIdBox = []
  data.map((v, i) => {
    pIdBox.push(v.pId)
  })
  let newData = [...data]
  return dispatch => {
    if (val == 'true') {
      let box = pIdBox.findIndex(e => e == product.pId)
      if (box == -1) {
        newData.push(product)
      } else {
        return newData
      }
    } else if ((val = 'false')) {
      let delpId = data.filter(e => e !== product)
      newData = [...delpId]
    } else {
      return newData
    }
    dispatch(AddMyFavorite(newData))
  }
}

export const calDiscount = (val, data) => {
  return dispatch => {
    switch (val) {
      case '8折':
        data = data * val * 0.1
        break
      case '-100':
        data = data - 100
        break
      case '-500':
        data = data - 500
        break
      default:
        console.log(data)
    }
    dispatch(CalShopCartTotal(data))
  }
}

// export const Handel_DelMyFavorite=()
export const AddMyFavorite = value => ({ type: 'LIKE_PRODUCT', value: value })
