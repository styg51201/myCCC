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

 
  let settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:1000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows:true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
      <Slider {...settings}>
        {productItem}
      </Slider>
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
