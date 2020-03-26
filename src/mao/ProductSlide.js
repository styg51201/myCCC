import React, { useEffect, useState } from 'react'
import { productList } from './ProductList'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './css/mao.scss'
import {
  getShopCart,
  AddCart,
  AddCartNewItem,
  CalShopCart,
  Handle_AddMyFavorite,
  AddCartNewItem_sendcal,
} from './actions/ShopCartAction'
import {commidtyRANDItemId} from '../chin/actions/itemsActions'
import Slider from 'react-slick'
import { FiShoppingBag ,FiHeart} from 'react-icons/fi';

function ProductSlide(props) {
  let settings = {
    dots: true,
    infinite: true,
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
  


  const productItem = props.getRANDitemid.map((v, i) => {
    return (
      <>
        <div className="card Mao-prodctSlide-card-box ">
          <img
            className="Mao-img"
            src={`./chin-img/images/${v.itemName}/${v.itemImg}`}  
            alt="..."
          />
          <h4 className="card-title" style={{fontSize:'16px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',}}>{v.itemName}</h4>
          <p>{v.itemPrice}</p>
          <button
            className="Mao-prodctSlide-card-btn-add"
            onClick={() => {
  let truePrice=v.itemPrice.split('$').join('')
              let newProduct={
                itemId:v.itemId,
                name:v.name,
                itemName: v.itemName,
                itemImg:v.itemImg,
                itemPrice:truePrice,
                itemCategoryId: v.itemCategoryId
              }
              props.AddCartNewItem_sendcal(newProduct,props.AddItem)
              props.sendData(!props.getdata)
              
            }}
          >
            <FiShoppingBag class="mx-2"/><span>加入購物車</span>
          </button>

          <button
            className="Mao-prodctSlide-card-btn-like"
            onClick={() => {
              let productInfo = {
                itemId: v.itemId,
                itemPrice: v.itemPrice,
                itemCategoryId: v.itemCategoryId,
                name: v.name,
              }
              props.Handle_AddMyFavorite('true', productInfo, props.MyFavorite)
            }}
          >
            <FiHeart className="mr-2"/>
            <span className="ml-1">我的最愛</span>
          </button>
        </div>
      </>
    )
  })
  return (
    <>
      <div
        className="bg-white p-2 my-5"
        style={{ width: "1300px"}}
      >
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
    MyFavorite: store.MyFavorite,
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
      AddCartNewItem_sendcal,commidtyRANDItemId
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductSlide)
)
