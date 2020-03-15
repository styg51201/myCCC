import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function MaoShopCartBTN(props) {

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

  let productBtn=(
    productList.map((v,i)=>{
      return(
        <button className="btn btn-dark" onClick={()=>console.log(v)}>+</button>
      )})
  )
  
  return <>{productBtn}</>
}
export default withRouter(MaoShopCartBTN)
