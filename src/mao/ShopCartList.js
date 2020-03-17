import React, { useState,useEffect } from 'react'
import './css/mao.css'
import MaoCartShopTotal from './component/MaoCartShopTotal'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getShopCart,AddCart,realCart,AddCartItem} from './actions/ShopCartAction'
import MaoShopCartBTN from './component/MaoShopCartBTN'
import {productList} from './ProductList'
import ProductSlide from './ProductSlide'
function ShopCartList(props) {
const [load,setLoad]=useState(false)
// console.log(props.data)
  // 從產品ID轉換成產品名稱
  function checkProduct(val) {
    productList.map((v, i) => {
      if (val == v.pId) {
        val=v.pName
      }
    })
    return val
  }
  
  // 從ID去獲取產品的價格
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
  
  let RealCart=[] //統整checkBox的品項，然後最後送至資料庫

  //從資料庫叫出的購物車內容加入checkBox & RealCart
  const ShopCartFromServer=props.data.map((v,i)=>{
    let val=v.pId
    let count=v.count
    RealCart.push({pId:val,count:count})
  })
  // console.log('RealCart',RealCart)

  // 顯示購物車內容
  　//將資料庫叫的購物車丟入

  let count=0; //加入數量使用

  //從reducer取得的產品進行加入購物車的行為，並且判斷產品是否有相同的，如果相同則數量+1
  // 品項篩入checkBox，整理後的加入RealCart
  // const shopcartItem=props.AddItem.map((v,i)=>{
  //   if(checkBox.indexOf(v.value)==-1){
  //     checkBox.push(v.value)
  //     let val=v.value
  //     RealCart.push({pId:val,count:1})
  //     // console.log('checkBox',checkBox)
  //   }else{
  //     RealCart.map((val,index)=>{
  //       if(val.pId==v.value){
  //         val.count+=1
  //       }
  //     })
  //   }
  // })

//驗證購物車作用的狀況
const displayRealCart=RealCart.map((v,i)=>{
  return (
    <li>產品：{v.pId} / 數量：{v.count}</li>
  )
})
// console.log('RealCart',RealCart)
// 購物車內容顯示　要再做調整
const dataList = RealCart.map((v, i) => {
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
                props.AddCartItem(false,i,props.data)
                setLoad(!load)
              }}>-</button>
            <input
              placeholder=""
              // value={props.handlecount*1+v.count*1}
              value={v.count*1}
              type="text"
              id="count-value"
              className="text-center w-50 m-0"
            />
            <button
              className="btn btn-danger"
              onClick={() => {
                props.AddCartItem(true,i,props.data)
                setLoad(!load)
              }}
            >
              +
            </button>
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
  // 如果沒有購物車內沒有品項顯示的畫面
  const CartNoItem = (<h3 className="Mao-shopcart-check-item">購物內車目前沒有產品</h3>)
  
 
  

  return (
    <>
      <div className="d-flex">
        <ul>{props.data.length>0?dataList:CartNoItem}</ul>
        <MaoCartShopTotal/>
      </div>
      <ProductSlide/>
      <div>
      <h2>傳輸內容</h2>
        <ul className="list-unstyled">{displayRealCart.length>0?displayRealCart:CartNoItem}</ul>
      </div>
      
    </>
  )
}


// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
  return {
    //購物車內容
    data: store.getShop, 
    AddItem:store.AddItem,
    Cart:store.displayShopCart
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getShopCart,AddCart,realCart,AddCartItem
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopCartList)
)
