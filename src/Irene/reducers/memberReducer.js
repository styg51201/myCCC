//優惠券
export const getMemberData = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_VALUE':
      return action.value
    default:
      return state
  }
}
