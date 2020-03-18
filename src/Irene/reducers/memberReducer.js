//註冊與登入
export const member = (state = { isAuth: false }, action) => {
  switch (action.type) {
    case 'USER_REGISTER':
      return { ...action.data, isAuth: true }
    case 'USER_LOGIN':
      return { ...action.data, isAuth: true }
    // case 'USER_LOGOUT':
    //   return { isAuth: false }
    default:
      return state
  }
}

//得到會員ID
export const getMemberID = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_MEMBERID':
      return action.value
    default:
      return state
  }
}
