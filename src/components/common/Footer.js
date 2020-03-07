import React from 'react'
import logo from '../../logo.svg'
import '../../css/header-footer/css/heard-footer.css'

function Footer() {
  return (
    <>
      <footer>
        <div className="chin-everything-triplec">
          <img src={logo} className="header-logo" alt="logo" />
          <div className="chin-everything">
            <div className="chin-customerservice">
              <div className="chin-triplec">
                <span>
                  <a>TRIPLEC</a>
                </span>
                <ul>
                  <li>
                    <a>關於我們</a>
                  </li>
                  <li>
                    <a>申請廠商</a>
                  </li>
                  <li>
                    <a>隱私權政策</a>
                  </li>
                </ul>
              </div>
              <div className="chin-triplec">
                <span>服務</span>
                <ul>
                  <li>
                    <a>聯絡客服</a>
                  </li>
                  <li>
                    <a>Q&A</a>
                  </li>
                  <li>
                    <a>購物須知</a>
                  </li>
                </ul>
              </div>
              <div className="chin-triplec">
                <span>商品</span>
                <ul>
                  <li>
                    <a>運動手錶</a>
                  </li>
                  <li>
                    <a>手環</a>
                  </li>
                  <li>
                    <a>有線耳機</a>
                  </li>
                  <li>
                    <a>藍芽耳機</a>
                  </li>
                  <li>
                    <a>藍芽喇吧</a>
                  </li>
                  <li>
                    <a>運動攝影機</a>
                  </li>
                  <li>
                    <a>周邊</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="chin-followus">
                <span>追蹤我們</span>
                <ul>
                  <li>
                    <a>Facebook</a>
                  </li>
                  <li>
                    <a>Instagram</a>
                  </li>
                  <li>
                    <a>Line</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
