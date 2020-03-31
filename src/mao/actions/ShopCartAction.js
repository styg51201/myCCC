import { productList } from '../ProductList'

export const addValue = value => ({ type: 'ADD_VALUE', value: value })
export const minusValue = value => ({ type: 'MINUS_VALUE', value: value })

// Mao購物車
//跟server要資料
//呼叫購物車
export const sendCart = value => {
  return { type: 'SHOW_CART', value: value }
}

//獲取資料庫購物車 暫時沒有連資料庫
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
      // let truePrice=v.itemPrice.split('$').join('')
      newData.push({
        itemId: v.itemId,
        name: v.name,
        itemName: v.itemName,
        itemImg: v.itemImg,
        itemPrice: v.itemPrice,
        itemCategoryId: v.itemCategoryId,
        count: v.count,
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

    await dispatch(saveOrderBuyerInfo(val))
    const res = await fetch(request)
    const data = await res.json()
    await dispatch(saveOrderBuyerInfo(val))
  }
}

//退貨
export const returnTheOrder = val => {
  return async dispatch => {
    const request = new Request(
      'http://localhost:5500/shopCart/orderBuyerInfoReturn',
      {
        method: 'POST',
        credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({orderId:val}),
      }
    )
    const res = await fetch(request)
    const data = await res.json()
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
    await console.log(val)
    await dispatch(saveOrderBuyerproduct(val))
    const res = await fetch(request)
    const data = await res.json()
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
      let newTotal= v.total-v.discount
      newData.push({
        orderId: v.orderId,
        buyerName: v.buyerName,
        shipping: v.shipping,
        buyerAdress: v.buyerAdress,
        total:newTotal,
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

//控制資料庫的呼叫 暫時使用
export const ControlDataOne = value => ({ type: 'CTRL_DATA', value: value })

// 計算產品總額
export const CalShopCart = value => {
  return dispatch => {
    let total = 0
    value.map((v, i) => {
      let truePrice = v.itemPrice.split('$').join('')
      let finalPrice = truePrice.split(',').join('')

      let sCount = finalPrice * v.count
      total += sCount
    })
    dispatch(calCart(total))
  }
}

//產品小計 計算功能
export const calCart = value => ({ type: 'CAL_TOTAL', value: value })

// 計算總額含運費活動折扣
export const CalShopCartTotal = value => ({ type: 'FINAL_TOTAL', value: value })

//計算活動券相關

export const hadleCoupon = (value, type, sTotal) => {
  return dispatch => {
    let newStotal = 0
    switch (type) {
      case 0:
        newStotal = value
        break
      case 1:
        newStotal = +sTotal - Math.round(sTotal * value)
        break
      case 2:
        newStotal = value
        break
      default:
        break
    }
    dispatch(send_hadleCoupon(newStotal))
  }
}

export const send_hadleCoupon = value => ({
  type: 'COUPON_DISCOUNT',
  value: value,
})

export const CheckCoupon = value => ({
  type: 'SAVE_COUPON',
  value: value,
})

//刪除購物車內容
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
export const AddCartItem = (val, itemId, data) => {
  let box = null
  return dispatch => {
    data.map((v, i) => {
      if (v.itemId == itemId) {
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
export const AddCartNewItem_sendcal = (val, data) => {
  // console.log('確認是否有執行')
  return dispatch => {
    let itemIdBox = []
    data.map((v, i) => {
      itemIdBox.push(v.itemId)
    })
    let index = itemIdBox.findIndex(e => e == val.itemId)
    if (index == -1) {
      let newVal = { ...val, count: 1 }
      data.push(newVal)
    } else {
      data[index].count = +data[index].count + 1
    }
    // console.log('data', data)
    dispatch(AddCart(data))
    dispatch(CalShopCart(data))
  }
}

//加入最愛
export const Handle_AddMyFavorite = (val, product, data) => {
  // let truePrice = product.itemPrice.split('$').join('')
  let newProduct = {
    itemId: product.itemId,
    name: product.name,
    itemName: product.itemName,
    itemImg: product.itemImg,
    itemPrice: product.itemPrice,
    itemCategoryId: product.itemCategoryId,
  }
  // console.log('加入我的最愛 = ', product.itemId)
  // console.log('加入我的最愛 = ', newProduct)
  let pIdBox = []
  data.map((v, i) => {
    pIdBox.push(v.itemId)
  })
  let newData = [...data]
  return dispatch => {
    if (val == true) {
      let box = pIdBox.findIndex(e => e == newProduct.itemId)
      //  console.log('dddddd',box)
      if (box == -1) {
        newData.push(newProduct)
      } else {
        // console.log('false')
        return newData
      }
    } else if (val == false) {
      let delIndex = pIdBox.findIndex(e => e == newProduct.itemId)
      let delpId = data.filter(e => e !== data[delIndex])

      newData = [...delpId]
    } else {
      return newData
    }
    dispatch(AddMyFavorite(newData))
  }
}

// export const Handel_DelMyFavorite=()
export const AddMyFavorite = value => ({ type: 'LIKE_PRODUCT', value: value })


export const cartCoupon = val => {

  return async dispatch => {
    const request = new Request('http://localhost:5500/getCoupon/memberCouponForCart', {
      method: 'POST',
      credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body:JSON.stringify({
          mb_id:val
        })
    })
    const res = await fetch(request)
    const data = await res.json()

    let newData = data.map((val,ind)=>{

      let Cname = val.cp_vendor
      let Csort = ''
      switch(val.cpr_object){
        case 0:
         Csort = "全部"
         break
        case 1:
          Csort = "穿戴式裝置"
         break
        case 2:
          Csort = "耳機/喇叭"
          break
          case 3:
         Csort = "運動攝影機"
         break
         case 4:
          Csort = "周邊"
         break
      }
  
      //條件
      let rule = ""
      let payLevel = 0
      let amount = 1
      switch(val.cpr_rule){
        case 0:
          rule = '滿件'
          payLevel = 0
         break
        case 1:
          rule = '滿件'
          amount = val.cpr_ruleNum
         break
        case 2:
          rule = '滿額'
          payLevel = val.cpr_ruleNum
          break
      }

      switch(val.cpr_discount){
        case 0:
          rule += '打折'
         break
        case 1:
          rule += '折現'
         break
      }

      //金額
      let value = 0
      switch(val.cpr_discount){
        case 0:
          value = (val.cpr_discountNum * 0.01).toFixed(2)
         break
        case 1:
          value = val.cpr_discountNum
         break
      }

      //slogan
      let object = ""
      switch(val.cpr_object){
        case 0:
        object = "全部商品"
        break
        case 1:
          object = "穿戴式裝置分類"
        break
        case 2:
          object = "耳機/喇叭分類"
          break
        case 3:
        object = "運動攝影機分類"
        break
        case 4:
          object = "周邊商品分類"
        break
        
      }
      let rule_2 = ""
      switch(val.cpr_rule){
        case 0:
          rule_2 = "結帳金額"
        break
        case 1:
          rule_2 = `滿${val.cpr_ruleNum}件`
        break
        case 2:
          rule_2 = `滿${val.cpr_ruleNum}元`
          break
      }
      //金額
      let discount = ""
      switch(val.cpr_discount){
        case 0:
          if(val.cpr_discountNum%10===0) val.cpr_discountNum /=10
          discount = `打${val.cpr_discountNum}折`
        break
        case 1:
          discount = `折扣${val.cpr_discountNum}元`
        break
      }

      let slogan = `${object}-${rule_2}${discount}`
      
      return {
        id:ind,
        value,
        Csort,
        Cname,
        rule,
        slogan,
        payLevel,
        amount
      }

    })

    dispatch({type:'CART_COUPON_DATA',value:newData})

    // console.log('memberCouponForCart',memberCouponForCart)
  }
}
