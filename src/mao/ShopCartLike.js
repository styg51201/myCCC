import React, { useState, useEffect } from 'react'
import './css/mao.scss'
import ProductSlide from './ProductSlide'
import { withRouter, Link } from 'react-router-dom'
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
  AddCartNewItem_sendcal,
} from './actions/ShopCartAction'
import MemberSidebar from '../Irene/components/MemberSidebar'
import { productList } from './ProductList'


function ShopCartLike(props) {
  const [favorloaded, setFavorloaded] = useState(false)
  // 從產品ID轉換成產品名稱
  function checkProduct(val) {
    productList.map((v, i) => {
      if (val == v.itemId) {
        val = v.pName
      }
    })
    return val
  }

  // 從ID去獲取產品的價格
  function checkProductPrice(val) {
    productList.map((v, i) => {
      if (val == v.itemId) {
        val = v.itemPrice
      }
    })
    return val
  }
  // 必打
  useEffect(() => {
    checkProduct()
    props.getShopCart()
  }, [])

  let RealCart = []
  let checkBox = []
  props.AddItem.map((v, i) => {
    RealCart.push(v)
    checkBox.push(v.itemId)
  })
  function checkCart(val) {
    
    let index = checkBox.findIndex(e => e == val.itemId)
    if (index == -1) {
      val.count=1
      RealCart.push(val)
    }
    RealCart.map((v, i) => {
      if (val.itemId == v.itemId) {
        v.count=+v.count+1
      }
    })
    
    props.AddCartNewItem_sendcal(RealCart)
  }

  // 購物車內容顯示　要再做調整
  const dataList = props.MyFavorite.map((v, i) => {
    return (
      <li key={v.itemId} className="d-flex Mao-shopcart-check-item">
        <img src="https://fakeimg.pl/100/" alt="" />
        <div className="d-flex flex-column justify-content-between Mao-shopcart-check-item-info">
          <p>{checkProduct(v.itemId)}</p>
          <div className="d-flex justify-content-between">
            <p style={{ width: '25%' }}>${checkProductPrice(v.itemId)}</p>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center text-left Mao-shopcart-check-item-action">
          <button
            className="btn btn-danger d-flex justify-content-start py-2 my-2"
            onClick={() => {
              props.Handle_AddMyFavorite('false', v, props.MyFavorite)
            }}
          >
            <img src="..\img\header-footer\heart.svg" alt="" />
            <span>刪除</span>
          </button>
          {/* </div> */}
          <button
            className="btn btn-danger d-flex justify-content-start py-2 my-2"
            onClick={() => {
              props.Handle_AddMyFavorite('false', v, props.MyFavorite)
              let productInfo = {
                itemId: v.itemId,
                itemPrice: v.itemPrice,
                count: 0,
                itemCategoryId: v.itemCategoryId,
                name: v.name,
              }
              checkCart(productInfo)
            }}
          >
            <img src="..\img\header-footer\shopping-bag.svg" alt="" />
            <span>加入購物車</span>
          </button>
        </div>
      </li>
    )
  })
  // 如果沒有購物車內沒有品項顯示的畫面
  const CartNoItem = (
    <div className="Mao-CartNoItem">
      <h3>趕快去尋找最愛的商品吧！</h3>
      <Link to="/">
        <img className="Mao-Like-img" src="/Mao-img/travel1.jpg" />
      </Link>
    </div>
  )

  return (
    <>
   
      <div className="d-flex">
      <MemberSidebar/>
        <div>
        {/* {dataList.length == 0 ? '' : (<h3 className="Mao-ul-title">
          我的收藏
          </h3>)} */}
          <h3 className="Mao-ul-title">我的收藏</h3>
          <ul className={dataList.length>0? 'Mao-ul-bg-white':'Mao-ul-bg-none'}>
            {dataList.length == 0 ? CartNoItem : dataList} 
          </ul>
        </div>
      </div>
      <ProductSlide />
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
      AddCartItem,
      DelCartItem,
      CalShopCart,
      Handle_AddMyFavorite,
      AddCartNewItem_sendcal,
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopCartLike)
)
