import React from 'react'
import './I_css/MemberLogin.scss'
import MemberLoginLeft from './components/MemberLoginLeft'
import MemberLoginRight from './components/MemberLoginRight'

function MemberLogin(props) {
  return (
    <>
      <div className="d-flex row memberloginindex">
        <div className="col card">
          <MemberLoginLeft />
        </div>
        <div className="col card">
          <MemberLoginRight />
        </div>
      </div>
    </>
  )
}
export default MemberLogin
