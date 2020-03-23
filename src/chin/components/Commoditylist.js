import React, { useState, useEffect } from 'react'
import Features from '../small components/Features'
import Brand from '../small components/Brand'
import Price from '../small components/Price'
import Discount from '../small components/Discount'

function Commoditylist(props) {
  console.log(props)
  let nameList = []
  for (let i = 0; i < props.data.length; i++) {
    if (nameList.indexOf(props.data[i].name) === -1) {
      nameList.push(props.data[i].name)
    }
  }
  nameList.sort()
  return (
    <ul className="chin-commoditylist">
      <Price />
      <Brand list={nameList} />
      <Features />
      <Discount />
    </ul>
  )
}

export default Commoditylist
