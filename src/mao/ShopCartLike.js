import React, { useState, useEffect } from 'react'
import './css/mao.css'
import MaoCartShopTotal from './component/MaoCartShopTotal'
import MaoSlide from './component/MaoSlide'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getShopCart,
  AddCart,
  realCart,
  AddCartItem,
  DelCartItem,
  CalShopCart,
  Handel_AddMyFavorite,
  ControlDataOne,
  AddCartNewItem_sendcal,
} from './actions/ShopCartAction'
import MaoShopCartBTN from './component/MaoShopCartBTN'
import { productList } from './ProductList'
function ShopCartLike(props) {
  const [favorloaded, setFavorloaded] = useState(false)
  // 從產品ID轉換成產品名稱
  function checkProduct(val) {
    productList.map((v, i) => {
      if (val == v.pId) {
        val = v.pName
      }
    })
    return val
  }

  // 從ID去獲取產品的價格
  function checkProductPrice(val) {
    productList.map((v, i) => {
      if (val == v.pId) {
        val = v.price
      }
    })
    return val
  }
  // 必打
  useEffect(() => {
    checkProduct()
  }, [])

  let RealCart = []
  let checkBox = []
  props.AddItem.map((v, i) => {
    RealCart.push(v)
    checkBox.push(v.pId)
  })
  function checkCart(val) {
    let obj = { pId: val, count: 0 }
    let index = checkBox.findIndex(e => e == val)
    console.log(index)
    if (index == -1) {
      console.log('FUCK!')
      RealCart.push(obj)
    }
    RealCart.map((v, i) => {
      if (val == v.pId) {
        v.count += 1
      }
    })
    props.AddCartNewItem_sendcal(RealCart)
    // props.CalShopCart(RealCart)
  }
  // 購物車內容顯示　要再做調整
  const dataList = props.MyFavorite.map((v, i) => {
    return (
      <li key={v} className="d-flex Mao-shopcart-check-item">
        <img src="https://fakeimg.pl/100/" alt="" />
        <div className="d-flex flex-column justify-content-between Mao-shopcart-check-item-info">
          <p>{checkProduct(v)}</p>
          <div className="d-flex justify-content-between">
            <p style={{ width: '25%' }}>${checkProductPrice(v)}</p>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center text-left Mao-shopcart-check-item-action">
          {/* <div className="d-flex align-items-center " style={{border:'1px solid #000',}}> */}
          <button
            className="btn btn-danger d-flex justify-content-start py-2 my-2"
            onClick={() => {
              props.Handel_AddMyFavorite('false', v, props.MyFavorite)
            }}
          >
            <img src="..\img\header-footer\heart.svg" alt="" />
            <span>刪除</span>
          </button>
          {/* </div> */}
          <button
            className="btn btn-danger d-flex justify-content-start py-2 my-2"
            onClick={() => {
              props.Handel_AddMyFavorite('false', v, props.MyFavorite)
              checkCart(v)
              // checkCart(v)
            }}
          >
            <img src="..\img\header-footer\heart.svg" alt="" />
            <span>加入購物車</span>
          </button>
        </div>
      </li>
    )
  })
  // 如果沒有購物車內沒有品項顯示的畫面
  const CartNoItem = (
    <div className="p-3 text-center Mao-CartNoItem">
      <h3>趕快去尋找最愛的商品吧！</h3>
      <Link to="/">
        <img className="Mao-Like-img" src="./Mao-img/travel1.jpg" />
      </Link>
    </div>
  )

  return (
    <>
      {/* <div className={dataList.length > 0 ? 'bg-white' : 'bg-none'} style={{ width: '1300px' }}> */}

      <ul>{dataList.length == 0 ? CartNoItem : dataList}</ul>
      <MaoSlide />
      {/* <MaoCartShopTotal/> */}
      {/* </div> */}
      {/* <ProductSlide /> */}
      {/* <div>
      <h2>傳輸內容</h2>
        <ul className="list-unstyled">{dataList}</ul>
      </div> */}
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
      Handel_AddMyFavorite,
      AddCartNewItem_sendcal,
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopCartLike)
)
