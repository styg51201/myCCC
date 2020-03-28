import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MaoCartShopTotal from './component/MaoCartShopTotal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {DelCart,
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


  //錯誤傳達的資訊
  const [errors, setErrors] = useState({
    buyerName: '',
    mobile: '',
    buyerAdress: '',
    invoice: '',
    shipping: '',
    payment: '',
  })
//信用卡開關
  const [openCard, setOpenCard] = useState(false)
//統編開關
  const [opentaxNo, setOpentaxNo] = useState(false)
//判斷資料是否有填妥
  const [errorBox,setErrorBox]=useState([
    'buyerName','mobile','shipping','payment','invoice'])
//接收折扣
const [getdiscount,setGetdiscount]=useState(0)

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
    discount:getdiscount,
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
        if (getInfo.length === 0) {
          setErrors({ ...errors, buyerName: '名字不能空白' })
        } else if (/[0-9]|\W/.test(getInfo)) {
          setErrors({ ...errors, buyerName: '名字不能為數字或符號' })
        } else {
          setErrors({ ...errors, buyerName: '' })
          let newErr=errorBox.filter(e=>e!=='buyerName')
          setErrorBox(newErr)
          setBuyerInfo({ ...buyerInfo, buyerName: getInfo })
          buyerInfo.buyerName = getInfo
        }
        break
      case 'mobile':
        setBuyerInfo({ ...buyerInfo, mobile: getInfo })
        if (getInfo.length === 0) {
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
          buyerInfo.mobile = getInfo
        }
        break
      case 'shipping':
        if (getInfo2 == 'Seven-store') {
          getInfo2 = '7-11'
          let newErr=errorBox.filter(e=>e!=='shipping')
          setErrorBox(newErr)
          setErrors({...errors,shipping: ''})
        } else if (getInfo2 == 'HiLife') {
          getInfo2 = '萊爾富'
          let newErr=errorBox.filter(e=>e!=='shipping')
          setErrorBox(newErr)
          setErrors({...errors,shipping: ''})
        }else if(getInfo2=='Adress'){
          getInfo2 = '萊爾富'
          let newErr=errorBox.filter(e=>e!=='shipping')
          setErrorBox(newErr)
          setErrors({...errors,shipping: ''})
        }else{
          setErrors({ ...errors, shipping: '' })
          setBuyerInfo({ ...buyerInfo, shipping: getInfo2 })
          buyerInfo.shipping = getInfo2
        }
        break
      case 'payment':
        if(getInfo2=='COD'){
          getInfo2='貨到付款'
          let newErr=errorBox.filter(e=>e!=='payment')
          setErrorBox(newErr)
          setErrors({...errors,payment: ''})
        }else if(getInfo2=='CreditCard'){
          getInfo2='CreditCard'
          let newErr=errorBox.filter(e=>e!=='payment')
          setErrorBox(newErr)
          setErrors({...errors,payment: ''})
        }else if(getInfo2=='ATM轉帳'){
          getInfo2='ATM轉帳'
          let newErr=errorBox.filter(e=>e!=='payment')
          setErrorBox(newErr)
          setErrors({...errors,payment: ''})
        }else{
          setErrors({ ...errors, payment: '' })
        setBuyerInfo({ ...buyerInfo, payment: getInfo2 })
        buyerInfo.payment = getInfo2
        }
        break
      case 'invoice':
        if(getInfo2=='personal-invoice'){
          getInfo2='個人電子發票'
          let newErr=errorBox.filter(e=>e!=='invoice')
          setErrorBox(newErr)
          setErrors({...errors,invoice: ''})
        }else if(getInfo2=='donate'){
          getInfo2='捐贈發票'
          let newErr=errorBox.filter(e=>e!=='invoice')
          setErrorBox(newErr)
          setErrors({...errors,invoice: ''})
        }else if(getInfo=='公司戶電子發票'){
          getInfo2='公司戶電子發票'
          let newErr=errorBox.filter(e=>e!=='invoice')
          setErrorBox(newErr)
          setErrors({...errors,invoice: ''})
        }else{
          setErrors({ ...errors, invoice: '' })
          buyerInfo.invoice = getInfo2
        setBuyerInfo({ ...buyerInfo, invoice: getInfo2 })
        }
        break
      default:
        break
    }
  }
  
  useEffect(() => {
    getRND()
    getorderProductInfo()
    GetDayRange()
  }, [])
  
  useEffect(() => {
    buyerInfo.orderId = order
  }, [ order])
  useEffect(() => {
    console.log(errors)
  }, [errors])
  useEffect(()=>{
console.log('errorBox',errorBox)
console.log('getdiscount',getdiscount)
setBuyerInfo({ ...buyerInfo, discount:getdiscount })
  },[errorBox,getdiscount])
  useEffect(()=>{
console.log('buyerInfo',buyerInfo)
  },[buyerInfo])
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
      itemImgArrBox.push(v.itemImg)
      itemPriceArrBox.push(v.itemPrice)
      nameArrBox.push(v.name)
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

  //送出
  async function POSTorderInfo() {
    let saveValueBox={
      buyerName: '',
      mobile: '',
      invoice: '',
      shipping: '',
      payment: '',
    }
    if(errorBox==0){
      let noneObj = {}
      setErrors(saveValueBox)
      //清理暫存
      await props.clearOrderBuyerproduct(noneObj)
      //送出購買人資訊
      await props.fromServerorderBuyerInfo(buyerInfo)
      await props.DelCart([])
      for (let i = 0; i < pIdArr.length; i++) {
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
      await getRND()
    }else{
      errorBox.map((v,i)=>{
        switch(v){
          case 'buyerName':
            saveValueBox.buyerName='名字不能空白'
            break
          case 'mobile':
            saveValueBox.mobile='電話號碼不能為空白'
            break
            case 'shipping':
              saveValueBox.shipping='請選擇取貨超商'
              break
            case 'payment':
              saveValueBox.payment='請選擇付款方式'
              break
            case 'invoice':
              saveValueBox.invoice='請選擇發票類型'
              default:
                break
        }
      })
      setErrors(saveValueBox)
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: '資料填寫不完整',
        showConfirmButton: false,
        timer: 1500,
        position: 'center',
      }) 
    }
    
  }

const shipType=[
  {type:'Seven-store',name:'7-11超商'},
  {type:'HiLife',name:'萊爾富'},
  {type:'Adress',name:'收貨地址'}
]
const shipTypeDOM=[]
//寄送方式
const shipTypeBox=shipType.map((v,i)=>{
  shipTypeDOM.push(
    <div className="custom-control custom-radio mr-5">
    <input
      type="radio"
      className="custom-control-input"
      name="shipping"
      id={v.type}
      onChange={e => {
        getformInfo(e,'shipping')
      }}
    />
    <label className="custom-control-label" htmlFor={v.type}>
      {v.name}
    </label>
    {v.type=='Adress'?(<input type="text"/>):''}
    
  </div>
  )
})
//付款方式
const payType=[
  {type:'COD',name:'貨到付款'},
  {type:'CreditCard',name:'信用卡一次付清'},
  {type:'ATM',name:'ATM轉帳'}
]
const payTypeDOM=[]
const payTypeBox=payType.map((v,i)=>{
  payTypeDOM.push(
      <div className="custom-control custom-radio mr-5">
    <input
      type="radio"
      className="custom-control-input"
      name="payment"
      id={v.type}
      onChange={(e, str) => {
        getformInfo(e, 'payment')
      }}
      onClick={() => {
        {v.type=='CreditCard'?setOpenCard(true):setOpenCard(false)}
        
      }}
    />
    <label className="custom-control-label" htmlFor={v.type}>
      {v.name}
    </label>
  </div>
  )
})

//發票種類

const invoiceType=[
  {type:'personal-invoice',name:'個人電子發票'},
  {type:'donate',name:'捐贈發票'},
  {type:'company',name:'公司戶電子發票'}
]
const invoiceDOM=[]
const invoiceBox=invoiceType.map((v,i)=>{
  invoiceDOM.push(
    <div className="custom-control custom-radio mr-5">
<input
  type="radio"
  className="custom-control-input"
  name="invoice"
  id={v.type}
  onClick={(e, str) => {
    getformInfo(e, 'invoice')
    {v.type=='company'?setOpentaxNo(true):setOpentaxNo(false)}
  }}
/>
<label
  className="custom-control-label"
  htmlFor={v.type}
>
  {v.name}
</label>
</div>
  )
})

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
      <div className="form-row mt-3 d-flex align-items-center">
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
    <div className="form-row mt-3 d-flex align-items-center">
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
      <div className="Mao-form-outer-box">
        <div className="Mao-orderInfo-form-contain-box">
        {/* <div className="d-flex">{quickInsertInfo}</div> */}
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
              {errors.buyerName !=='' ? (
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
              {errors.mobile !== '' ? (
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
              {shipTypeDOM}
            </div>
          </div>
              {errors.buyerAdress !== '' ? (
                <p className="Mao-prompt-word">{errors.buyerAdress}</p>
              ) : (
                ''
              )}
              {errors.shipping !== '' ? (
                <p className="Mao-prompt-word">{errors.shipping}</p>
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
              {payTypeDOM}
            </div>
          </div>{errors.payment !== '' ? (
                <p className="Mao-prompt-word">{errors.payment}</p>
              ) : (
                ''
              )}
          {openCard ? CreditCardInfo : ''}
          <div className="form-row d-flex flex-column">
            <div className="form-row d-flex flex-column mt-5">
              <h2 className="border-bottom p-3" style={{ display: 'block' }}>
                發票
              </h2>
            </div>
            <div className="d-flex ">
              {invoiceDOM}
            </div> {errors.invoice !== '' ? (
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
              className="Mao-order-Info-btn Mao-order-btn-color-white"
            >
              上一步
            </Link>
            <Link
              to={errorBox==0?"/Orderbill":"/OrderInfo"}
              className="Mao-order-Info-btn Mao-order-btn-color-black"
              id="sendOrder"
              onClick={() => {
                POSTorderInfo()
              }}
            >
              結帳
            </Link>
          </div>
        </div>
        <MaoCartShopTotal sendOrder={()=>{ POSTorderInfo()}} getErrorBox={errorBox} postDiscount={val=>{setGetdiscount(val)}}/>
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
      ControlDataOne,
      fromServerorderBuyerInfo,
      forServerorderProductInfo,
      saveOrderBuyerInfo,
      clearOrderBuyerproduct,DelCart
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo)
