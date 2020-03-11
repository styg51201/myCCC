import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
const dataItem = [
  { id: 6, price: 10 },
  { id: 2, price: 20 },
  { id: 90, price: 30 },
  { id: 4, price: 40 },
  { id: 5, price: 50 },
]

function MaoShopCartBTN(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [loaded, setLoaded] = useState(false)
  let newCart = []
  let Num = props.count //確認數量是 + || -

  //   加入購物車
  // 創localStorage的Cart
  function getCartLocalStorage(val) {
    // console.log(props.addItems)
    // console.log(props.count * 1)
    let count = props.count * 1
    val = props.addItems
    let addCount = { ...val, count: count }
    console.log(addCount)
    setLoaded(true)
    const LocalStorageCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []

    newCart = [...LocalStorageCart, addCount]
    // newCart = newCart.filter(newCart => newCart.count > 0)
    // console.log('result', result)
    localStorage.setItem('cart', JSON.stringify(newCart))
    setMycart(newCart)
  }

  useEffect(() => {
    setLoaded(false)
  }, [loaded])
  useEffect(() => {
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
    localStorage.setItem('cart', JSON.stringify(newMycartDisplay))
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  return (
    <>
      <button className="btn btn-danger" onClick={() => getCartLocalStorage()}>
        {Num == 1 ? '+' : '-'}
      </button>
    </>
  )
}
export default withRouter(MaoShopCartBTN)
