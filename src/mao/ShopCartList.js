import React, { useState,useEffect } from 'react'
import './css/mao.css'
import MaoCartShopTotal from './component/MaoCartShopTotal'
import { withRouter,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getShopCart,AddCart,realCart,AddCartItem,DelCartItem,CalShopCart} from './actions/ShopCartAction'
import MaoShopCartBTN from './component/MaoShopCartBTN'
import {productList} from './ProductList'
import ProductSlide from './ProductSlide'
function ShopCartList(props) {
const [loaded,setLoaded]=useState(false)
  // 從產品ID轉換成產品名稱
  function checkProduct(val) {
    productList.map((v, i) => {
      if (val == v.pId) {
        val=v.pName
      }
    })
    return val
  }
  
  // 從ID去獲取產品的價格
  function checkProductPrice(val) {
    productList.map((v, i) => {
      if (val == v.pId) {
        val=v.price
      }
    })
    return val
  }

  
  // 必打
  useEffect(() => {
    checkProduct()
    props.getShopCart()
    setLoaded(true)
  }, [])
  let RealCart=[] //統整checkBox的品項，然後最後送至資料庫

  //從資料庫叫出的購物車內容加入checkBox & RealCart
  const ShopCartFromServer=props.AddItem.map((v,i)=>{
    let val=v.pId
    let count=v.count
    RealCart.push({pId:val,count:count})
  })

//驗證購物車作用的狀況
const displayRealCart=RealCart.map((v,i)=>{
  return (
    <li>產品：{v.pId} / 數量：{v.count}</li>
  )
})
// 購物車內容顯示　要再做調整
const dataList = props.AddItem.map((v, i) => {
  return (
    <li key={v.Id} className="d-flex Mao-shopcart-check-item">
      <img src="https://fakeimg.pl/100/" alt="" />
      <div className="d-flex flex-column justify-content-between Mao-shopcart-check-item-info">
        <p>{checkProduct(v.pId)}</p>
        <div className="d-flex justify-content-between">
          <p style={{ width: '25%' }}>${checkProductPrice(v.pId)}</p>
          <div className="d-flex justify-content-between align-items-center Mao-shopcart-check-item-count">
            <button className="btn btn-danger" 
              onClick={() => {
                props.AddCartItem(false,v.pId,props.AddItem)
        props.CalShopCart(props.AddItem)
                setLoaded(!loaded)
              }}>-</button>
            <input
              placeholder=""
              value={v.count}
              type="text"
              id="count-value"
              className="text-center w-50 m-0"
            />
            <button
              className="btn btn-danger"
              onClick={() => {
                props.AddCartItem(true,v.pId,props.AddItem)
        props.CalShopCart(props.AddItem)
                setLoaded(!loaded)
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center text-left Mao-shopcart-check-item-action">
        <div className="border d-flex align-items-center">
        <button className="btn btn-dager" onClick={()=>{
        props.CalShopCart(props.AddItem)
        props.DelCartItem(i,props.AddItem)
        }}>
          <img src="..\img\header-footer\heart.svg" alt="" />
          <span>刪除</span>
        </button>
        </div>
        <div className="border d-flex align-items-center">
          <img src="..\img\header-footer\search.svg" alt="" />
          <span>下次購買</span>
        </div>
      </div>
    </li>
  )
})
  // 如果沒有購物車內沒有品項顯示的畫面
  const CartNoItem = (<h3 className="Mao-shopcart-check-item">購物內車目前沒有產品</h3>)
  
 
  

  return (
    <>
      <div className="d-flex">
        <ul>{props.data.length>0?dataList:CartNoItem}</ul>
        <MaoCartShopTotal/>
      </div>
      <ProductSlide/>
      <div>
      <h2>傳輸內容</h2>
        <ul className="list-unstyled">{displayRealCart.length>0?displayRealCart:CartNoItem}</ul>
      </div>
      
    </>
  )
}


// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
  return {
    //購物車內容
    data: store.getShop, 
    AddItem:store.AddItem,
    Cart:store.displayShopCart
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getShopCart,AddCart,realCart,AddCartItem,DelCartItem,CalShopCart
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopCartList)
)
