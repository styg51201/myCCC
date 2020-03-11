import React from 'react'
import SideFilter from './components/SideFilter'
import Bread from './components/Bread'
import { Route, withRouter, NavLink, Switch, matchPath } from 'react-router-dom'
import '../css/main.css'
import './css/GetCoupon.css'

function GetCoupon(props) {
  console.log(props.match)
  const url = props.match.url
  const path = props.match.path
  console.log(url, path)

  console.log('123456') 
  console.log('67891011')

  return (
    <>
      <Bread />
      <div className="row wrap">
        {/* <!-- 側邊篩選欄 --> */}
        <SideFilter />
        {/* <!-- 右邊coupon --> */}
        <div className="col col-sm-9">
          <div className="row">
            {/* <!-- 領取 --> */}
            <div className="col col-sm-6 coupon">
              <div className="item">
                <div className="wrapForImg">
                  <img src="img/Swatch.jpg" alt="" />
                  <div className="alreadyGet">已領取</div>
                </div>
                <div className="text">
                  <ul>
                    <h3>85折</h3>
                    <li>swatch品牌券</li>
                    <li>穿戴式裝置指定商品8折</li>
                    <li>有效至 2020/02/15</li>
                  </ul>
                  <div className="state">
                    <div></div>
                    <p>75% 已領取</p>
                  </div>
                </div>
                <div className="button">
                  <button>
                    <span>領取</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-sm-6 coupon">
              <div className="item">
                <div className="wrapForImg">
                  <img src="img/Swatch.jpg" alt="" />
                  <div className="alreadyGet">已領取</div>
                </div>
                <div className="text">
                  <ul>
                    <h3>85折</h3>
                    <li>swatch品牌券</li>
                    <li>穿戴式裝置指定商品8折</li>
                    <li>有效至 2020/02/15</li>
                  </ul>
                  <div className="state">
                    <div></div>
                    <p>75% 已領取</p>
                  </div>
                </div>
                <div className="button">
                  <button>
                    <span>領取</span>
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- 已領取 --> */}
            <div className="col col-sm-6 coupon geted">
              <div className="item">
                <div className="wrapForImg">
                  <img src="img/Swatch.jpg" alt="" />
                  <div className="alreadyGet">已領取</div>
                </div>
                <div className="text">
                  <ul>
                    <h3>85折</h3>
                    <li>swatch品牌券</li>
                    <li>穿戴式裝置指定商品8折</li>
                    <li>有效至 2020/02/15</li>
                  </ul>
                  <div className="state">
                    <div></div>
                    <p>75% 已領取</p>
                  </div>
                </div>
                <div className="button">
                  <button>
                    <span>領取</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-sm-6 coupon geted">
              <div className="item">
                <div className="wrapForImg">
                  <img src="img/Swatch.jpg" alt="" />
                  <div className="alreadyGet">已領取</div>
                </div>
                <div className="text">
                  <ul>
                    <h3>85折</h3>
                    <li>swatch品牌券</li>
                    <li>穿戴式裝置指定商品8折</li>
                    <li>有效至 2020/02/15</li>
                  </ul>
                  <div className="state">
                    <div></div>
                    <p>75% 已領取</p>
                  </div>
                </div>
                <div className="button">
                  <button>
                    <span>領取</span>
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- 發放結束 --> */}
            <div className="col col-sm-6 coupon end">
              <div className="item">
                <div className="wrapForImg">
                  <img src="img/Swatch.jpg" alt="" />
                  <div className="alreadyGet">已領取</div>
                </div>
                <div className="text">
                  <ul>
                    <h3>85折</h3>
                    <li>swatch品牌券</li>
                    <li>穿戴式裝置指定商品8折</li>
                    <li>有效至 2020/02/15</li>
                  </ul>
                  <div className="state">
                    <div></div>
                    <p>75% 已領取</p>
                  </div>
                </div>
                <div className="button">
                  <button>
                    <span>領取</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-sm-6 coupon end">
              <div className="item">
                <div className="wrapForImg">
                  <img src="img/Swatch.jpg" alt="" />
                  <div className="alreadyGet">已領取</div>
                </div>
                <div className="text">
                  <ul>
                    <h3>85折</h3>
                    <li>swatch品牌券</li>
                    <li>穿戴式裝置指定商品8折</li>
                    <li>有效至 2020/02/15</li>
                  </ul>
                  <div className="state">
                    <div></div>
                    <p>75% 已領取</p>
                  </div>
                </div>
                <div className="button">
                  {/* <!-- button 停用 --> */}
                  <button disabled="disabled">
                    <span>領取</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(GetCoupon)
