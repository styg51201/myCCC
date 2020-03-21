export const userRegister = userData => ({
  type: 'USER_REGISTER',
  data: userData,
})
//補:檢查填寫格式
export const userRegisterAsync = (userData, callback) => {
  return async dispatch => {
    const request = new Request('http://localhost:5500/member/insert', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // console.log(JSON.stringify(userData))

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)

    // 設定資料
    dispatch(userRegister(data))
    callback()
  }
}

//登入
export const userLogin = userData => ({
  type: 'USER_LOGIN',
  data: userData,
})

export const userLoginAsync = (userData, callback) => {
  return async dispatch => {
    const request = new Request(
      'http://localhost:5500/member/test?memberaccount=' + userData.username,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )

    console.log(JSON.stringify(userData))

    const response = await fetch(request)
    const data = await response.json()
    console.log('res data', data)

    if (data.length > 0) {
      if (
        data[0].Account === userData.username &&
        data[0].Pwd === userData.password
      ) {
        console.log(data)
        // 設定資料
        dispatch(userLogin(userData))
        //存入localstorage
        localStorage.setItem('userdata', JSON.stringify(userData))
        window.location = `http://localhost:3000/memberedit/${userData.username}`
        //如果之後會員登入應該是以會員編輯資料網址為主http://localhost:3000/memberedit/:memberaccount
        // alert(`${userData.username}登入成功`)
        console.log('登入成功')
      } else {
        alert('帳密錯誤')
      }
    }
  }
}

//回傳memberId
export const getMember = val => {
  return { type: 'SHOW_MEMBERID', value: val }
}

//member跟server要資料
export const getserverMember = val => {
  return async dispatch => {
    const request = new Request(`http://localhost:5500/member/`, {
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
