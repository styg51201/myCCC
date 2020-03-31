import React, { useState } from 'react'
import '../I_css/MemberLogin.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userRegisterAsync } from '../actions/memberAction'

function MemberLoginRight(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [error, setError] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  const email_pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

  const handleSubmit = () => {
    let error = false
    let errorMessages = []

    if (!username) {
      // console.log('nousername')
      error = true
      errorMessages.push('請輸入帳號')
    }

    if (!password) {
      error = true
      errorMessages.push('請輸入密碼')
    }

    if (!email) {
      error = true
      errorMessages.push('請輸入電子郵件')
    }
    if (!email_pattern.test(email)) {
      error = true
      errorMessages.push('電子郵件格式錯誤，請確認')
    }

    if (error) {
      setError(error)
      setErrorMessages(errorMessages)
      return
    }

    const userData = { username, password, email }
    // props.userRegisterAsync(userData, () => alert('成功登入'))
    props.userRegisterAsync(userData, () => console.log('前端傳資料成功'))
  }

  return (
    <>
      {error ? (
        <>
          <div className="alert alert-danger" role="alert">
            {errorMessages.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
        </>
      ) : (
        ''
      )}
      <div className="row my-2 memberlogin">
        <div className="col card">
          <h3 className="MemberLoginh3">Register Now 快速註冊</h3>
          <form>
            <div className="row my-2">
              <label className="col-3">帳號：</label>
              <input
                name="username"
                className="form-control col-6"
                type="text"
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="row my-2">
              <label className="col-3">密碼：</label>
              <input
                name="password"
                className="form-control  col-6"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="row my-2">
              <label className="col-3">電子信箱：</label>
              <input
                name="email"
                className="form-control col-6"
                type="text"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="irene-checkbox">
              <input type="checkbox" />
              <span>我同意會員服務條款與隱私權聲明</span>
            </div>
            <button
              type="button"
              className="irene-register-button"
              style={{ margin: '20px auto', display: 'block' }}
              onClick={() => handleSubmit()}
            >
              REGISTER NOW
            </button>
          </form>

          {/* //如果可以要做google&facebook登入*/}
        </div>
      </div>
    </>
  )
}

// 取得Redux中isAuth的值
const mapStateToProps = store => {
  return { isAuth: store.member }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userRegisterAsync }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberLoginRight)
