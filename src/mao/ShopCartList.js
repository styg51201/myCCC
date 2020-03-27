import React, { useState, useEffect } from 'react'
import './css/mao.scss'
import './css/ShopCartList.scss'
import MaoCartShopTotal from './component/MaoCartShopTotal'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getShopCart,
  AddCart,
  AddCartItem,
  DelCartItem,
  CalShopCart,
  Handle_AddMyFavorite,
  ControlDataOne
} from './actions/ShopCartAction'
import ProductSlide from './ProductSlide'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import MaoAD from './component/MaoAD'
import './css/MaoAD.scss'
import PicSlide from './component/PicSlide'
// import MaoMoveIcon from './MaoMoveIcon'

function ShopCartList(props) {
  const [loaded, setLoaded] = useState(false)
  const [newItem,setNewItem] =useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  // 購物車內容
  const dataList = props.AddItem.map((v, i) => {
    return (
      <li key={v} className="Mao-shopcart-check-item">
        <img
          src={`/chin-img/images/${v.itemName}/${v.itemImg}`}
          alt=""
          style={{ width: '100px', height: '100px' }}
        />
        <div className="d-flex flex-column justify-content-between Mao-shopcart-check-item-info">
          <p>{v.itemName}</p>
          <div className="d-flex justify-content-between">
            <p style={{ width: '25%' }}>{v.itemPrice}</p>
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
              <input placeholder="" value={v.count} type="text" />
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
            <FaRegTrashAlt
              style={{
                width: '25px',
                height: '25px',
                marginRight: '15px',
                marginLeft: '18px',
              }}
            />
            <span>刪除</span>
            <div className="Mao-btn-show"></div>
            <div className="Mao-btn-showL"></div>
          </button>
          <button
            className="Mao-btn-amount-whiteLike Mao-btn-amount-white-my"
            onClick={() => {
              props.CalShopCart(props.AddItem)
              props.DelCartItem(i, props.AddItem)
              props.Handle_AddMyFavorite(true, v, props.MyFavorite)
            }}
          >
            <FiHeart className="Mao-btn-in-favor"/>
            <span>下次購買</span>
            <div className="Mao-btn-show"></div>
            <div className="Mao-btn-showL"></div>
          </button>
        </div>
      </li>
    )
  })
  // 如果沒有購物車內沒有品項顯示的畫面
  // const CartNoItem = (
  //   <div>
  //     <MaoMoveIcon />
  //     </div>
  // )
  const CartNoItemTotal = <div className="Mao-Total-Box-none"></div>
  const ADrand =<PicSlide />
  const [getCard,setGetCard]=useState(false)

  return (
    <>
      {props.AddItem.length > 0 ? <MaoAD /> : ''}
      <div className="d-flex my-3" style={{ maxWidth: '1300px' }}>
        <ul className="Mao-shopcart-check-item-ul">
          {props.AddItem.length > 0 ? dataList : ''}
        </ul>
        {props.AddItem.length > 0 ? <MaoCartShopTotal /> : ADrand}
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
    // data: store.getShop,
    AddItem: store.AddItem,
    getRANDitemid:store.getRANDitemid,
    MyFavorite: store.MyFavorite,
    CtrlData: store.ControlDataState,
    getItems:store.getItems
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
      ControlDataOne
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopCartList)
)
