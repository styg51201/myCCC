import React, { useState } from 'react'
import '../I_css/MemberLogin.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLoginAsync } from '../actions/memberAction'

function MemberLoginLeft(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

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

    if (error) {
      setError(error)
      setErrorMessages(errorMessages)
      return
    }

    const userData = { username, password }
    props.userLoginAsync(userData, () => alert('成功登入'))
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
        <div className="card col" style={{ borderRight: '1px solid #ddd' }}>
          <h3 className="MemberLoginh3">Sign In 登入</h3>
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
                className="form-control col-6"
                type="text"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <p style={{ textAlign: 'right' }}>忘記密碼?</p>
            <button
              type="button"
              className="irene-login-button"
              style={{ margin: '68px auto 20px ', display: 'block' }}
              onClick={() => handleSubmit()}
            >
              SIGN IN
            </button>
          </form>
          {/* //如果可以要做google&facebook登入                                */}
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
  return bindActionCreators({ userLoginAsync }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberLoginLeft)
