import React, { useEffect, useState } from 'react'
import { productList } from './ProductList'
import { withRouter ,Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './css/mao.scss'
import '../chin/chin-css/items.scss'
import {
  getShopCart,
  AddCart,
  CalShopCart,
  Handle_AddMyFavorite,
  AddCartNewItem_sendcal,
} from './actions/ShopCartAction'
import {commidtyRANDItemId} from '../chin/actions/itemsActions'

import {fromServerMbLikeData} from '../stacey/actions/couponAction'

import Slider from 'react-slick'
import { FiShoppingBag ,FiHeart} from 'react-icons/fi';
import Swal from 'sweetalert2'
import MaoItemList from './component/MaoItemList'
function ProductSlide(props) {

  //會員id
  const mb_id = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0

  useEffect(() => {
    if(mb_id) {
      props.fromServerMbLikeData(mb_id)
    }
  }, [])

 
  function SamplePrevArrow(props) {

    const { className, style, onClick } = props
    return (
        <img
          src="/chin-img/chevron-left.svg"
          className="chin-arr"
          onClick={onClick}
        />
    )
  }
  function SampleNextArrow(props) {

    const { className, style, onClick } = props
    return (
        <img
          src="/chin-img/chevron-right.svg"
          className="chin-arr2"
          onClick={onClick}
        />
    )
  }
  let settings = {
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay:'auto',
    slidesToShow: 4,
    slidesToScroll:4,
  };
  let settingsRWD = {
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay:'auto',
    slidesToShow: 1,
    slidesToScroll:1,
    adaptiveHeight:true
  };

  let RealCart = []
  let checkBox = []
  props.AddItem.map((v, i) => {
    RealCart.push(v)
    checkBox.push(v.itemId)
  })
  useEffect(() => {
    props.getShopCart()
    props.commidtyRANDItemId()
  }, [])


const [sender,setSender]=useState(false)
  const productItem = props.getRANDitemid.map((v, i) => {
    let mbLike = false
    if(props.MyFavorite.findIndex((val)=>val.itemId === v.itemId) > 0 ){
      mbLike = true
    }
    return (
     <MaoItemList data={v} sendFunc={items=>props.sendData(items)}
     forChange={props.getdata} mbLike={mbLike}/>
    )
  })
  return (
    <>
      <div className="Mao-productSlide-box">
      <h2 className="Mao-productSlide-title">推薦產品</h2>
        <div className="Mao-slide">
          <Slider {...settings}>
            {productItem}
          </Slider>
        </div>
        <div className="Mao-slideRWD">
          <Slider {...settingsRWD}>
            {productItem}
          </Slider>
        </div>
      </div>
    </>
  )
}

// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡

const mapStateToProps = store => {
  return {
    data: store.getShop,
    AddItem: store.AddItem,
    calculator: store.calculator,
    MyFavorite: store.memberLikeData,
    getRANDitemid:store.getRANDitemid,
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getShopCart,
      AddCart,
      CalShopCart,
      Handle_AddMyFavorite,
      AddCartNewItem_sendcal,commidtyRANDItemId,
      fromServerMbLikeData
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductSlide)
)
