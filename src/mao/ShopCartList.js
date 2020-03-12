import React from 'react'
import './css/mao.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import MaoShopCartBTN from '../components/MaoShopCartBTN'
import MaoCartShopTotal from '../components/MaoCartShopTotal'
import { withRouter } from 'react-router-dom'

const dataItem = [
  { id: 6, price: 10 },
  { id: 2, price: 20 },
  { id: 90, price: 30 },
  { id: 4, price: 40 },
  { id: 5, price: 50 },
]
let newCart = [
  { id: 6, price: 10, count: 1 },
  { id: 56, price: 9000, count: 5 },
  { id: 31, price: 60, count: 1 },
]
function ShopCartList() {
  const dataList = []
  for (let i = 0; i < newCart.length; i++) {
    dataList.push(
      <li key={newCart[i]} className="d-flex Mao-shopcart-check-item">
        <img src="https://fakeimg.pl/100/" alt="" />
        <div className="d-flex flex-column justify-content-between Mao-shopcart-check-item-info">
          <p>
            <b>SONY 真無線降噪入耳式耳機WF-1000XM3</b>
          </p>
          <div className="d-flex justify-content-between">
            <p style={{ width: '25%' }}>價格{newCart[i].price}</p>
            <div className="d-flex justify-content-between align-items-center Mao-shopcart-check-item-count">
              <MaoShopCartBTN
                addItems={newCart[i]}
                count="-1"
                type="minusBTN"
              />
              <input
                placeholder=""
                value={newCart[i].count}
                type="text"
                id="count-value"
                className="text-center w-50 m-0"
              />
              <MaoShopCartBTN addItems={newCart[i]} count="1" type="addBTN" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center text-left Mao-shopcart-check-item-action">
          <div className="border d-flex align-items-center">
            <img src="..\img\header-footer\heart.svg" alt="" />
            <span>刪除</span>
          </div>
          <div className="border d-flex align-items-center">
            <img src="..\img\header-footer\search.svg" alt="" />
            <span>下次購買</span>
          </div>
        </div>
      </li>
    )
  }

  const behavior = (
    <ul
      className="nav nav-tabs"
      id="myTab"
      role="tablist"
      style={{ width: '930px' }}
    >
      <li className="nav-item">
        <Link
          className="nav-link active"
          id="home-tab"
          data-toggle="tab"
          to="/ShopCartList"
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
          to="/ShopCartLike"
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
      {behavior}
      <div className="d-flex justify-content-between Mao-shopcart-list">
        <ul className="list-unstyled bg-white Mao-shopcart-list-items">
          {dataList}
          <li className="Mao-shopcart-check-btn">
            <Link to="/">前往結帳</Link>
          </li>
        </ul>
        <MaoCartShopTotal />
      </div>
      {/* </div> */}

      {/* </div> */}
    </>
  )
}
export default withRouter(ShopCartList)
