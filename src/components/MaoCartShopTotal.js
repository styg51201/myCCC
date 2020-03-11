import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
function MaoCartShopTotal() {
  useEffect(() => {
    let TotalBox = document.querySelector('.Total-box')
    document.addEventListener('scroll', e => {
      let FixScrollY = e.path[1].scrollY

      if (FixScrollY > 170) {
        TotalBox.classList.add('position-fixed')
        console.log(FixScrollY)
      } else {
        TotalBox.classList.remove('position-fixed')
      }
    })
  }, [])
  return (
    <>
      <div
        className="border bg-white Total-box"
        style={{
          height: '435px',
          width: '300px',
          marginLeft: '10px',
          padding: '10px',
          top: '90px',
          right: '317px',
        }}
      >
        <p style={{ borderBottom: '1px solid #ddd', padding: '10px 0px' }}>
          <b>TOTAL</b>
        </p>
        <div style={{ fontSize: '15px' }}>
          <div style={{ marginBottom: '16px' }}>
            <b>運費</b>
            <span>100</span>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <b>小計金額</b>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <b>活動折扣</b>
          </div>
          <label htmlFor="coupon">
            <div style={{ marginBottom: '16px' }}>
              <b>折價券輸入</b>
              <input
                type="text"
                placeholder="輸入折扣碼"
                id="coupon"
                style={{
                  width: '280px',
                  border: 'none',
                  borderBottom: '1px solid #eee',
                  outline: 'none',
                }}
              />
            </div>
          </label>
        </div>
        <p style={{ fontSize: '18px' }}>
          <b>總金額</b>
        </p>
        <Link
          to=""
          style={{
            width: '270px',
            height: '45px',
            border: '1px solid #000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '15px 0px',
            color: '#000',
          }}
        >
          繼續購物
        </Link>
        <Link
          to=""
          style={{
            width: '270px',
            height: '45px',
            border: '1px solid #000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '15px 0px',
            color: '#fff',
            background: '#000',
          }}
        >
          前往結帳
        </Link>
      </div>
    </>
  )
}

export default MaoCartShopTotal
