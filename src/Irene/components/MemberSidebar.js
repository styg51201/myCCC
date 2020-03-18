import React from 'react'
import '../I_css/MemberEdit.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, ListGroup, Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import MemberOrder from '../MemberOrder'

function MemberEdit(props) {
  return (
    <>
      {/* 要加<div className="row d-flex justify-content-center">才可以flex */}

      {/* <MemberSidebar/> */}
      <div className="membersidebar col-2">
        <ListGroup>
          <ListGroup.Item>
            <div>
              <img className="image" src="https://fakeimg.pl/150x150/" alt="" />
            </div>
            <Nav.Link className="edit">編輯</Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="/memberedit">基本資料管理</Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="/memberedit/memberorder">交易紀錄</Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link>我的收藏</Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link>優惠券</Nav.Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  )
}

export default MemberEdit
