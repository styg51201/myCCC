import React, { useEffect } from 'react'
import '../css/mao.scss'
import $ from 'jquery'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { fromServerMemberCouponData } from '../../stacey/actions/couponAction'

function MaoCouponBox(props) {
  useEffect(() => {
    props.fromServerMemberCouponData()
  }, [])

  function closeBox() {
    $('.Mao-couponBox').css({ opacity: 0 })
  }
  // console.log(props.couponData)

  // const coupon = props.couponData.map((val, ind) => {
  //   //設定優惠字樣
  //   //目標
  //   let object = ''
  //   switch (val.cpr_object) {
  //     case 0:
  //       object = '全部商品'
  //       break
  //     case 1:
  //       object = '穿戴式裝置分類'
  //       break
  //     case 2:
  //       object = '耳機/喇叭分類'
  //       break
  //     case 3:
  //       object = '運動攝影機分類'
  //       break
  //     case 4:
  //       object = '周邊商品分類'
  //       break
  //     case 5:
  //       object = '指定商品'
  //       break
  //   }
  //   //條件
  //   let rule = ''
  //   switch (val.cpr_rule) {
  //     case 0:
  //       rule = '一律'
  //       break
  //     case 1:
  //       rule = `滿${val.cpr_ruleNum}件`
  //       break
  //     case 2:
  //       rule = `滿${val.cpr_ruleNum}元`
  //       break
  //   }
  //   //金額
  //   let discount = ''
  //   switch (val.cpr_discount) {
  //     case 0:
  //       discount = `打${val.cpr_discountNum}折`
  //       break
  //     case 1:
  //       discount = `折扣${val.cpr_discountNum}元`
  //       break
  //   }

  //   return (
  //     <li>
        
  //       <button className="my-3" onClick={()=>{
  //         {}
  //       }}>[ {val.cp_vendor} ] - {object}
  //       {rule}
  //       {discount}</button>
  //     </li>
  //   )
  // })

  // const CouponBox = (
  //   <>
  //     <div className="Mao-couponBox">
  //       <ul>{coupon}</ul>
  //     </div>
  //   </>
  // )

  return (
    <>
      <div>
        <div className="Mao-coupon-exit" onClick={()=>{closeBox()}}>x</div>
        {/* {CouponBox} */}
      </div>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { couponData: store.memberCouponFilterData }
}
//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fromServerMemberCouponData,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MaoCouponBox)
