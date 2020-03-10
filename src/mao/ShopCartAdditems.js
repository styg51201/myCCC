import React, { useState } from 'react'
// import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'
import { withRouter, Link } from 'react-router-dom'
import MaoCartShopTotal from '../components/MaoCartShopTotal'

function CartList(props) {
  const ExampleToast = ({ children }) => {
    const [show, toggleShow] = useState(false)

    return (
      <>
        {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
        <Toast show={show} onClose={() => toggleShow(false)}>
          <Toast.Header>
            <strong className="mr-auto">歡迎光臨</strong>
          </Toast.Header>
          <Toast.Body>{children}</Toast.Body>
        </Toast>
      </>
    )
  }
  const dataList = []
  for (let i = 0; i < 5; i++) {
    dataList.push(
      <li
        className="d-flex"
        style={{
          padding: '15px 0px',
          width: '900px',
          margin: '0px auto',
          borderBottom: '2px solid #efefef',
        }}
      >
        <img src="https://fakeimg.pl/125/" style={{ margin: '0px 5px' }} />
        <div
          className="d-flex flex-column justify-content-between"
          style={{ margin: '0px 50px' }}
        >
          <p style={{ fontSize: '18px' }}>
            <b>SONY 真無線降噪入耳式耳機WF-1000XM3</b>
          </p>
          <div className="d-flex justify-content-between">
            <p style={{ fontSize: '18px' }}>價格7000</p>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                height: '30px',
                overflow: 'hidden',
                border: '1px solid #ddd',
                width: '85px',
              }}
            >
              <div
                className="text-center"
                style={{ fontSize: '30px', background: '#ddd', width: '30%' }}
              >
                -
              </div>
              <input
                value="1"
                type="text"
                className="text-center w-50 m-0"
                style={{ outline: 'none', border: 'none' }}
              />
              <div
                className="text-center"
                style={{ fontSize: '30px', background: '#ddd', width: '30%' }}
              >
                +
              </div>
            </div>
            <p style={{ fontSize: '18px' }}>
              <b>$7000</b>
            </p>
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-center text-left"
          style={{ margin: 'auto' }}
        >
          <div
            className="border d-flex align-items-center"
            style={{ padding: '8px 20px', margin: '10px' }}
          >
            <img
              src="./img/header-footer/heart.svg"
              style={{ marginRight: '10px' }}
              alt=""
            />
            <span>刪除</span>
          </div>
          <div
            className="border d-flex align-items-center"
            style={{ padding: '8px 20px', margin: '10px' }}
          >
            <img
              src=".\public\img\header-footer\heart.svg"
              style={{ marginRight: '10px' }}
              alt=""
            />
            <span>下次購買</span>
          </div>
        </div>
      </li>
    )
  }

  const behavior = (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item">
        <Link
          className="nav-link active"
          id="home-tab"
          data-toggle="tab"
          to="/CartList"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          購物車
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          id="profile-tab"
          data-toggle="tab"
          to="/CartList"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          收藏
        </Link>
      </li>
    </ul>
  )
  return (
    <>
      <div
        className="w-100"
        style={{ background: '#efefef', padding: '100px' }}
      >
        <div style={{ width: '1300px', margin: '0 auto' }}>
          {behavior}
          <div className="d-flex">
            <ul
              className="list-unstyled bg-white"
              style={{ width: '975px', marginLeft: '1px' }}
            >
              {dataList}
            </ul>
            <MaoCartShopTotal />
          </div>
        </div>
        <button>前往結帳</button>
      </div>
    </>
  )
}

export default withRouter(CartList)
