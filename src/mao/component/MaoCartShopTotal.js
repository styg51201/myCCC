import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/mao.css'
function MaoCartShopTotal() {
  useEffect(() => {
    let TotalBox = document.querySelector('.Mao-total-box')
    document.addEventListener('scroll', e => {
      let FixScrollY = e.path[1].scrollY

      // if (FixScrollY > 170) {
      //   TotalBox.classList.add('position-fixed')
      //   // console.log(FixScrollY)
      // } else {
      //   TotalBox.classList.remove('position-fixed')
      // }
    })
  }, [])
  return (
    <>
      <div className="border bg-white Mao-total-box">
        <p className="Mao-total-box-title">
          <b>TOTAL</b>
        </p>
        <div className="Mao-total-box-title-info">
          <div>
            <b>運費</b>
            <span>100</span>
          </div>
          <div>
            <b>小計金額</b>
          </div>
          <div>
            <b>活動折扣</b>
          </div>
          <label htmlFor="coupon" className="Mao-total-box-title-coupon">
            <div>
              <b>折價券輸入</b>
              <input type="text" placeholder="輸入折扣碼" id="coupon" />
            </div>
          </label>
        </div>
        <p style={{ fontSize: '18px' }}>
          <b>總金額</b>
        </p>
        <Link
          className="d-flex justify-content-center align-items-center Mao-total-box-btn text-dark"
          to=""
        >
          繼續購物
        </Link>
        <Link
          className="d-flex justify-content-center align-items-center text-white bg-dark Mao-total-box-btn"
          to="/OrderInfo"
        >
          前往結帳
        </Link>
      </div>
    </>
  )
}

export default MaoCartShopTotal
