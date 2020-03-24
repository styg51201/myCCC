import React, { useState, useEffect } from 'react'
import './css/mao.scss'
import './css/ShopCartList.scss'
// import '../css/variables.scss'
import MaoCartShopTotal from './component/MaoCartShopTotal'
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
} from './actions/ShopCartAction'
import MaoShopCartBTN from './component/MaoShopCartBTN'
import { productList } from './ProductList'
import ProductSlide from './ProductSlide'
import { FaRegTrashAlt} from "react-icons/fa"
import { FiHeart} from 'react-icons/fi';
import MaoAD from './component/MaoAD'
function ShopCartList(props) {
  const [loaded, setLoaded] = useState(false)
  const [forCart, setForCart] = useState(true)
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
  async function getData() {
    let Ctrl = await props.CtrlData
    // await console.log('CTRL', Ctrl)
    await props.getShopCart(Ctrl)
  }
  useEffect(() => {
    checkProduct()
    getData()
    setLoaded(true)
    setForCart(false)
  }, [])
  let RealCart = [] //統整checkBox的品項，然後最後送至資料庫

  //從資料庫叫出的購物車內容加入checkBox & RealCart
  const ShopCartFromServer = props.AddItem.map((v, i) => {
    let val = v.itemId
    let count = v.count
    RealCart.push({ itemId: val, count: count })
  })

  //驗證購物車作用的狀況
  const displayRealCart = RealCart.map((v, i) => {
    return (
      <li>
        產品：{v.itemId} / 數量：{v.count}
      </li>
    )
  })
  // 購物車內容
  const dataList = props.AddItem.map((v, i) => {
    console.log('SEEEEE',v)
    return (
      <li key={v} className="Mao-shopcart-check-item">
        <img src="https://fakeimg.pl/100/" alt="" />
        <div className="d-flex flex-column justify-content-between Mao-shopcart-check-item-info">
          <p>{checkProduct(v.itemId)}</p>
          <div className="d-flex justify-content-between">
            <p style={{ width: '25%' }}>${checkProductPrice(v.itemId)}</p>
            <div className="d-flex justify-content-between align-items-center Mao-shopcart-check-item-count">
              <button
                className="Mao-btn-amount"
                onClick={() => {
                  props.AddCartItem(false, v.itemId, props.AddItem)
                  props.CalShopCart(props.AddItem)
                  setLoaded(!loaded)
                }}
              >
                -
              </button>
              <input
                placeholder=""
                value={v.count}
                type="text"
              />
              <button
                className="Mao-btn-amount"
                onClick={() => {
                  props.AddCartItem(true, v.itemId, props.AddItem)
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
          <button
            className="Mao-btn-amount-whiteDel Mao-btn-amount-white-my"
            onClick={() => {
              props.CalShopCart(props.AddItem)
              props.DelCartItem(i, props.AddItem)
            }}
          >
            <FaRegTrashAlt style={{width:'25px',height:'25px',marginRight:'15px',marginLeft:'18px'}}/>
            <span>刪除</span>
            <div className="Mao-btn-show"></div>
            <div className="Mao-btn-showL"></div>
          </button>
          <button
            className="Mao-btn-amount-whiteLike Mao-btn-amount-white-my"
            onClick={() => {
              props.CalShopCart(props.AddItem)
              props.DelCartItem(i, props.AddItem)
              props.Handle_AddMyFavorite('true', v, props.MyFavorite)
            }}
          >
            <FiHeart  style={{width:'25px',height:'25px',marginRight:'15px',marginLeft:'18px'}}/>
            <span>下次購買</span>
            <div className="Mao-btn-show"></div>
            <div className="Mao-btn-showL"></div>
          </button>
        </div>
      </li>
    )
  })
  // 如果沒有購物車內沒有品項顯示的畫面
  const CartNoItem = (
   
    <div className="p-3 text-center Mao-CartNoItem-shoplist">
      <h3>趕快去尋找最愛的商品吧！</h3>
      <Link to="/">
        {/* <img className="Mao-Like-img-shoplist" src="./Mao-img/travel1.jpg" /> */}
      </Link>
    </div>
  )
  const CartNoItemTotal = <div className="Mao-Total-Box-none"></div>

  return (
    <>
      <MaoAD/>
      <div className="d-flex my-3" style={{ maxWidth: '1300px' }}>
        <ul className='Mao-shopcart-check-item-ul'>
        
          {props.AddItem.length > 0 ? dataList : CartNoItem}
        </ul>
        {props.AddItem.length > 0 ? <MaoCartShopTotal /> : CartNoItemTotal}
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
    MyFavorite: store.MyFavorite,
    CtrlData: store.ControlDataState,
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
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopCartList)
)
