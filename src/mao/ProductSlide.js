import React, { useEffect, useState } from 'react'
import { productList } from './ProductList'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getShopCart,
  AddCart,
  realCart,
  AddCartNewItem,
  CalShopCart,
  Handle_AddMyFavorite,
  AddCartNewItem_sendcal,
} from './actions/ShopCartAction'

function ProductSlide(props) {
  let RealCart = []
  let checkBox = []
  props.AddItem.map((v, i) => {
    RealCart.push(v)
    checkBox.push(v.pId)
  })
  useEffect(() => {
    props.getShopCart()
  }, [])

  function checkCart(val) {
    
    let index = checkBox.findIndex(e => e == val.pId)
    if (index == -1) {
      val.count=1
      RealCart.push(val)
    }else{
      RealCart.map((v, i) => {
        if (val.pId == v.pId) {
          v.count=+v.count+1
        }
    })
  }
    props.AddCartNewItem_sendcal(RealCart)
  }

  // console.log('ProductSlide',productList)
  const productItem = productList.map((v, i) => {
    return (
      <>
        <div className="card border p-3 d-flex " style={{ width: '15rem' }}>
          <img
            className="my-2"
            src="https://fakeimg.pl/50/"
            style={{ width: '150px', height: '150px' }}
            alt="..."
          />
          <h4 className="card-title">{v.pName}</h4>
          <p>${v.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              let productInfo = {
                pId: v.pId,
                price: v.price,
                count:0,
                itemCategoryId: v.itemCategoryId,
                name: v.name,
              }
              checkCart(productInfo)
            }}
          >
            加入購物車
          </button>

          <button
            className="btn btn-danger px-4 my-1"
            onClick={() => {
              let productInfo = {
                pId: v.pId,
                price: v.price,
                itemCategoryId: v.itemCategoryId,
                name: v.name,
              }
              props.Handle_AddMyFavorite('true', productInfo, props.MyFavorite)
            }}
          >
            我的最愛
          </button>
        </div>
      </>
    )
  })
  const test = <h1>HELLO~</h1>
  return (
    <>
      <div
        className="bg-white p-3 d-flex flex-wrap"
        style={{ width: '1300px' }}
      >
        {productItem}
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
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getShopCart,
      AddCart,
      realCart,
      CalShopCart,
      Handle_AddMyFavorite,
      AddCartNewItem_sendcal,
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductSlide)
)
