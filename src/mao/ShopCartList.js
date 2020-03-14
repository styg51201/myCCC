import React, { useState,useEffect } from 'react'
import './css/mao.css'
import MaoCartShopTotal from './component/MaoCartShopTotal'
import { withRouter ,Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getShopCart,addValue,minusValue} from '../actions/index'
import MaoShopCartBTN from './component/MaoShopCartBTN'
function ShopCartList(props) {
  console.log(props)
  const productList = [
    {
      id: 1,
      pId: 'p001',
      pName: 'Apple Watch Nike1',
      price: 100,
    },
    {
      id: 2,
      pId: 'p002',
      pName: 'Apple Watch Nike2',
      price: 200,
    },
    {
      id: 3,
      pId: 'p003',
      pName: 'Apple Watch Nike3',
      price: 300,
    },
    {
      id: 4,
      pId: 'p004',
      pName: 'Apple Watch Nike4',
      price: 400,
    },
    {
      id: 5,
      pId: 'p005',
      pName: 'Apple Watch Nike5',
      price: 500,
    },
    {
      id: 6,
      pId: 'p006',
      pName: 'Apple Watch Nike6',
      price: 600,
    },
  ]

  function checkProduct(val) {
    productList.map((v, i) => {
      if (val == v.pId) {
        val=v.pName
      }
    })
    return val
  }
  
  function checkProductPrice(val) {
    productList.map((v, i) => {
      if (val == v.pId) {
        val=v.price
      }
    })
    return val
  }


  // 必打
  useEffect(() => {
    checkProduct()
    props.getShopCart()
  }, [])
  // console.log(props.data[0])
  let shopBox=props.data
  const dataList = props.data.map((v, i) => {
    
    return (
      <li key={v.Id} className="d-flex Mao-shopcart-check-item">
        <img src="https://fakeimg.pl/100/" alt="" />
        <div className="d-flex flex-column justify-content-between Mao-shopcart-check-item-info">
          <p>{checkProduct(v.pId)}</p>
          <div className="d-flex justify-content-between">
            <p style={{ width: '25%' }}>${checkProductPrice(v.pId)}</p>
            <div className="d-flex justify-content-between align-items-center Mao-shopcart-check-item-count">
              <button className="btn btn-danger" 
                onClick={() => {
                  props.minusValue(1)
                }}>-</button>
              <input
                placeholder=""
                value={props.handlecount+v.count}
                type="text"
                id="count-value"
                className="text-center w-50 m-0"
              />
              <Link to='./ShopCartList'
                className="btn btn-danger"
                onClick={() => {
                  props.addValue(1)
                }}
              >
                +
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center text-left Mao-shopcart-check-item-action">
          <div className="border d-flex align-items-center">
            <img src="..\img\header-footer\heart.svg" alt="" />
            <span>刪除</span>
          </div>
          <div className="border d-flex align-items-center">
            <img src="..\img\header-footer\search.svg" alt="" />
            <span>下次購買</span>
          </div>
        </div>
      </li>
    )
  })
  
  let productBtn=(
    productList.map((v,i)=>{
      return(
        <button className="btn btn-dark">+</button>
      )})
  )
  
  return (
    <>
      <div className="d-flex">
        <ul>{dataList}</ul>
        <MaoCartShopTotal/>
      </div>
      {productBtn}

    </>
  )
}


// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
  return {
    data: store.getShop,
    handlecount:store.AddShopCartCount
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getShopCart,
      addValue,minusValue,
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopCartList)
)
