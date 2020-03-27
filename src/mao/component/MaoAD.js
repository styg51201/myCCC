import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'

function MaoAD(props) {
  const [routeName, setRouteName] = useState('')
  useEffect(() => {
    setRouteName(props.match.path)
  }, [])
  useEffect(() => {
    console.log(routeName)
  }, [routeName])
  return (
    <>
      <div class="Mao-buyerLine-box">
        <div className="Mao-buyerLine">
          <div className="Mao-line"></div>
          <div
            className={`Mao-circle ${
              routeName == '/member/ShopCartList'
                ? 'Mao-line-color-blue'
                : 'Mao-line-color-grey'
            }`}
          >
            1
          </div>
          <div
            className={`Mao-circle ${
              routeName == '/OrderInfo'
                ? 'Mao-line-color-blue'
                : 'Mao-line-color-grey'
            }`}
          >
            2
          </div>
          <div
            className={`Mao-circle ${
              routeName == '/Orderbill'
                ? 'Mao-line-color-blue'
                : 'Mao-line-color-grey'
            }`}
          >
            3
          </div>
        </div>
        <div>
          <ul className="Mao-buyerLine-info">
            <li>加入購物車</li>
            <li>填寫寄送資料</li>
            <li>送出訂單</li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default withRouter(MaoAD)
