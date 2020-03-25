import React, { useEffect, useState } from 'react'
import { Table, bordered, tr } from 'react-bootstrap'
import './css/Orderbill.scss'
import MemberSidebar from '../Irene/components/MemberSidebar'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { productList } from './ProductList'
import {
  getShopCart,
  AddCart,
  AddCartItem,
  DelCartItem,
  CalShopCart,
  Handle_AddMyFavorite,
  ControlDataOne,
  saveOrderBuyerInfo,
  AddCartNewItem_sendcal,
  getOrderFromServer,
  saveOrderBuyerproduct,
} from './actions/ShopCartAction'

function Orderbill(props) {
  // console.log('Orderbill', props)
  
  const [loaded, setLoaded] = useState(false)
  const [waitOrder,setWaitOrder] =useState(false)
  function getProductName(val) {
    productList.map((v, i) => {
      if (v.itemId == val) {
        val = v.pName
      }
    })
    return val
  }
  function checkProductPrice(val) {
    productList.map((v, i) => {
      if (val == v.itemId) {
        val = v.itemPrice
      }
    })
    return val
  }
  document.documentElement.scrollTop = document.body.scrollTop=0

  let orderprodInfo = props.saveOrderBuyerProReducer

  const orderListitem = orderprodInfo.map((v, i) => {
    return (
      <>
      <tr>
        <Link to={`commidty/${v.itemId}`} style={{color:'#000'}}>
            <td className="d-flex">
              <div className="w-50">
                <span>{v.itemName}</span>
              </div>
              <div className="w-25 px-3">
                <span>{v.count}</span>
              </div>
              <div className="w-25 px-3">
                <span>{v.itemPrice}</span>
              </div>
            </td>
          </Link>
        </tr>
      </>
    )
  })

  const orderItemThead = (
    <thead className="Mao-orderbill-Item-thead">
      <tr className="d-flex p-2">
        <div className="w-50">產品名稱</div>
        <div className="w-25">產品數量</div>
        <div className="w-25">產品價格</div>
      </tr>
    </thead>
  )
  let buyerInfo = props.saveOrderBuyerInfoReducer
  const orderListBuyerInfo = (
    <thead className="Mao-orderbill-border">
      <tr>
        <th className="d-flex">
          <div className="mr-5">
            購買人訂單：<span>{buyerInfo.orderId}</span>
          </div>
          <div className="mr-5">
            購買人姓名：<span>{buyerInfo.buyerName}</span>
          </div>
          <div>
            購買人取貨地點：
            <span>
              {buyerInfo.shipping} {buyerInfo.buyerAdress}
            </span>
          </div>
        </th>
      </tr>
      <tr>
        <th className="d-flex justify-content-between">
          <div className="mr-5">
            運費：<span>{buyerInfo.shipCost}</span>
          </div>
          <div className="mr-5">
            活動折扣：<span>{buyerInfo.discount}</span>
          </div>
          <div>
            消費總金額：<span>{buyerInfo.total}</span>
          </div>
        </th>
      </tr>
    </thead>
  )
  const orderListDataBox = (
    <Table hover responsive="md" className="w-100">
      {/* {test} */}
      {orderListBuyerInfo}
      {orderItemThead}
      <tbody>{orderListitem}</tbody>
    </Table>
  )

  const orderListtable = (
    <div className="Mao-orderbill-title">
      <h3>訂單</h3>
    </div>
  )

  const waitingDisplay = (
    <div className="Mao-waiting-display"></div>
  )

  const displayOK = (
    <div className="d-flex">
      <MemberSidebar />
      <div style={{ width: '1000px' }}>
        {orderListtable}
        <div className="Mao-orderbill-border-box">{orderListDataBox}</div>
      </div>
    </div>
  )
  setTimeout(() => {
    setLoaded(true)
  }, 2000)

  return <>{loaded ? displayOK : waitingDisplay}</>
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
    getOrderBuyer: store.getOrderBuyer,
    saveOrderBuyerInfoReducer: store.saveOrderBuyerInfoReducer,
    saveOrderBuyerProReducer: store.saveOrderBuyerProReducer,
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ControlDataOne,
      getShopCart,
      AddCart,
      AddCartItem,
      DelCartItem,
      CalShopCart,
      Handle_AddMyFavorite,
      saveOrderBuyerInfo,
      AddCartNewItem_sendcal,
      getOrderFromServer,
      saveOrderBuyerproduct,
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Orderbill)
