import React, { useEffect, useState } from 'react'
import '../css/mao.css'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getShopCart,
  AddCart,
  realCart,
  AddCartItem,
  DelCartItem,
  calCart,
} from '../actions/ShopCartAction'
import { productList } from '../ProductList'
function MaoCartShopTotal(props) {
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    props.getShopCart()
    let TotalBox = document.querySelector('.Mao-total-box')
    document.addEventListener('scroll', e => {
      let FixScrollY = e.path[1].scrollY

      // if (FixScrollY > 170) {
      //   TotalBox.classList.add('position-fixed')
      //   // console.log(FixScrollY)
      // } else {
      //   TotalBox.classList.remove('position-fixed')
      // }
    })
  }, [])
  return (
    <>
      <div className="border bg-white Mao-total-box">
        <p className="Mao-total-box-title">
          <b>TOTAL</b>
        </p>
        <div className="Mao-total-box-title-info">
          <div>
            <b>運費</b>
            <span className="float-right">100</span>
          </div>
          <div>
            <b>小計金額</b>
            <span className="float-right" id="sTotal">{props.sTotal}
            </span>
          </div>
          <div>
            <b>活動折扣</b>
            <span className="float-right">100</span>
          </div>
          <label htmlFor="coupon" className="Mao-total-box-title-coupon">
            <div>
              <b>折價券輸入</b>
              <input type="text" placeholder="輸入折扣碼" id="coupon" />
            </div>
          </label>
        </div>
        <p style={{ fontSize: '18px' }}>
          <b>總金額</b>
          <span className="float-right">100</span>
        </p>
        <Link
          className="d-flex justify-content-center align-items-center Mao-total-box-btn text-dark"
          to=""
        >
          繼續購物
        </Link>
        <Link
          className="d-flex justify-content-center align-items-center text-white bg-dark Mao-total-box-btn"
          to="/OrderInfo"
        >
          前往結帳
        </Link>
      </div>
    </>
  )
}
// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
  return {
    //購物車內容
    data: store.getShop,
    AddItem: store.AddItem,
    Cart: store.displayShopCart,
    sTotal: store.calculator,
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getShopCart,
      AddCart,
      realCart,
      AddCartItem,
      DelCartItem,
      calCart,
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MaoCartShopTotal)
)
