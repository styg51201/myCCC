import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MaoCartShopTotal from './component/MaoCartShopTotal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AddCartItem, fromServerorderBuyerInfo } from './actions/ShopCartAction'

function OrderInfo(props) {
  //月
  function getMonth() {
    let MonthBox = []
    for (let i = 1; i <= 12; i++) {
      MonthBox.push(<option value={i}>{i}</option>)
    }
    return MonthBox
  }
  //年
  function getYear() {
    let yearBox = []
    let MinDate = new Date()
    let year = MinDate.getFullYear()
    for (let i = year - 5; i <= year + 5; i++) {
      yearBox.push(<option value={i}>{i}</option>)
    }
    return yearBox
  }

  let order = ''
  function getRND() {
    let Numlength = 8
    const word = 'QAZWSXEDCRFVTGBYHNUJMIKOLP1234567890'
    for (let i = 0; i < Numlength; i++) {
      order += word[Math.round(Math.random() * word.length)]
    }
  }
  getRND()

  function checkCard(e) {
    let wordLength = e.target.value
    if (wordLength.length < 4) {
      console.log(123)
    }
  }

  const buyerInfo = {
    orderId: `${order}`,
    buyer_name: '',
    mobile: '',
    shipping: 'Seven-store',
    buyerAdress: '',
    payment: 'COD',
    invoice: 'personal-invoice',
    taxNo: '',
  }

  function getformInfo(e, str) {
    // console.log(e.target.value)
    // buyerInfo.name='123'

    let getInfo = e.currentTarget.value
    let getInfo2 = e.currentTarget.id
    // console.log('getInfo', typeof(getInfo))

    console.log('buyerInfo', buyerInfo.buyer_name)
    switch (str) {
      case 'buyer_name':
        buyerInfo.buyer_name = getInfo
        break
      case 'mobile':
        buyerInfo.mobile = getInfo
        break
      case 'shipping':
        buyerInfo.shipping = getInfo2
        break
      case 'payment':
        buyerInfo.payment = getInfo2
        break
      case 'invoice':
        buyerInfo.invoice = getInfo2
        break
      default:
        return str
    }
  }
  function POSTorderInfo() {
    console.log('buyerInfo', buyerInfo)
    props.fromServerorderBuyerInfo(buyerInfo)
  }
  //表格
  return (
    <>
      <form method="POST" enctype="multipart/form-data">
        <div className="container my-3 d-flex" style={{ width: '1300px' }}>
          <div
            className="px-4 border bg-white p-3"
            style={{ maxWidth: '950px' }}
          >
            <div className="form-row d-flex flex-column">
              <h2 className="border-bottom p-3 mt-4">訂購人資料</h2>
              <div className="col my-3">
                <h4>訂購人姓名</h4>
                <input
                  type="text"
                  className="form-control"
                  placeholder="訂購人姓名"
                  style={{ border: 'none', borderBottom: '1px solid #ddd' }}
                  onChange={(e, str) => getformInfo(e, 'buyer_name')}
                />
              </div>
              <div className="col my-3">
                <h4>訂購人電話</h4>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  style={{ border: 'none', borderBottom: '1px solid #ddd' }}
                  onChange={(e, str) => getformInfo(e, 'mobile')}
                />
              </div>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                同會員資料
              </label>
            </div>
            <div>
              <div className="form-row d-flex flex-column my-5">
                <h2 className="border-bottom p-3">運送方式</h2>
              </div>
              <div className="d-flex">
                <div className="custom-control custom-checkbox mr-5">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="checkshipping"
                    id="Seven-store"
                    onClick={e => {
                      getformInfo(e, 'shipping')
                    }}
                    checked
                  />
                  <label className="custom-control-label" htmlFor="Seven-store">
                    7-11超商
                  </label>
                  <Link to="/OrderInfo" className="ml-3">
                    選擇門市
                  </Link>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="checkshipping"
                    id="HiLife"
                    onClick={e => {
                      getformInfo(e, 'shipping')
                    }}
                  />
                  <label className="custom-control-label" htmlFor="HiLife">
                    萊爾富
                  </label>
                  <Link to="/OrderInfo" className="ml-3">
                    選擇門市
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="form-row d-flex flex-column my-5">
                <h2 className="border-bottom p-3" style={{ display: 'block' }}>
                  選擇付款方式
                </h2>
              </div>
              <div className="d-flex">
                <div className="custom-control custom-checkbox mr-5">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="payment"
                    id="COD"
                    onChange={(e, str) => {
                      getformInfo(e, 'payment')
                    }}
                    checked
                  />
                  <label className="custom-control-label" htmlFor="COD">
                    貨到付款
                  </label>
                </div>
                <div className="custom-control custom-checkbox mr-5">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="payment"
                    id="CreditCard"
                    onChange={(e, str) => {
                      getformInfo(e, 'payment')
                    }}
                  />
                  <label className="custom-control-label" htmlFor="CreditCard">
                    信用卡一次付清
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="payment"
                    id="ATM"
                    onChange={(e, str) => {
                      getformInfo(e, 'payment')
                    }}
                  />
                  <label className="custom-control-label" htmlFor="ATM">
                    ATM轉帳
                  </label>
                </div>
              </div>
            </div>
            <div className="form-row my-5  d-flex align-items-center">
              <div className="col-2">
                <h4>信用卡號</h4>
              </div>
              <div className="col-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  maxlength="4"
                  onBlur={e => checkCard(e)}
                />
              </div>
              <div className="col-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  maxlength="4"
                  onBlur={e => checkCard(e)}
                />
              </div>
              <div className="col-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  maxlength="4"
                  onBlur={e => checkCard(e)}
                />
              </div>
              <div className="col-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  maxlength="4"
                  onBlur={e => checkCard(e)}
                />
              </div>
            </div>
            <div className="form-row my-5 d-flex align-items-center">
              <div className="col-2">
                <h4>有效期限</h4>
              </div>
              <div className="col-2 d-flex align-items-center">
                <select className="custom-select mr-3">{getMonth()}</select>
                <span>月</span>
              </div>
              <div className="col-3 d-flex align-items-center">
                <select className="custom-select mr-3">{getYear()}</select>
                <span>年</span>
              </div>
            </div>
            <div className="form-row my-5 d-flex align-items-center">
              <div className="col-2">
                <h4>檢核碼</h4>
              </div>
              <div className="col-5 d-flex align-items-center">
                <input
                  type="text"
                  className="form-control mr-3 w-25"
                  placeholder=""
                />
                <p style={{ width: '50%', margin: 0 }}>卡片背面，後三碼</p>
              </div>
            </div>
            <div className="form-row my-5 d-flex align-items-center">
              <div className="col-2">
                <h4>發票</h4>
              </div>
              <div className="custom-control custom-checkbox mr-5">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="invoice"
                  id="personal-invoice"
                  onClick={(e, str) => {
                    getformInfo(e, 'invoice')
                  }}
                  checked
                />
                <label
                  className="custom-control-label"
                  htmlFor="personal-invoice"
                >
                  個人電子發票
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-5">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="invoice"
                  id="donate"
                  onClick={(e, str) => {
                    getformInfo(e, 'invoice')
                  }}
                />
                <label className="custom-control-label" htmlFor="donate">
                  捐贈發票
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="invoice"
                  id="company"
                  onClick={(e, str) => {
                    getformInfo(e, 'invoice')
                  }}
                />
                <label className="custom-control-label" htmlFor="company">
                  公司戶電子發票
                </label>
              </div>
            </div>

            <div className="form-row my-5 d-flex align-items-center">
              <div className="col-2">
                <h4>統一編號</h4>
              </div>
              <div className="col-10 d-flex align-items-center">
                <input
                  type="text"
                  className="form-control mr-3 w-25"
                  placeholder=""
                  onChange={(e, str) => {
                    getformInfo(e, 'taxNo')
                  }}
                />
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-center my-4">
              <Link
                to="./ShopCartList"
                className="btn btn-light px-3 py-2 rounded-0 mx-2"
                style={{
                  width: '30%',
                  background: '#fff',
                  border: '1px solid #000',
                }}
              >
                上一步
              </Link>
              <buttno
                className="btn btn-danger px-3 py-2 rounded-0 mx-2"
                style={{ width: '30%', background: '#000', border: 'none' }}
                onClick={() => POSTorderInfo()}
              >
                結帳
              </buttno>
            </div>
          </div>
          <MaoCartShopTotal />
        </div>
      </form>
    </>
  )
}

const mapStateToProps = store => {
  return {
    //購物車內容
    AddItem: store.AddItem,
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      AddCartItem,
      fromServerorderBuyerInfo,
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo)
