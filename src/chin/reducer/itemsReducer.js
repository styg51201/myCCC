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
  