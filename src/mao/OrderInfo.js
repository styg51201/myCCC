import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MaoCartShopTotal from './component/MaoCartShopTotal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getShopCart,
  AddCart,
  AddCartItem,
  DelCartItem,
  CalShopCart,
  Handle_AddMyFavorite,
  ControlDataOne,
  fromServerorderBuyerInfo,
  forServerorderProductInfo,
  saveOrderBuyerInfo,
  clearOrderBuyerproduct,
} from './actions/ShopCartAction'
import Swal from 'sweetalert2'
import GetDayRange from './GetDayRange'
import './css/OrderInfo.scss'
import $ from 'jquery'
import MaoAD from './component/MaoAD'

function OrderInfo(props) {
  const [values, setValues] = useState({
    buyerName: '',
    mobile: '',
    buyerAdress: '台北市大安區',
    invoice: '個人電子發票',
    shipping: '7-11',
    payment: '貨到付款',
  })
  const [errors, setErrors] = useState({
    buyerName: '',
    mobile: '',
    buyerAdress: '請選擇門市',
    invoice: '請選擇發票類型',
    shipping: '請選擇取貨超商',
    payment: '請選擇付款方式',
  })

  const [openCard, setOpenCard] = useState(false)
  const [opentaxNo, setOpentaxNo] = useState(false)
  const { getMonth, getYear } = GetDayRange()

  //訂單
  let order = ''
  function getRND() {
    let Numlength = 8
    const word = 'QAZWSXEDCRFVTGBYHNUJMIKOLP1234567890'
    for (let i = 0; i <= Numlength; i++) {
      order += word[Math.round(Math.random() * (word.length - 1))]
    }
  }

  let sendTotal = props.FinalTotal

  //送出資料
  const [buyerInfo, setBuyerInfo] = useState({
    orderId: `${order}`,
    buyerName: '',
    mobile: '',
    payment: 'COD',
    shipping: 'Seven-store',
    buyerAdress: '台北市大安 信興門市',
    invoice: 'personal-invoice',
    taxNo: '',
    total: sendTotal,
    shipCost: '100',
    discount: '0',
  })

  //插入資料 開關
  const [getBuyerbasic, setGetBuyerbasic] = useState(true)
  function getbuyer(e) {
    if (getBuyerbasic) {
      $('#buyerName').val('Alex')
      $('#mobile').val('0912345678')
      let newErr=errorBox.filter(e=>e!=='buyerName'&&e!=='mobile')
      //驗證是否正確
      setErrorBox(newErr) 
      //錯誤提示文字
      setErrors({...errors,mobile: '',buyerName: ''})
      // 購買人資訊
      setBuyerInfo({ ...buyerInfo, buyerName: 'Alex', mobile: '0912345678' })
      setGetBuyerbasic(false)
    } else {
      $('#mobile').val('')
      $('#buyerName').val('')
      setBuyerInfo({ ...buyerInfo, buyerName: '', mobile: '' })
      setGetBuyerbasic(true)
    }
  }

  //獲取buyer資訊檢查
  function getformInfo(e, str) {
    let getInfo = e.currentTarget.value
    let getInfo2 = e.currentTarget.id
    switch (str) {
      case 'buyerName':
        buyerInfo.buyerName = getInfo
        setBuyerInfo({ ...buyerInfo, buyerName: getInfo })
        if (getInfo.length == 0) {
          setErrors({ ...errors, buyerName: '名字不能空白' })
        } else if (/[0-9]|\W/.test(getInfo)) {
          setErrors({ ...errors, buyerName: '名字不能為數字或符號' })
        } else if (getInfo.length < 2) {
          setErrors({ ...errors, buyerName: '名字長度有誤' })
        } else {
          setErrors({ ...errors, buyerName: '' })
          let newErr=errorBox.filter(e=>e!=='buyerName')
          setErrorBox(newErr)
        }
        setValues({ ...values, buyerName: getInfo })
        break
      case 'mobile':
        buyerInfo.mobile = getInfo
        setBuyerInfo({ ...buyerInfo, mobile: getInfo })
        // console.log(getInfo)
        if (getInfo.length == 0) {
          setErrors({ ...errors, mobile: '電話號碼不能為空白' })
        } else if (!/^09[0-9]\d{7}$/.test(getInfo)) {
          setErrors({
            ...errors,
            mobile: '電話號碼格式有誤，請以09xxxxxxxx輸入',
          })
        } else {
          setErrors({ ...errors, mobile: '' })
          let newErr=errorBox.filter(e=>e!=='mobile')
          setErrorBox(newErr)
        }
        setValues({ ...values, mobile: getInfo })
        break
      case 'shipping':
        buyerInfo.shipping = getInfo2
        if (getInfo2 == 'Seven-store') {
          getInfo2 = '7-11'
          let newErr=errorBox.filter(e=>e!=='shipping')
          setErrorBox(newErr)
        } else if (getInfo2 == 'HiLife') {
          getInfo2 = '萊爾富'
          let newErr=errorBox.filter(e=>e!=='shipping')
          setErrorBox(newErr)
        }
        setBuyerInfo({ ...buyerInfo, shipping: getInfo2 })
        setValues({ ...values, shipping: getInfo2 })
        break
      case 'payment':
        buyerInfo.payment = getInfo2
        if(getInfo2=='COD'){
          getInfo2='貨到付款'
          let newErr=errorBox.filter(e=>e!=='payment')
          setErrorBox(newErr)
        }else if(getInfo2=='CreditCard'){
          getInfo2='CreditCard'
          let newErr=errorBox.filter(e=>e!=='payment')
          setErrorBox(newErr)
        }else{
          getInfo2='ATM轉帳'
          let newErr=errorBox.filter(e=>e!=='payment')
          setErrorBox(newErr)
        }
        setBuyerInfo({ ...buyerInfo, payment: getInfo2 })
        setValues({ ...values, payment: getInfo2 })
        break
      case 'invoice':
        if(getInfo2=='personal-invoice'){
          getInfo2='個人電子發票'
          let newErr=errorBox.filter(e=>e!=='invoice')
          setErrorBox(newErr)
        }else if(getInfo2=='donate'){
          getInfo2='捐贈發票'
          let newErr=errorBox.filter(e=>e!=='invoice')
          setErrorBox(newErr)
        }else{
          getInfo2='公司戶電子發票'
          let newErr=errorBox.filter(e=>e!=='invoice')
          setErrorBox(newErr)
        }
        buyerInfo.invoice = getInfo2
        setBuyerInfo({ ...buyerInfo, invoice: getInfo2 })
        setValues({ ...values, invoice: getInfo2 })
        break
      default:
        break
    }
  }
//儲存產品hook
  const [pIdArr, setPIdArr] = useState([])
  const [countArr, setCountArr] = useState([])
  const [itemNameArr, setItemNameArr] = useState([])
  const [nameArr, setNameArr] = useState([])
  const [itemImgArr, setItemImgArr] = useState([])
  const [itemPriceArr, setItemPriceArr] = useState([])
  const [itemCategoryIdArr, setItemCategoryIdArr] = useState([])
  //獲取購物車內容
  function getorderProductInfo() {
    const pIdArrBox = []
    const itemNameArrBox = []
    const nameArrBox = []
    const itemImgArrBox = []
    const itemPriceArrBox = []
    const itemCategoryIdArrBox = []
    const countArrBox = []
    props.AddItem.map((v, i) => {
      itemNameArrBox.push(v.itemName)
      itemImgArrBox.push(v.nameArrBox)
      itemPriceArrBox.push(v.itemPrice)
      nameArrBox.push(v.nameArr)
      itemCategoryIdArrBox.push(v.itemCategoryId)
      countArrBox.push(v.count)
      pIdArrBox.push(v.itemId)
    })
    setPIdArr(pIdArrBox)
    setItemNameArr(itemNameArrBox)
    setNameArr(nameArrBox)
    setItemImgArr(itemImgArrBox)
    setItemPriceArr(itemPriceArrBox)
    setItemCategoryIdArr(itemCategoryIdArrBox)
    setCountArr(countArrBox)
  }
//demo1帶入資料庫

const demo1 = {
  orderId: buyerInfo.orderId,
  buyerName: 'Alex',
  mobile: '0912345678',
  payment: 'CreditCard',
  shipping: 'Seven-store',
  buyerAdress: '台北市大安 信興門市',
  invoice: 'company',
  taxNo: '',
  total: sendTotal,
  shipCost: '100',
  discount: '0',
}
const demo2 = {
  orderId: buyerInfo.orderId,
  buyerName: 'Blex',
  mobile: '0913755678',
  payment: 'COD',
  shipping: 'HiLife',
  buyerAdress: '台北市大安 信興門市',
  invoice: 'donate',
  taxNo: '',
  total: sendTotal,
  shipCost: '100',
  discount: '0',
}
const demo3 = {
  orderId: buyerInfo.orderId,
  buyerName: 'Clex',
  mobile: '0912345558',
  payment: 'COD',
  shipping: 'Seven-store',
  buyerAdress: '台北市大安 信興門市',
  invoice: 'company',
  taxNo: '',
  total: sendTotal,
  shipCost: '100',
  discount: '0',
}
const demobox = [demo1, demo2, demo3]
// shipsType
const [shipType, setShipType] = useState(0)
// paymentType
const [paymentType, setPaymentType] = useState(0)
// invoice
const [invoiceType, setInvoiceType] = useState(0)
const [demoType, setDemoType] = useState(0)

//預設資料
function getDemoOne(val) {
  let newErr=[]
  setErrorBox(newErr) 
  setErrors(newErr)
  $('#mobile').val(val.mobile)
  $('#buyerName').val(val.buyerName)
  if (val.shipping == 'Seven-store') {
    setShipType(1)
  } else {
    setShipType(2)
  }
  if (val.payment == 'COD') {
    setOpenCard(false)
    setPaymentType(1)
  } else if (val.payment == 'CreditCard') {
    setPaymentType(2)
    setOpenCard(true)
  } else {
    setOpenCard(false)
    setPaymentType(3)
  }
  if (val.invoice == 'personal-invoice') {
    setInvoiceType(1)
    setOpentaxNo(false)
  } else if (val.invoice == 'donate') {
    setInvoiceType(2)
    setOpentaxNo(false)
  } else {
    setInvoiceType(3)
    setOpentaxNo(true)
  }
  setBuyerInfo(val)
}
//快速帶入購買人資訊
const quickInsertInfo = demobox.map((v, i) => {
  return (
    <div className="custom-control custom-checkbox mr-3">
      <input
        type="checkbox"
        className="custom-control-input"
        id={`'quickInsertInfo${i}'`}
        onClick={() => {
          let trueDemo = i + 1
          getDemoOne(v)
          setDemoType(i + 1)
        }}
        //透過上方更改的demoType檢查 index值是否相符?如果相符怎數字才會相等
        checked={demoType == i + 1 ? true : false}
      />
      <label
        className="custom-control-label"
        htmlFor={`'quickInsertInfo${i}'`}
      >
        訂購人資料組合 <b>{i + 1}</b>
      </label>
    </div>
  )
})
  useEffect(() => {
    getRND()
    getorderProductInfo()
    GetDayRange()
  }, [])

  useEffect(() => {
    buyerInfo.orderId = order
  }, [ order])
  const [errorBox,setErrorBox]=useState([
    'buyerName','mobile','shipping','payment','invoice'
  ])
  // useEffect(() => {
  //   console.log('buyerInfo2', buyerInfo)
  //   console.log('errorBox', errorBox)
  // }, [buyerInfo])

  //送出
  async function POSTorderInfo() {
    console.log(' watch Me errorBox==', errorBox)
    if(errorBox==0){
      let noneObj = {}
      //清理暫存
      await props.clearOrderBuyerproduct(noneObj)
      //送出購買人資訊
      await props.fromServerorderBuyerInfo(buyerInfo)
      console.log('pIdArr inFOR', pIdArr)
      for (let i = 0; i < pIdArr.length; i++) {
        console.log('pIdArr', pIdArr[i])
        let proBox = {
          orderId: buyerInfo.orderId,
          name: `${nameArr[i]}`,
          itemId: `${pIdArr[i]}`,
          itemName: `${itemNameArr[i]}`,
          itemPrice: `${itemPriceArr[i]}`,
          itemCategoryId: `${itemCategoryIdArr[i]}`,
          itemImg: `${itemImgArr[i]}`,
          count: `${countArr[i]}`,
          outStatus: '訂單處理中',
        }
        //送出產品
        props.forServerorderProductInfo(proBox)
      }
      await Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '結帳完成',
        showConfirmButton: false,
        timer: 1500,
        position: 'center',
      }) 
    }else{
      console.log(Object.keys(errors))
      let getKey=Object.keys(errors)
      // errorBox.map((v,i)=>{
      //   // getKey
      // })
    }
    
  }

  const CreditCardInfo = (
    <div id="creditCardInfo">
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
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            placeholder=""
            maxlength="4"
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            placeholder=""
            maxlength="4"
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            placeholder=""
            maxlength="4"
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
            maxLength="3"
          />
          <p style={{ width: '50%', margin: 0 }}>卡片背面，後三碼</p>
        </div>
      </div>
    </div>
  )

  const taxInfo = (
    <div className="form-row my-5 d-flex align-items-center">
      <div className="col-2">
        <h4>統一編號</h4>
      </div>
      <div className="col-10 d-flex align-items-center">
        <input
          type="text"
          className="form-control mr-3 w-25"
          placeholder=""
          maxLength="8"
          onChange={(e, str) => {
            getformInfo(e, 'taxNo')
          }}
        />
      </div>
    </div>
  )

  

  //表格
  return (
    <>
      {/* <form method="POST"> */}
      <MaoAD />
      <div className="container my-3 d-flex" style={{ width: '1300px' }}>
        <div className="px-4 border bg-white p-3" style={{ width: '950px' }}>
        <div className="d-flex">{quickInsertInfo}</div>
          <div className="form-row d-flex flex-column">
            <h2 className="border-bottom p-3 mt-4">訂購人資料</h2>
            <div className="col my-3">
              <h4>訂購人姓名</h4>
              <input
                type="text"
                id="buyerName"
                className="form-control"
                placeholder="訂購人姓名"
                style={{ border: 'none', borderBottom: '1px solid #ddd' }}
                onBlur={(e, str) => getformInfo(e, 'buyerName')}
                onChange={(e, str) => getformInfo(e, 'buyerName')}
              />
              {errors.buyerName == '名字不能為數字或符號' ? (
                <p className="Mao-prompt-word">{errors.buyerName}</p>
              ) : (
                ''
              )}
              {errors.buyerName == '名字不能空白' ? (
                <p className="Mao-prompt-word">{errors.buyerName}</p>
              ) : (
                ''
              )}
              {errors.buyerName == '名字長度有誤' ? (
                <p className="Mao-prompt-word">{errors.buyerName}</p>
              ) : (
                ''
              )}
            </div>
            <div className="col my-3">
              <h4>訂購人電話</h4>
              <input
                type="text"
                id="mobile"
                className="form-control"
                placeholder="手機號碼"
                style={{ border: 'none', borderBottom: '1px solid #ddd' }}
                onChange={(e, str) => getformInfo(e, 'mobile')}
                onBlur={(e, str) => getformInfo(e, 'mobile')}
              />
              {errors.mobile == '電話號碼不能為空白' ? (
                <p className="Mao-prompt-word">{errors.mobile}</p>
              ) : (
                ''
              )}
              {errors.mobile == '電話號碼格式有誤，請以09xxxxxxxx輸入' ? (
                <p className="Mao-prompt-word">{errors.mobile}</p>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              onClick={e => {
                getbuyer(e)
              }}
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
              <div className="custom-control custom-radio mr-5">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="checkshipping"
                  id="Seven-store"
                  onClick={e => {
                    getformInfo(e, 'shipping')
                    setShipType(1)
                  }}
                  checked={shipType == 1 ? true : false}
                />
                <label className="custom-control-label" htmlFor="Seven-store">
                  7-11超商
                </label>
                <Link to="/OrderInfo" className="ml-3">
                  選擇門市
                </Link>
              </div>
              <div className="custom-control custom-radio ">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="checkshipping"
                  id="HiLife"
                  onClick={e => {
                    getformInfo(e, 'shipping')
                    setShipType(2)
                  }}
                  checked={shipType == 2 ? true : false}
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
              {errors.shipping == '請選擇取貨超商' ? (
                <p className="Mao-prompt-word">{errors.shipping}</p>
              ) : (
                ''
              )}
              {errors.buyerAdress == '請選擇門市' ? (
                <p className="Mao-prompt-word">{errors.buyerAdress}</p>
              ) : (
                ''
              )}
          <div>
            <div className="form-row d-flex flex-column my-5">
              <h2 className="border-bottom p-3" style={{ display: 'block' }}>
                選擇付款方式
              </h2>
            </div>
            <div className="d-flex">
              <div className="custom-control custom-radio mr-5">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="payment"
                  id="COD"
                  onChange={(e, str) => {
                    getformInfo(e, 'payment')
                  }}
                  onClick={() => {
                    setOpenCard(false)
                    setPaymentType(1)
                  }}
                  checked={paymentType == 1 ? true : false}
                />
                <label className="custom-control-label" htmlFor="COD">
                  貨到付款
                </label>
              </div>
              <div className="custom-control custom-radio mr-5">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="payment"
                  id="CreditCard"
                  onChange={(e, str) => {
                    getformInfo(e, 'payment')
                  }}
                  onClick={() => {
                    setOpenCard(true)
                    setPaymentType(2)
                  }}
                  checked={paymentType == 2 ? true : false}
                />
                <label className="custom-control-label" htmlFor="CreditCard">
                  信用卡一次付清
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="payment"
                  id="ATM"
                  onChange={(e, str) => {
                    getformInfo(e, 'payment')
                  }}
                  onClick={() => {
                    setOpenCard(false)
                    setPaymentType(3)
                  }}
                  checked={paymentType == 3 ? true : false}
                />
                <label className="custom-control-label" htmlFor="ATM">
                  ATM轉帳
                </label>
              </div>
            </div>
          </div>{errors.payment == '請選擇付款方式' ? (
                <p className="Mao-prompt-word">{errors.payment}</p>
              ) : (
                ''
              )}
          {openCard ? CreditCardInfo : ''}
          <div className="form-row my-5 d-flex flex-column">
            <div className="form-row d-flex flex-column mt-5">
              <h2 className="border-bottom p-3" style={{ display: 'block' }}>
                發票
              </h2>
            </div>
            {/* <div className="col-2">
              <h4>發票</h4>
            </div> */}
            <div className="d-flex ">
              <div className="custom-control custom-radio mr-5">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="invoice"
                  id="personal-invoice"
                  onClick={(e, str) => {
                    getformInfo(e, 'invoice')
                    setOpentaxNo(false)
                    setInvoiceType(1)
                  }}
                  checked={invoiceType == 1 ? true : false}
                />
                <label
                  className="custom-control-label"
                  htmlFor="personal-invoice"
                >
                  個人電子發票
                </label>
              </div>
              <div className="custom-control custom-radio mr-5">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="invoice"
                  id="donate"
                  onClick={(e, str) => {
                    getformInfo(e, 'invoice')
                    setOpentaxNo(false)
                    setInvoiceType(2)
                  }}
                  checked={invoiceType == 2 ? true : false}
                />
                <label className="custom-control-label" htmlFor="donate">
                  捐贈發票
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="invoice"
                  id="company"
                  onClick={(e, str) => {
                    getformInfo(e, 'invoice')
                    setOpentaxNo(true)
                    setInvoiceType(3)
                  }}
                  checked={invoiceType == 3 ? true : false}
                />
                <label className="custom-control-label" htmlFor="company">
                  公司戶電子發票
                </label>
              </div>
            </div> {errors.invoice == '請選擇發票類型' ? (
                <p className="Mao-prompt-word">{errors.invoice}</p>
              ) : (
                ''
              )}
            {opentaxNo ? taxInfo : ''}
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
            <Link
              to={errorBox==0?"/Orderbill":"/OrderInfo"}
              className="btn btn-danger px-3 py-2 rounded-0 mx-2"
              id="sendOrder"
              style={{ width: '30%', background: '#000', border: 'none' }}
              onClick={() => {
                POSTorderInfo()
              }}
            >
              結帳
            </Link>
          </div>
        </div>
        <MaoCartShopTotal />
      </div>
      {/* </form> */}
    </>
  )
}

const mapStateToProps = store => {
  return {
    //購物車內容
    AddItem: store.AddItem,
    FinalTotal: store.calculator_total,
    saveOrderBuyerInfoReducer: store.saveOrderBuyerInfoReducer,
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
      CalShopCart,
      Handle_AddMyFavorite,
      ControlDataOne,
      fromServerorderBuyerInfo,
      forServerorderProductInfo,
      saveOrderBuyerInfo,
      clearOrderBuyerproduct,
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo)
