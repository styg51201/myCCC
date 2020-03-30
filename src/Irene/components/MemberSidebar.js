import React, { useEffect } from 'react'
import '../I_css/MemberEdit.scss'
import { Form, ListGroup, Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import MemberOrder from '../MemberOrder'
import $ from 'jquery'

function MemberSidebar(props) {
  const memberdata = localStorage.getItem('userdata')
  const account = JSON.parse(memberdata)
  const usernametrue = account.username
  // console.log('memberdata.username', account)
  // console.log('username', usernametrue)
  function openNav() {
    document.querySelector('.irene-side-nav').style.width = '250px'
  }
  function closeNav() {
    document.querySelector('.irene-side-nav').style.width = '0'
  }
  // useEffect(() => {
  //   $('.irene-openside-btn').click(() => {
  //     document.getElementById('mySidenav').style.width = '250px'
  //   })
  // })
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
            <Nav.Link href={'/memberedit/' + usernametrue}>
              基本資料管理
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href={'/memberedit/memberorder/' + usernametrue}>
              交易紀錄
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="/memberedit/ShopCartLike">我的收藏</Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="/memberedit/memberCoupon">優惠券</Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="/member/stories">我的故事</Nav.Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="irene-openRWDbtn">
        <button
          className="irene-openside-btn"    
          onClick={event => openNav(event)}
        >
          side
        </button>
      </div>
      <div className="irene-RWD-membersidebar irene-side-nav">
        <Nav className="flex-column">
          <Nav.Link>         
            <button
              className="irene-closeside-btn"
              style={{textAlign:'left'}}
              onClick={event => closeNav(event)}
            >
              X
            </button>
          </Nav.Link>         
            <div className="irene-image-div">
              <img className="image" src="https://fakeimg.pl/150x150/" alt="" />
            </div>          
          <Nav.Link>基本資料管理</Nav.Link>
          <Nav.Link>交易紀錄</Nav.Link>
          <Nav.Link>我的收藏</Nav.Link>
          <Nav.Link>優惠券</Nav.Link>
        </Nav>
      </div>
    </>
  )
}

export default MemberSidebar
