//---------------chin items--------------------

export const getItems = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_ITEMS':
      return action.value
    default:
      return state
  }
}
//----------------chin itemId-----------
export const getItemId = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_ITEMID':
      return action.value
    default:
      return state
  }
}
//------------------chin MultipleItemId--------
export const getMultipleItemId = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_MULTIPLE':
      return action.value
    default:
      return state
  }
}
//-------------------chin ListitemName------------------
export const getListitemName = (state = [], action) => {
  switch (action.type) {
    case 'ITEMNAME_VALUE':
      console.log('新增',action.value )
      return action.value
    case 'ITEMNAME_RESET':
      console.log('清空')
      return action.value
    default:
      return state
  }
}

//-------------------chin 是否reset------------------
export const reset = (state =true, action) => {
  switch (action.type) {
    case 'NO_RESET':
      return action.value
    default:
      return state
  }
}

//------------------chin 是否顯示優惠------------------------


export const showDiscount = (state ={isShow:false,value:{}}, action) => {
  switch (action.type) {
    case 'SHOW_DISCOUNT':
      return action.value
    default:
      return state
  }
}


//------------------chin Price------------------------
export const getListitemPrice = (state = [], action) => {
  switch (action.type) {
    case 'ITEMPRICE_VALUE':
      return action.value
    default:
      return state
  }
}
export const getListitemPrice2 = (state = [], action) => {
  switch (action.type) {
    case 'ITEMPRICE_VALUETWO':
      return action.value
    case 'ITEMPRICE_RESETCOM':
      return []
    default:
      return state
  }
}
//------------------chin ItemNamehis--------
export const getItemNamehis = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_ITEMSHIS':
      return action.value
    default:
      return state
  }
}
//---------------chin SHOW_ITEMSCATEGORY------------
export const getitemCategoryId = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_ITEMSCATEGORY':
      return action.value
    default:
      return state
  }
}
///------------------------chin Itemscompare-------------
export const getItemscompare = (state=[],action)=>{
  switch(action.type){
    case 'NP_COMPARE':
      return action.value
    case 'ITEMNAME_RESETCOM':
      return []
    default:
      return state
  }
}
//-----------------------chin UsersData--------------------
export const getUsersData = (state=[],action)=>{
  console.log(action)
  switch(action.type){
    case 'SHOW_USER':
      return action.value
    default:
      return state
  }
}