import React from 'react'
import '../css/MaoAD.scss'

function MaoAD(props) {
  console.log('MaoAd', props)
  return (
    <>
      <div class="Mao-buyerLine-box">
        <div className="Mao-buyerLine">
          <div className="Mao-line"></div>
          <div className="Mao-circle">1</div>
          <div className="Mao-circle">2</div>
          <div className="Mao-circle">3</div>
        </div>
        <div>
          <ul className="Mao-buyerLine-info">
            <li>加入購物車</li>
            <li>填寫寄送資料</li>
            <li>完成囉~!</li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default MaoAD
