import React ,{useEffect ,useState}from 'react'
import SideFilter from './components/SideFilter'
import Bread from './components/Bread'
import { Route, withRouter, NavLink, Switch, matchPath } from 'react-router-dom'
import '../css/main.css'
import './css/GetCoupon.scss'
import CouponItem from './components/CouponItem'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {formServerCouponData,getCoupon} from '../actions/index'

function GetCoupon(props) {
  console.log(props)
  

  useEffect(()=>{
    props.formServerCouponData()
  },[])


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
            {props.data.map((val,ind)=>{
              return <CouponItem key={ind} data={props.data[ind]} />
            })}
           
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

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getCouponData }
}
//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    formServerCouponData,getCoupon
  },dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(GetCoupon))
