import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
let newCart = [
  { id: 3, price: 10, count: 1 },
  { id: 56, price: 90, count: 1 },
  { id: 31, price: 60, count: 1 },
]
function MaoShopCartBTN(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [shoploaded, setShoploaded] = useState(false)
  // let newCart = []

  newCart = [...newCart]
  let BTNtype = props.type
  //   加入購物車
  // 創localStorage的Cart
  function getCartLocalStorage(val) {
    let count = props.count * 1
    val = props.addItems
    let addCount = { ...val, count: count }
    setLoaded(true)
    newCart = [...newCart, addCount]
    localStorage.setItem('cart', JSON.stringify(newCart))
    setMycart(newCart)
    setShoploaded(true)
  }

  useEffect(() => {
    setLoaded(false)
    let newMycartDisplay = []
    for (let i = 0; i < mycart.length; i++) {
      const index = newMycartDisplay.findIndex(val => val.id == mycart[i].id)
      if (index != -1) {
        newMycartDisplay[index].count += mycart[i].count
      } else {
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }
    newMycartDisplay = newMycartDisplay.filter(
      newMycartDisplay => newMycartDisplay.count > 0
    )
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  console.log(mycartDisplay) //顯示購物車使用
  let typeBox = []
  switch (BTNtype) {
    case 'addBTN':
      typeBox = (
        <button className="btn btn-dark" onClick={() => getCartLocalStorage()}>
          +
        </button>
      )
      break
    case 'minusBTN':
      typeBox = (
        <button className="btn btn-dark" onClick={() => getCartLocalStorage()}>
          -
        </button>
      )
      break
    case 'addIcon':
      typeBox = (
        <img
          class="chin-bag"
          src="./chin-img/shopping-bag.svg"
          alt="9999"
          onClick={() => getCartLocalStorage()}
        />
      )
      break
  }
  return <>{typeBox}</>
}
export default withRouter(MaoShopCartBTN)
