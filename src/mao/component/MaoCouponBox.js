import React from 'react'
import '../css/mao.scss'
import $ from 'jquery'

function MaoCouponBox(props) {


  function closeBox() {
    $('.Mao-couponBox').css({ opacity: 0 })
  }

  const CouponBox = (
    <>
      <div className="Mao-couponBox">
        <div
          onClick={() => {
            closeBox()
          }}
          className="Mao-coupon-exit"
        >
          X
        </div>
        <div className="d-flex flex-column mt-4">
        <button className="m-3" onClick={()=>{console.log('8折')}}>8折</button>
        <button className="m-3" onClick={()=>{console.log('-100')}}>折$100</button>
        <button className="m-3" onClick={()=>{console.log('-500')}}>折$500</button>
        </div>
      </div>
    </>
  )

  return (
    <>
      <div>{CouponBox}</div>
    </>
  )
}


export default MaoCouponBox
