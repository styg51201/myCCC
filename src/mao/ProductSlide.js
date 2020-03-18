import React, { useEffect, useState } from 'react'
import { productList } from './ProductList'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getShopCart,
  AddCart,
  realCart,
  AddCartNewItem,CalShopCart,Handel_AddMyFavorite
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
    props.AddCartNewItem(RealCart)
    props.CalShopCart(RealCart)
  }
  const productItem = productList.map((v, i) => {
    return (
      <>
        <div
          className="card border p-3 d-flex flex-column align-items-center justify-content-between m-3"
          style={{ width: '15rem' }}
        >
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
              checkCart(v.pId)
            }}
          >
            加入購物車
          </button>
          
          <button
            className="btn btn-danger px-4 my-1"
            onClick={() => {
              props.Handel_AddMyFavorite('true',v.pId,props.MyFavorite)
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
    calculator:store.calculator,
    MyFavorite:store.MyFavorite
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getShopCart,
      AddCart,
      realCart,
      AddCartNewItem,
      CalShopCart,Handel_AddMyFavorite
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductSlide)
)
