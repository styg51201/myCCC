//---------------chin items--------------------

export const getItems = (state=[],action)=>{
    switch (action.type){
      case 'SHOW_ITEMS':
        return action.value
        default :
        return state
    }
  }
//----------------chin itemId-----------
export const getItemId = (state=[],action)=>{
    switch (action.type){
      case 'SHOW_ITEMID':
        return action.value
        default :
        return state
    }
  }
//------------------chin MultipleItemId--------
export const getMultipleItemId = (state=[],action)=>{
  switch (action.type){
    case 'SHOW_MULTIPLE':
      return action.value
      default :
      return state
  }
}
//-------------------chin ListitemName------------------
  export const getListitemName = (state=[],action)=>{
    switch (action.type){
      case 'ITEMNAME_VALUE':
          return action.value
      default :
        return state
    }
  }