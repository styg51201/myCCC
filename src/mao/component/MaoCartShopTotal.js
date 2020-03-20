import React, { useState,useEffect } from 'react'
import '../css/mao.scss'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getShopCart,
  AddCart,
  realCart,
  AddCartItem,
  DelCartItem,
  calCart,CalShopCartTotal
} from '../actions/ShopCartAction'
import { productList } from '../ProductList'
import $ from 'jquery'
function MaoCartShopTotal(props) {

  const [shipping,setShipping]=useState(100)
  const [discount,setDiscount]=useState(0)

  console.log(props.AddItem)  




let buyerTotal=0
function CalTotal(){
  buyerTotal=props.sTotal+shipping+discount
  console.log(buyerTotal)
  props.CalShopCartTotal(buyerTotal)
}


  useEffect(() => {
    CalTotal()
    props.getShopCart()
    $(document).on('scroll', () => {
      let test = $(document).scrollTop()
      // console.log(test)
      if (test > 120) {
        $('.Mao-total-box-fixed').css({ opacity: 1, height: '145px' })
        $('.Mao-total-box').css({ opacity: 0, height: '0px' })
      } else {
        $('.Mao-total-box').css({ opacity: 1, height: '400px' })

        $('.Mao-total-box-fixed').css({ opacity: 0, height: '0px' })
      }
    })
  }, [])

  useEffect(()=>{
    CalTotal()
  },[props.AddItem,props.sTotal])
  const NofixedDisplay = (
    <>
      <div className="border bg-white Mao-total-box">
        <p className="Mao-total-box-title">
          <b>TOTAL</b>
        </p>
        <div className="Mao-total-box-title-info">
          <div>
            <b>運費</b>
            <span className="float-right">{shipping}</span>
          </div>
          <div>
            <b>小計金額</b>
            <span className="float-right">{props.sTotal}</span>
          </div>
          <div>
            <b>活動折扣</b>
            <span className="float-right">{discount}</span>
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
          <span className="float-right">{props.FinalTotal}</span>
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
  const fixedDisplay = (
    <>
      <div className="border bg-white Mao-total-box-fixed">
        <div className="container">
          <div>
            <p className="Mao-total-box-title-fixed">
              <b>TOTAL</b>
            </p>
            <div className="Mao-total-box-title-info-fixed">
              <div>
                <b>運費</b>
                <span className="mx-5">{shipping}</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="mt-1 w-75">
                  <b>小計金額</b>
                  <span className="ml-3" id="sTotal">
                    {props.sTotal}
                  </span>
                </div>
                <p className="mt-3 d-flex Mao-total-box-totalNum-fixed">
                  <b>總金額</b>
                  <span className="mx-2">{props.FinalTotal}</span>
                </p>
              </div>
            </div>
            <div className="Mao-total-box-total-fixed">
              <div>
                <label
                  htmlFor="coupon"
                  className="Mao-total-box-title-coupon-fixed"
                >
                  <div className="w-100">
                    <b>折價券輸入</b>
                  </div>
                </label>
                <input
                  className="Mao-total-box-title-coupon-fixed-input ml-3 "
                  type="text"
                  placeholder="輸入折扣碼"
                  id="coupon"
                  onBlur={() => {
                    console.log('驗證')
                  }}
                /><span>活動折扣 {discount}</span>
              </div>
            </div>
          </div>
          {/* ----------------- */}
          <div className="Mao-total-box-total-fixed-btn">
            <Link
              className="d-flex justify-content-center align-items-center Mao-total-box-btn-fixed text-dark"
              to="/"
            >
              繼續購物
            </Link>
            <Link
              className="d-flex justify-content-center align-items-center text-white bg-dark Mao-total-box-btn-fixed"
              to="/OrderInfo"
            >
              前往結帳
            </Link>
          </div>
        </div>
      </div>
    </>
  )
  return (
    <>
      {fixedDisplay}
      {NofixedDisplay}
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
    FinalTotal:store.calculator_total,
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
      calCart,CalShopCartTotal,
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MaoCartShopTotal)
)
