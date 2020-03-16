//member跟server要資料
export const getMember = val => {
  return async dispatch => {
    //getCoupon
    const request = new Request(`http://localhost:5500/member/${val}`, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const res = await fetch(request)
    const data = await res.json()
    console.log('hehehe', data)

    dispatch(getMember(data))
  }
}

//回傳memberId
export const showMemberId = val => {
  return { type: 'SHOW_ITEMID', value: val }
}
