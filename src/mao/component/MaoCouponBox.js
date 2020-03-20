import React, { useState, useEffect } from 'react'
import '../css/mao.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fromServerCouponData,
  showCoupon,
} from '../../stacey/actions/couponAction'
import $ from 'jquery'
import { props } from 'bluebird'

function MaoCouponBox(props) {
  console.log('BBBBB', props.getCouponData)

  useEffect(() => {
    fromServerCouponData()
  }, [])

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
      </div>
    </>
  )

  return (
    <>
      <div>{CouponBox}</div>
    </>
  )
}

const mapStateToProps = store => {
  return {
    MyFavorite: store.MyFavorite,
    getCouponData: store.getCouponData,
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fromServerCouponData,
      showCoupon,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MaoCouponBox)
