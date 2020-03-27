import React, { useState, useEffect } from 'react'
import '../css/mao.scss'
import '../css/MaoCartShopTotal.scss'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getShopCart,
  AddCart,
  AddCartItem,
  DelCartItem,
  calCart,
  CalShopCartTotal,
} from '../actions/ShopCartAction'
import $ from 'jquery'
import { FaTicketAlt } from 'react-icons/fa'
import { TiDeleteOutline } from 'react-icons/ti'

function MaoCartShopTotal(props) {
  const [shipping, setShipping] = useState(100)
  const [discount, setDiscount] = useState(0)
  const [openCoupon, setOpenCoupon] = useState(true)
  let buyerTotal = 0
  function CalTotal() {
    buyerTotal = props.sTotal + shipping + discount
    props.CalShopCartTotal(buyerTotal)
  }

  let CheckrouteName = props.match.path
  function showCoupon() {
    if (openCoupon) {
      $('.Mao-couponBox').css({ opacity: 1, zIndex: 1 })
      setOpenCoupon(false)
    } else {
      $('.Mao-couponBox').css({ opacity: 0 })
      setOpenCoupon(true)
    }
  }

  useEffect(() => {
    CalTotal()
    props.getShopCart()
    $(document).on('scroll', () => {
      let test = $(document).scrollTop()
      if (test > 120) {
        $('.Mao-total-box-fixed').css({
          opacity: 1,
          height: '145px',
          zIndex: 999,
        })
        $('.Mao-total-box').css({ opacity: 0, height: 0 })
      } else {
        $('.Mao-total-box').css({ opacity: 1, height: '420px' })

        $('.Mao-total-box-fixed').css({ opacity: 0, height: 0, zIndex: -1 })
      }
    })

    $('.Mao-total-box')
      .on('mouseenter', () => {
        $('.Mao-total-box').css({ boxShadow: '0px 10px 12px #999' })
      })
      .on('mouseleave', () => {
        $('.Mao-total-box').css({ boxShadow: 'none' })
     })  
     return 
  }, [])

  useEffect(() => {
    CalTotal()
  }, [CalTotal, props.AddItem, props.sTotal])

  const changeCheckout = (
    <>
      <Link className="Mao-total-box-btn" to="/">
        <div className="Mao-total-show"></div>
        <span style={{ zIndex: 999 }}>繼續購物</span>
      </Link>
      <Link className="Mao-total-box-btn-black" to="/OrderInfo">
        {CheckrouteName == '/OrderInfo' ? '確認結帳' : '前往結帳'}
        <div className="Mao-total-show-black"></div>
      </Link>
    </>
  )

  const goshopNow = (
    <>
      <Link className="Mao-total-box-btn" to="/">
        <div className=".Mao-total-show-black"></div>
        繼續購物
      </Link>
    </>
  )
  const stylechange = { height: '390px' }

  function calCoupon(value,type){
    let newStotal=0
    switch (type){
      case 0:
        newStotal=+props.sTotal-value
        break
      case 1:
        newStotal=Math.round(props.sTotal*value)
        break
      case 2:
        newStotal=props.sTotal-value
        break
      default:
        break
    }
    props.calCart(newStotal)
}

  const couponType=[
    {value:300,type:0,method:'現折',slogan:'全館商品現折300',amount:1},
    {value:0.8,type:1,method:'折數',slogan:'指定產品 8折',amount:1},
    {value:200,type:2,method:'現折',slogan:'限定品牌現折200',amount:1},
  ]
  const couponDOM=[]
  const couponBox=couponType.map((v,i)=>{
    couponDOM.push(
      <div onClick={()=>{calCoupon(v.value,v.type)}} className="Mao-coupon-text">{v.slogan}</div>
    )
  })
  const NofixedDisplay = (
    <>
      <div className="Mao-total-box">
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
              <Link
                className="Mao-total-box-btn Mao-total-box-btn-border-b"
                onClick={() => {
                  showCoupon()
                }}
              >
                <FaTicketAlt />
                <b className="mx-2">折價券帶入</b>
              </Link>
              <div className="Mao-couponBox">
                <TiDeleteOutline
                  className="Mao-coupon-exit"
                  onClick={() => {
                    showCoupon()
                  }}
                />
                <div style={{ margin: '15px' }}></div>
                <div className="Mao-coupon-text-box">
                {couponDOM}
                </div>
              </div>
            </div>
          </label>
        </div>
        <p style={{ fontSize: '18px' }}>
          <b>總金額</b>
          <span className="float-right">{props.FinalTotal}</span>
        </p>
        {CheckrouteName == '/OrderInfo' ? goshopNow : changeCheckout}
      </div>
    </>
  )
  const fixedDisplay = (
    <>
      <div className="Mao-total-box-fixed">
        <div className="container">
          <div style={{ width: '850px' }}>
            <p className="Mao-total-box-title-fixed">
              <b>TOTAL</b>
            </p>
            {/* total內容 */}
            <div className="Mao-total-content-fixed">
              {/* 運費 */}
              <div className="Mao-total-ship-fixed">
                <b>運費</b>
                <span>{shipping}</span>
              </div>
              {/* 活動折扣 */}
              <div className="Mao-total-coupon-fixed">
                <span className="mx-4">
                  <b>活動折扣</b>
                  {discount}
                </span>
              </div>
              {/* 小計金額 */}
              <div className="Mao-total-sCount-fixed">
                <b>小計金額</b>
                <span id="sTotal">{props.sTotal}</span>
              </div>
              <p className="Mao-total-box-totalNum-fixed">
                <b>總金額</b>
                <span className="mx-2">{props.FinalTotal}</span>
              </p>
            </div>

            <Link
              className="Mao-coupon-choose-fixed"
              onClick={() => {
                showCoupon()
              }}
            >
              <FaTicketAlt />
              <b className="mx-2">選擇折價券</b>
            </Link>
          </div>
          {/* ----------------- */}
          <div className="Mao-total-box-total-fixed-btn">
            {CheckrouteName == '/OrderInfo' ? (
              <Link className="Mao-total-box-btn-fixed-goshop" to="/">
                繼續購物
              </Link>
            ) : (
              <Link className="Mao-total-box-btn-fixed" to="/OrderInfo">
                前往結帳
              </Link>
            )}
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
    FinalTotal: store.calculator_total,
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getShopCart,
      AddCart,
      AddCartItem,
      DelCartItem,
      calCart,
      CalShopCartTotal,
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MaoCartShopTotal)
)
