import React from 'react'
import './I_css/MemberLogin.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, ListGroup, Button } from 'react-bootstrap'
// import MemberSidebar from './components/MemberSidebar'
import './I_css/MemberEdit.css'
import Nav from 'react-bootstrap/Nav'

import MemberOrder from './MemberOrder'

function MemberEdit(props) {
  return (
    <>
      <Router>
        <>
          <Switch>
            <Route path="/memberorder">
              <MemberOrder />
            </Route>
          </Switch>
        </>
      </Router>
      //最後要新增一頁，如果路由不對要顯示頁面錯誤然後跳轉。
      {/* <Route path="*">
          <PageNitFound />
        </Route> */}
      {/* <MemberSidebar/> components 結尾要再加入</div>包整個才可以flex   */}
      <div className="row d-flex justify-content-center">
        <div className="membersidebar col-2">
          <ListGroup>
            <ListGroup.Item>
              <div>
                <img
                  className="image"
                  src="https://fakeimg.pl/150x150/"
                  alt=""
                />
              </div>
              <Nav.Link className="edit">編輯</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/memberedit">基本資料管理</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/memberorder">交易紀錄</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link>我的收藏</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link>優惠券</Nav.Link>
            </ListGroup.Item>
          </ListGroup>
        </div>
        {/* 會員資料編輯內容 */}
        <div className="membereditcontent col-9">
          <h3>基本資料管理</h3>
          <hr />
          <Form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">帳號</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="固定的帳號"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">電子信箱</label>
              <div className="col-sm-4">
                <input type="email" className="form-control" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">密碼</label>
              <div className="col-sm-4">
                <input type="password" className="form-control" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">姓名</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">性別</label>
              <div className="col-sm-10">
                <select className="custom-select col-sm-4" required>
                  <option selected value="">
                    男
                  </option>
                  <option value="">女</option>
                  <option value="">不便告知</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">生日</label>
              <div className="col-sm-4">
                <input type="date" className="form-control" id="" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">地址 </label>
              <div className="col-sm-10">
                <select className="custom-select col-sm-4" required>
                  <option selected value="">
                    台北市
                  </option>
                </select>
                <select className="custom-select col-sm-4" required>
                  <option selected value="">
                    大安區
                  </option>
                </select>
                <div>
                  <input type="text" className="col-sm-8 form-control" />
                </div>
              </div>
            </div>
            <div className="text-right">
              <Button variant="dark">送出</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default MemberEdit
