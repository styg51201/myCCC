//---------------chin items--------------------

export const getItems = (state=[],action)=>{
    switch (action.type){
      case 'SHOW_WATCH':
        return action.value
        default :
        return state
    }
  }
  