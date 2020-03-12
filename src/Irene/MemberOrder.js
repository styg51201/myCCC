import React from 'react'
import './I_css/MemberLogin.css'

import { Link } from 'react-router-dom'
import { Form, ListGroup, Button } from 'react-bootstrap'
// import MemberSidebar from './components/MemberSidebar'
import './I_css/MemberEdit.css'

function MemberEdit() {
  return (
    <>
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
              <Link className="edit">編輯</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/memberedit">基本資料管理</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>交易紀錄</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>我的收藏</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>優惠券</Link>
            </ListGroup.Item>
          </ListGroup>
        </div>
        {/* 會員訂單內容 */}
        <div className="memberorder col-9"></div>
      </div>
    </>
  )
}

export default MemberEdit
