import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function MaoShopCartBTN(props) {

  const productList = [
    {
      id: 1,
      itemId: 'p001',
      pName: 'Apple Watch Nike1',
      itemPrice: 100,
    },
    {
      id: 2,
      itemId: 'p002',
      pName: 'Apple Watch Nike2',
      itemPrice: 200,
    },
    {
      id: 3,
      itemId: 'p003',
      pName: 'Apple Watch Nike3',
      itemPrice: 300,
    },
    {
      id: 4,
      itemId: 'p004',
      pName: 'Apple Watch Nike4',
      itemPrice: 400,
    },
    {
      id: 5,
      itemId: 'p005',
      pName: 'Apple Watch Nike5',
      itemPrice: 500,
    },
    {
      id: 6,
      itemId: 'p006',
      pName: 'Apple Watch Nike6',
      itemPrice: 600,
    },
  ]

  let productBtn=(
    productList.map((v,i)=>{
      return(
        <button className="btn btn-dark" onClick={()=>console.log(v)}>+</button>
      )})
  )
  
  return <>{productBtn}</>
}
export default withRouter(MaoShopCartBTN)
