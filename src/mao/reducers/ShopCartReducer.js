


// action處理區塊


const ShopcartReduer=(state=[],action)=>{

  // 增加購物車產品按鍵
  if(action.type==='AddItem'){
    // 從資料庫尋找產品
    let AddedItem=state.shopcart.find(item=>item.id===action.id)
    if(AddedItem){
      state.shopCart.count +=1
      return {
        ...shopCart,
        total:total+AddedItem.price
      }
    }else{
      state.shopCart.count+=1
      return {
        shopCart:[...state.shopCart,AddedItem],
        total:total+AddedItem.price
      }
    }
  
  }

}

// 移除購物車產品按鍵
if(action.type===DelItem){
  // 從資料庫尋找產品
  let DeledItem=state.db_data.find(item=>item.id===action.id)
  // 透過filter篩選移除的對象
  let new_ShopCart=state.shopCart.filter(item=>item.id!==action.id)
  // 扣除移除產品的價格
  let new_Total=state.total-(DeledItem.price*DeledItem.count)

  return {
    ...state,
    shopCart:new_ShopCart,
    total:new_Total
  }
}

// 購物車數量增加
if(action.type===AddCount){
  // 從資料庫尋找產品
  let AddedItem=state.db_data.find(item=>item.id===action.id)
  // 增加數量
  AddedItem.count+=1
  let new_Total=state.total+AddedItem.price
  return {
    ...state,
    total:new_Total
  }
}

// 購物車數量減少
if(action.type===MinusCount){
  // 從資料庫尋找產品
  let AddedItem=state.db_data.find(item=>item.id===action.id)
  // 判斷傳入的產品數量是否為1，如果扣掉1為0，則移除購物車的項目
  if(AddedItem.count===1){
    let new_Cart=state.shopCart.filter(item=>item.id!==action.id)
    let new_Total=state.total-AddedItem.price
    return {
      ...state,
      shopCart:new_Cart,
      total:new_Total
    }
  }else{
    // 大於1則更新數量就好了
    AddedItem.count -=1
    let new_Total=state.total-AddedItem.price
    return {
      ...state,
      total:new_Total
    }
  }
}

export default ShopcartReduer