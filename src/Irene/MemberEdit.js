import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import { Form, ListGroup, Button } from 'react-bootstrap'
// import MemberSidebar from './components/MemberSidebar'
import './I_css/MemberEdit.scss'
import MemberSidebar from './components/MemberSidebar'
import MemberOrder from './MemberOrder'
import MemberCollection from './MemberCollection'
import ShopCartLike from '../mao/ShopCartLike'
import MemberCoupon from '../stacey/MemberCoupon'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getserverMember } from './actions/memberAction'

function MemberEdit(props) {
  console.log(props)
  // console.log(props.data.Name)
  //固定帳號跟密碼傳自localstorage，剩下資料採用redux
  let memberaccount = {}
  memberaccount = JSON.parse(localStorage.getItem('userdata'))
  console.log(memberaccount.username)
  console.log(memberaccount.password)
  //遇到資料undefined時解法，因為第1次先跑時抓到undefined，會擋住後面再跑。

  let emaildefault = props.data[0] ? props.data[0].Email : ''
  // let passworddefault = props.data[0] ? props.data[0].Pwd : ''
  let namedefault = props.data[0] ? props.data[0].Name : ''
  let genderdefault = props.data[0] ? props.data[0].Gender : ''
  let birthdaydefault = props.data[0] ? props.data[0].Birthday : ''
  let phonenumberdefault = props.data[0] ? props.data[0].PhoneNumber : ''
  let addressdefault = props.data[0] ? props.data[0].Address : ''

  //設鉤子
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [address, setAddress] = useState('')
  const abc = true
  useEffect(() => {
    // const用props繫結值去抓account
    props.getserverMember()
  }, [])

  const handlesubmit = event => {
    //防止reload
    event.preventDefaul()

    //傳入更新資料打包
    const memberupdate = { email, name, birthday, gender, phonenumber, address }
    let formData = new FormData()
    for (let key in memberupdate) {
      formData.append(`${key}`, memberupdate[key])
    }

    updateDataToServer(memberupdate, () => alert('更新成功'))

    async function updateDataToServer(memberupdate, callback) {
      const request = new Request('http://localhost:5500/member/update', {
        method: 'POST',
        body: formData,
      })
      const response = await fetch(request)
      const data = await response.json()
      callback()
      return data
    }
  }
  // if (memberaccount != false) {
  return (
    <>
      <Switch>
        {/* <Route path="/memberedit/:memberaccount">
          <memberedit />
        </Route> */}
        <Route path="/memberedit/memberorder">
          <MemberOrder />
        </Route>
        <Route path="/memberedit/membercollection">
          <MemberCollection />
        </Route>
        <Route path="/memberedit/ShopCartLike">
          <ShopCartLike />
        </Route>
        <Route path="/memberedit/memberCoupon">
          <MemberCoupon />
        </Route>
        {/* //最後要新增一頁，如果路由不對要顯示頁面錯誤然後跳轉。 
    <Route path="*">
          <PageNitFound />
        </Route> */}

        <div className="row d-flex justify-content-center">
          <MemberSidebar />
          {/* 會員資料編輯內容 */}
          <div className="memberedit col-9">
            <h3>基本資料管理</h3>
            <hr />
            <Form>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">帳號</label>
                <div className="col-sm-10">
                  <input
                    readOnly
                    type="text"
                    className="form-control-plaintext"
                    id="staticaccount"
                    name="account"
                    value={memberaccount.username}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">電子信箱</label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={emaildefault}
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">密碼</label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={memberaccount.password}
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">姓名</label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={namedefault}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">性別</label>
                <div className="col-sm-10">
                  <select
                    className="custom-select col-sm-4"
                    required
                    value={genderdefault}
                    name="gender"
                    onChange={e => setGender(e.target.value)}
                  >
                    <option value="男">男</option>
                    <option value="女">女</option>
                    <option value="不便告知">不便告知</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">生日</label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    name="birthday"
                    value={birthdaydefault}
                    onChange={e => setBirthday(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">電話 </label>
                <div className="col-sm-10">
                  <div>
                    <input
                      type="text"
                      className="col-sm-8 form-control"
                      name="phonenumber"
                      value={phonenumberdefault}
                      onChange={e => setPhonenumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">地址 </label>
                <div className="col-sm-10">
                  <div>
                    <input
                      type="text"
                      className="col-sm-8 form-control"
                      name="address"
                      value={addressdefault}
                      onChange={e => setAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Button
                  className="Irene_submit"
                  type="submit"
                  onClick={event => handlesubmit(event)}
                >
                  更新
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Switch>
    </>
  )
  // }
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getMemberID }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getserverMember,
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MemberEdit)
)
