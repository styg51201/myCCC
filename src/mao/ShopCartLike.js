import React, { useState,useEffect } from 'react'
import './css/mao.css'
import MaoCartShopTotal from './component/MaoCartShopTotal'
import { withRouter,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getShopCart,AddCart,realCart,AddCartItem,DelCartItem,CalShopCart,Handel_AddMyFavorite} from './actions/ShopCartAction'
import MaoShopCartBTN from './component/MaoShopCartBTN'
import {productList} from './ProductList'
import ProductSlide from './ProductSlide'
function ShopCartLike(props) {
const [favorloaded,setFavorloaded]=useState(false)
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
  // let RealCart=[]
  // function checkCart(val) {
  //   let checkBox=props.AddItem
  //   let obj = { pId: val, count: 0 }
  //   let index = checkBox.findIndex(e => e == val)
  //   checkBox.map((v,i)=>{
  //     let pId=v.pId
  //     index = checkBox.findIndex(pId => pId == val)
  //     if (val == pId) {
  //       v.count += 1
  //     }
  //   })
  //   console.log(index)
  //   if (index == -1) {
  //     console.log('FUCK!')
  //     checkBox.push(obj)
  //   }
  //   props.AddCartNewItem(checkBox)
  // }
  
  // 必打
  useEffect(() => {
    checkProduct()
    props.getShopCart()
  }, [])



// 購物車內容顯示　要再做調整
const dataList = props.MyFavorite.map((v, i) => {
  return (
    <li key={v} className="d-flex Mao-shopcart-check-item">
      <img src="https://fakeimg.pl/100/" alt="" />
      <div className="d-flex flex-column justify-content-between Mao-shopcart-check-item-info">
        <p>{checkProduct(v)}</p>
        <div className="d-flex justify-content-between">
          <p style={{ width: '25%' }}>${checkProductPrice(v)}</p>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center text-left Mao-shopcart-check-item-action">
        {/* <div className="d-flex align-items-center " style={{border:'1px solid #000',}}> */}
          <button className="btn btn-danger d-flex justify-content-start py-2 my-2" onClick={()=>{
              props.Handel_AddMyFavorite('false',v,props.MyFavorite)
            }}>
          <img src="..\img\header-footer\heart.svg" alt="" />
          <span>刪除</span>
          </button>
        {/* </div> */}
        <button className="btn btn-danger d-flex justify-content-start py-2 my-2" onClick={()=>{
              props.Handel_AddMyFavorite('false',v,props.MyFavorite)
              AddCartItem(true,v,props.AddItem)
              props.CalShopCart(props.AddItem)
              // checkCart(v)
            }}>
          <img src="..\img\header-footer\heart.svg" alt="" />
          <span>加入購物車</span>
          </button>
      </div>
    </li>
  )
})
  // 如果沒有購物車內沒有品項顯示的畫面
  const CartNoItem = (<h3 className="p-3" style={{height:'500px',maxWidth:'1300px'}}>購物內車目前沒有產品</h3>)
  
 
  

  return (
    <>
      <div className="d-flex bg-white my-5" style={{width:'1300px'}}>
        <ul>{dataList.length==0?CartNoItem:dataList}</ul>
        {/* <MaoCartShopTotal/> */}
      </div>
      <ProductSlide/>
      {/* <div>
      <h2>傳輸內容</h2>
        <ul className="list-unstyled">{dataList}</ul>
      </div> */}
      
    </>
  )
}


// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
  return {
    //購物車內容
    data: store.getShop, 
    AddItem:store.AddItem,
    Cart:store.displayShopCart,
    MyFavorite:store.MyFavorite
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getShopCart,AddCart,realCart,AddCartItem,DelCartItem,CalShopCart,Handel_AddMyFavorite
    },
    dispatch
  )
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopCartLike)
)
