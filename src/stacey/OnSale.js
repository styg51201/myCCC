import React ,{useEffect ,useState}from 'react'
import { BrowserRouter as Router, Route, Link, Switch ,withRouter } from 'react-router-dom'
import '../css/main.css'
import './css/onSale.scss'

//components
import OnSaleFilter from './components/OnSaleFilter'
import Countdown from './components/Countdown'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {fromServerCouponData} from './actions/couponAction'

//icon
import { IconContext } from 'react-icons'
import {
  FiChevronDown
} from 'react-icons/fi'



function OnSale (props){

    return (
        <>
        <div className="row wrap">
            <OnSaleFilter/>
            <div className="col col-sm-9">
          <div className="sty-onSaleTitle">
            <h3>限時特賣商品</h3>
            <hr />
          </div>
          <div className="row sty-dayButton">
            <div className="col-4 active"><p>今日</p></div>
            <div className="col-4"><p>明日</p></div>
            <div className="col-4"><p>後日</p></div>
          </div>
          <Countdown />
          <div className="row">
            {/* <!-- 商品 --> */}
            <div className="col-4">
              <div className="chin-commodity-item">
                <ul className="chin-star-heart-bag">
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li className="chin-heart-bag">
                    <img className="chin-heart" src="./chin-img/heart.svg" alt="" />
                    <img
                      className="chin-bag"
                      src="./chin-img/shopping-bag.svg"
                      alt=""
                    />
                  </li>
                </ul>
                <img
                  className="chin-watch"
                  src="./chin-img/images/actioncamera.jpg"
                  alt=""
                />
                <h6>1111</h6>
                <p>5555</p>
                <h5>NT$7777</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="chin-commodity-item">
                <ul className="chin-star-heart-bag">
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li className="chin-heart-bag">
                    <img className="chin-heart" src="./chin-img/heart.svg" alt="" />
                    <img
                      className="chin-bag"
                      src="./chin-img/shopping-bag.svg"
                      alt=""
                    />
                  </li>
                </ul>
                <img
                  className="chin-watch"
                  src="./chin-img/images/actioncamera.jpg"
                  alt=""
                />
                <h6>1111</h6>
                <p>5555</p>
                <h5>NT$7777</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="chin-commodity-item">
                <ul className="chin-star-heart-bag">
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li>
                    <img className="chin-star" src="./chin-img/star.svg" alt="" />
                  </li>
                  <li className="chin-heart-bag">
                    <img className="chin-heart" src="./chin-img/heart.svg" alt="" />
                    <img
                      className="chin-bag"
                      src="./chin-img/shopping-bag.svg"
                      alt=""
                    />
                  </li>
                </ul>
                <img
                  className="chin-watch"
                  src="./chin-img/images/actioncamera.jpg"
                  alt=""
                />
                <h6>1111</h6>
                <p>5555</p>
                <h5>NT$7777</h5>
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
    return { data: store.getCouponData ,
              vendor: store.filterCoupon,}
  }
  
  //action
  const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
      fromServerCouponData
    },dispatch)
  }
  
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(OnSale))

