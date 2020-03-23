import React, { useState, useEffect } from 'react'
import MaoCartShopTotal from './component/MaoCartShopTotal'
import {Link} from 'react-router-dom'
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
  CalShopCartTotal,
  calCart,forServerorderProductInfo,saveOrderBuyerInfo,clearOrderBuyerproduct
} from './actions/ShopCartAction'
import Swal from 'sweetalert2'
import　$ from 'jquery'
import { Form, Row, Col } from 'react-bootstrap'
import OrderInfouseForm from './OrderInfouseForm'
import Validate from './ValidateForm'
import './css/OrderInfo.scss'

function OrderInfo(props) {

const [openCard,setOpenCard]=useState(false)
const {hadnleChange,handleSubmit,values,errors}=OrderInfouseForm(submit,Validate);

//訂單
let order = ''
function getRND() {
  let Numlength = 8
  const word = 'QAZWSXEDCRFVTGBYHNUJMIKOLP1234567890'
  for (let i = 0; i <= Numlength; i++) {
    order += word[Math.round(Math.random() * (word.length-1))]
  }
}getRND()

const pIdArr=[]
const countArr=[]
//獲取購物車內容
function getorderProductInfo(){
props.AddItem.map((v,i)=>{
  pIdArr.push(v.itemId)
  countArr.push(v.count)
})
}
useEffect(()=>{
  getorderProductInfo()
},[])

async function submit(){
  let newValues={...values,shipCost:100,discount:0,total:props.FinalTotal,orderId:order}
  // console.log(newValues)
  let noneObj={}
  // 清理暫存
  await props.clearOrderBuyerproduct(noneObj)
  //送出購買人資訊
  await props.fromServerorderBuyerInfo(newValues)
  

  for(let i=0;i<pIdArr.length;i++){
    let proBox={
        orderId: order,
        pId:`${pIdArr[i]}`,
        count:`${countArr[i]}`,
        outStatus:'訂單處理中',
    }
  //送出產品
  await props.forServerorderProductInfo(proBox)
  }
  await Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: '結帳完成',
    showConfirmButton: false,
    timer: 1500,
    position:'center',
  })
  
 await console.log('Success')
  // window.location.href= await '/Orderbill'
}

const CredidCard=(
  <>
  <div className="d-flex mb-5 justify-content-center align-items-center">
    <b>信用卡號：</b><input class="form-control" type="text" style={{width:"90%"}}/>
  </div>
  <div className="d-flex align-items-center" style={{marginLeft:"8px"}}>
     <b>後三碼：</b><input  class="form-control" type="text" style={{width:"20%",marginLeft:"10px"}}/>  
  </div>
    
  </>
)


  return (
    <div className="Mao-form-outer-box">
    <form onSubmit={handleSubmit} className="Mao-form-box" noValidate>
      <div className="form-row col Mao-form-type-box">
        <h4>訂購人姓名</h4>
        <input className="form-control" type="text" name="buyer_name" value={values.buyer_name} onChange={hadnleChange}/>
        {errors.buyer_name && <p className="Mao-prompt-word">* {errors.buyer_name}</p>}
      </div>

      <div className="form-row col Mao-form-type-box">
        <h4>訂購人電話</h4>
        <input className="form-control" type="text" name="buyer_mobile" value={values.buyer_mobile}  onChange={hadnleChange}/>
        {errors.buyer_mobile && <p className="Mao-prompt-word">* {errors.buyer_mobile}</p>}
      </div>

      <div className="form-row col Mao-form-type-box">
        <h4>訂購人地址</h4>
        <input className="form-control" type="text" name="buyer_adress" value={values.buyer_adress}  onChange={hadnleChange}/>
        {errors.buyer_adress && <p className="Mao-prompt-word">* {errors.buyer_adress}</p>}
      </div>

      <div className="form-row col Mao-form-type-box">
      {/* <h4>運送方式</h4> */}
        <Form>
          <Form.Group controlId="formGridState">
            <Form.Label><h4>運送方式</h4></Form.Label>
              <Form.Control  name="shipping" as="select" onChange={hadnleChange}>
                <option name="shipping" value="黑貓宅急便">黑貓宅急便</option>
                <option name="shipping" value="新竹物流">新竹物流</option>
              </Form.Control>
          </Form.Group>
        </Form>
        
        <input className="form-control Mao-form-input-text" type="text" style={{border:"none",outline:"none"}} placeholder="請選擇門市" name="shipping" value={values.shipping}  onChange={hadnleChange}/>
        {errors.shipping && <p className="Mao-prompt-word">* {errors.shipping}</p>}
      </div>

      <div className="form-row col Mao-form-type-box">
        {/* <h4>付款方式</h4> */}
        <Form>
          <Form.Group controlId="formGridState">
            <Form.Label><h4>付款方式</h4></Form.Label>
              <Form.Control as="select"  name="paymentType" onChange={hadnleChange}>
                <option name="paymentType" value="貨到付款">貨到付款</option>
                <option name="paymentType" value="信用卡" onClick={()=>{setOpenCard(true)}}>信用卡</option>
                <option name="paymentType" value="ATM轉帳">ATM轉帳</option>
              </Form.Control>
          </Form.Group>
        </Form>
        <input className="form-control Mao-form-input-text" type="text" name="paymentType" value={values.paymentType}  onChange={hadnleChange}/>
        
        {errors.paymentType && <p className="Mao-prompt-word">* {errors.paymentType}</p>}
      </div>
    <div className="d-flex flex-column m-3 mb-5">
    {openCard?CredidCard:''}
    
    </div>
      <div className="form-row col">
        {/* <h4>發票</h4> */}
        <Form>
          <Form.Group controlId="formGridState">
            <Form.Label><h4>發票</h4></Form.Label>
              <Form.Control as="select" name="invoiceType" onChange={hadnleChange}>
                <option name="invoiceType" value="個人電子發票">個人電子發票</option>
                <option name="invoiceType" value="捐贈發票">捐贈發票</option>
                <option name="invoiceType" value="公司戶電子發票">公司戶電子發票</option>
              </Form.Control>
          </Form.Group>
        </Form>
        <input className="form-control Mao-form-input-text" type="text" name="invoiceType" value={values.invoiceType}  onChange={hadnleChange}/>
        {errors.invoiceType && <p className="Mao-prompt-word">* {errors.invoiceType}</p>}
      </div>

      <button className="Mao-form-btn-send" type="submit">送出</button>

    </form>
    <MaoCartShopTotal/>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    //購物車內容
    AddItem: store.AddItem,
    FinalTotal: store.calculator_total,
    saveOrderBuyerInfoReducer:store.saveOrderBuyerInfoReducer
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
      CalShopCartTotal,
      calCart,forServerorderProductInfo,saveOrderBuyerInfo,clearOrderBuyerproduct
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo)
// export default OrderInfo
