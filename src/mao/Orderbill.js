import React, { useEffect, useState } from 'react'
import { Table,bordered ,tr } from 'react-bootstrap';
import './css/Orderbill.scss'
import MemberSidebar from '../Irene/components/MemberSidebar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    getShopCart,
    AddCart,
    realCart,
    AddCartItem,
    DelCartItem,
    CalShopCart,
    Handle_AddMyFavorite,
    ControlDataOne,
    AddCartNewItem_sendcal,getOrderFromServer
  } from './actions/ShopCartAction'

function Orderbill(props){
console.log('Orderbill',props)

const [loaded,setLoaded]=useState(false)
useEffect(()=>{
    props.getOrderFromServer()
},[])

const test=props.getOrderBuyer.map((v,i)=>{
    return (
        <>
         <thead className="Mao-orderbill-border">
    <tr>
      <th className="d-flex">
        <div className="mr-5">購買人訂單：<span>{v.orderId}</span></div>
        <div className="mr-5">購買人姓名：<span>{v.buyerName}</span></div>
        <div>購買人取貨地點：<span>{v.shipping} {v.buyerAdress}</span></div>
      </th>
    </tr>
    <tr>
        <th className="d-flex justify-content-between">
            <div className="mr-5">運費：<span>{v.ship}</span></div>
            <div className="mr-5">活動折扣：<span>{v.discount}</span></div>
            <div>消費總金額：<span>{v.total}</span></div>
        </th>
    </tr>
  </thead>
        </>
    )
})
const orderListitem=(
    <>
    <tr>
      <td className="d-flex justify-content-between">
        <div className="mr-5">
            <span>Apple</span>
        </div>
        <div className="mr-5">
        <span>5</span>
        </div>
        <div>
        <span>500</span>
        </div>
      </td>
    </tr>
    <tr>
      <td className="d-flex justify-content-between">
        <div className="mr-5">
            <span>Apple</span>
        </div>
        <div className="mr-5">
        <span>5</span>
        </div>
        <div>
        <span>500</span>
        </div>
      </td>
    </tr>
    <tr>
      <td className="d-flex justify-content-between">
        <div className="mr-5">
            <span>Apple</span>
        </div>
        <div className="mr-5">
        <span>5</span>
        </div>
        <div>
        <span>500</span>
        </div>
      </td>
    </tr>
    <tr>
      <td className="d-flex justify-content-between">
        <div className="mr-5">
            <span>Apple</span>
        </div>
        <div className="mr-5">
        <span>5</span>
        </div>
        <div>
        <span>500</span>
        </div>
      </td>
    </tr>
    <tr>
      <td className="d-flex justify-content-between">
        <div className="mr-5">
            <span>Apple</span>
        </div>
        <div className="mr-5">
        <span>5</span>
        </div>
        <div>
        <span>500</span>
        </div>
      </td>
    </tr>
    </>
    
)
const orderItemThead=(
    <thead className="Mao-orderbill-Item-thead">
        <tr className="d-flex justify-content-between p-2">
            <div className="mr-5">
                產品名稱
            </div>
            <div className="mr-5">
                產品數量
            </div>
            <div>
                產品價格
            </div>
        </tr>    
    </thead>
    
)
const orderListBuyerInfo=(
    <thead className="Mao-orderbill-border">
    <tr>
      <th className="d-flex">
        <div className="mr-5">購買人訂單：<span>F5F4DFS89</span></div>
        <div className="mr-5">購買人姓名：<span>Alex</span></div>
        <div>購買人取貨地點：<span>7-11</span></div>
      </th>
    </tr>
    <tr>
        <th className="d-flex justify-content-between">
            <div className="mr-5">運費：<span>100</span></div>
            <div className="mr-5">活動折扣：<span>100</span></div>
            <div>消費總金額：<span>1900</span></div>
        </th>
    </tr>
  </thead>
)
const orderListDataBox=(
    <Table  hover responsive="md" className="w-100">
    {test}
        {/* {orderListBuyerInfo} */}
        {orderItemThead}
        <tbody>
            {orderListitem}
        </tbody>
    </Table>
)

const orderListtable=(
    <div className="Mao-orderbill-title">
        <h3>訂單</h3>
    </div>
)

const waitingDisplay=(
    <div style={{background:'#fff',width:'100vw',height:'100vh'}}>
    </div>
)

const displayOK=(
<div className="d-flex">
        <MemberSidebar/>
        <div style={{width:'1000px'}}>
            {orderListtable}
            <div className="Mao-orderbill-border-box">
                {orderListDataBox}
            </div>
        </div>
        
    </div>
)
setTimeout(()=>{
    setLoaded(true)
},1500)

    return (
    <>
    {loaded?displayOK:waitingDisplay}
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
    calculator: store.calculator,
    MyFavorite: store.MyFavorite,
    getOrderBuyer:store.getOrderBuyer,
    saveOrderBuyrtInfo:store.saveOrderBuyrtInfo
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ControlDataOne,
      getShopCart,
      AddCart,
      realCart,
      AddCartItem,
      DelCartItem,
      CalShopCart,
      Handle_AddMyFavorite,
      AddCartNewItem_sendcal,getOrderFromServer
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Orderbill)
