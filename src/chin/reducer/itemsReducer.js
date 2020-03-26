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
      console.log('77777',action.value )
      return action.value
    case 'ITEMNAME_RESET':
      return []
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

//------------------chin Price------------------------
export const getListitemPrice = (state = [], action) => {
  switch (action.type) {
    case 'ITEMPRICE_VALUE':
      console.log('77777',action.value )
      return action.value
    case 'ITEMPRICE_VALUE':
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
  console.log(action)
  console.log(state)
  switch(action.type){
    case'SHOW_ITEMSCOMPARE':
      return action.value
    case'DEL_ITEMSCOMPARE':
      return action.value
    default:
      return state
  }
}
export const getcompare = (state = [], action) => {
  // console.log('I am favor ==', action)
  switch (action.type) {
    case 'NP_COMPARE':
      return action.value
    default:
      return state
  }
}
//---------------------------------------------------------
export const resetcom = (state =true, action) => {
  switch (action.type) {
    case 'NO_RESET':
      return action.value
    default:
      return state
  }
}