import React, { useState, useEffect } from 'react'
import './css/mao.scss'
import './css/ShopCartLike.scss'
import ProductSlide from './ProductSlide'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  AddCart,
  AddCartItem,
  DelCartItem,
  CalShopCart,
  Handle_AddMyFavorite,
  ControlDataOne,
  AddCartNewItem_sendcal
} from './actions/ShopCartAction'
import './css/MaoAD.scss'
import MemberSidebar from '../Irene/components/MemberSidebar'
import {FaShoppingBasket,FaRegTrashAlt} from 'react-icons/fa'
import { FiShoppingBag} from 'react-icons/fi'

function ShopCartLike(props) {
  const [favorloaded, setFavorloaded] = useState(false)
  const [newItem,setNewItem] =useState(false)

  // 購物車內容顯示　要再做調整
  const dataList = props.MyFavorite.map((v, i) => {
    console.log('MyFavorite',v)
    return (
      <li key={v.itemId} className="d-flex Mao-shopcart-check-item">
        <img
          src={`/chin-img/images/${v.itemName}/${v.itemImg}`}
          alt=""
          style={{ width: '100px', height: '100px' }}
        />

        <div className="Mao-shopcart-check-item-info">
          <p className="Mao-btn-text">{v.itemName}</p>
          <div className="d-flex justify-content-between">
            <p style={{ width: '25%' }}>${v.itemPrice}</p>
          </div>
        </div>
        <div className="Mao-shopcart-check-item-action">
          <button
            className="Mao-btn-amount-whiteDel Mao-btn-amount-white-my"
            onClick={() => {
              props.Handle_AddMyFavorite(false, v, props.MyFavorite)
            }}
          >
            <FaRegTrashAlt style={{margin:"0px 20px",width:"24px",height:"24px"}}/>
            <span>刪除</span>
            <div className="Mao-btn-show"></div>
            <div className="Mao-btn-showL"></div>
          </button>
          {/* </div> */}
          
          <button
            className="Mao-btn-amount-whiteDel Mao-btn-amount-white-my"
            onClick={() => {
              let productInfo = {
                itemId: v.itemId,
                name: v.name,
                itemName: v.itemName,
                itemImg: v.itemImg,
                itemPrice: v.itemPrice,
                itemCategoryId: v.itemCategoryId,
              }
              props.Handle_AddMyFavorite(false, productInfo, props.MyFavorite)
              props.AddCartNewItem_sendcal(productInfo, props.AddItem)
            }}
          >
            <FiShoppingBag style={{margin:"0px 20px",width:"24px",height:"24px"}}/>
            <span>加入購物車</span>
            <div className="Mao-btn-show"></div>
            <div className="Mao-btn-showL"></div>
          </button>
        </div>
      </li>
    )
  })
  // 如果沒有購物車內沒有品項顯示的畫面
  const CartNoItem = (
    <div className="Mao-CartNoItem">
      <Link to="/" style={{color:"#000"}}>
      <h3>趕快去尋找最愛的商品吧！</h3>
      <FaShoppingBasket style={{width:"300px",height:"300px",opacity:'0.5',margin:"40px"}}/>
      </Link>
    </div>
  )

  return (
    <>
      <div className="d-flex">
        <MemberSidebar />
        <div className="Mao-Like-box">
          <ul
            className={
              dataList.length > 0 ? 'Mao-ul-bg-white' : 'Mao-ul-bg-none'
            }
          >
        {dataList.length == 0 ? CartNoItem : dataList}
           
          </ul>
        </div>
      </div>
      <ProductSlide 
      getdata={newItem} //hook
      sendData={items=>{ //func
        setNewItem(items)
      }}
      />
    </>
  )
}

// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
  return {
    //購物車內容
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
      AddCart,
      AddCartItem,
      DelCartItem,
      CalShopCart,
      Handle_AddMyFavorite,
      AddCartNewItem_sendcal
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopCartLike)
)
