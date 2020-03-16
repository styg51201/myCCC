import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Link, Switch ,withRouter} from 'react-router-dom'
import './chin-css/commidty.scss'
import '../css/main.scss'

//components
import ProductDescription from './components/ProductDescription'
import DescriptionTechnique from './components/DescriptionTechnique'
import UserComment from './components/UserComment'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { commidtyItemId } from './actions/itemsActions'

function Commidty(props){
  // let student = null
  console.log('789',props)
  console.log(props.data)
  console.log(props)
  console.log(props.match.params.itemId)

  const itemId = props.match.params.itemId

  useEffect(()=>{
    props.commidtyItemId(itemId)
  },[])

  return(
    <>
    <main>
      <div>
        <div className="chin-productdetails">
          <div>
            <div className="chin-bigitem">
              <img src={`./chin-img/images/${props.data.itemImg}`} alt="" />
            </div>
            <div className="chin-smallitem">
              <img src="./chin-img/chevron-left.svg" alt="" />
              <img src="./chin-img/images/headset7.jpg" alt="" />
              <img src="./chin-img/images/headset8.jpg" alt="" />
              <img src="./chin-img/images/headset9.jpg" alt="" />
              <img src="./chin-img/images/headset10.jpg" alt="" />
              <img src="./chin-img/chevron-right.svg" alt="" />
            </div>
            <div className="chin-rwd-circle-circle">
                <span className="chin-rwd-circle"></span>
                <span className="chin-rwd-circle"></span>
                <span className="chin-rwd-circle"></span>
                <span className="chin-rwd-circle"></span>
            </div>
          </div>
          <ProductDescription/>
        </div>
      </div>
     <DescriptionTechnique/>
      <UserComment/>
      <div className="chin-historicalrecord">
        <a href="">相關商品</a>
        <a href="">歷史紀錄</a>
      </div>
      <div className="chin-relatedproducts">
        <button>
          <img src="./chin-img/chevron-left.svg" alt="" />
        </button>
        <div className="chin-commodity2">
          <div className="chin-commodity-item2">
            <ul className="chin-star-heart-bag2">
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li className="chin-heart-bag2">
                <img className="chin-heart2" src="./chin-img/heart.svg" alt="" />
                <img className="chin-bag2" src="./chin-img/shopping-bag.svg" alt="" />
              </li>
            </ul>
            <img
              className="chin-watch2"
              src="./chin-img/images/watch.jpg"
              alt=""
            />
            <h6>Apple</h6>
            <p>Apple Watch Nike</p>
            <h5>NT$6,400</h5>
          </div>
        </div>
        <div className="chin-commodity2">
          <div className="chin-commodity-item2">
            <ul className="chin-star-heart-bag2">
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li className="chin-heart-bag2">
                <img className="chin-heart2" src="./chin-img/heart.svg" alt="" />
                <img className="chin-bag2" src="./chin-img/shopping-bag.svg" alt="" />
              </li>
            </ul>
            <img
              className="chin-watch2"
              src="./chin-img/images/watch.jpg"
              alt=""
            />
            <h6>Apple</h6>
            <p>Apple Watch Nike</p>
            <h5>NT$6,400</h5>
          </div>
        </div>
        <div className="chin-commodity2">
          <div className="chin-commodity-item2">
            <ul className="chin-star-heart-bag2">
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li><img className="chin-star2" src="./chin-img/star.svg" alt="" /></li>
              <li className="chin-heart-bag2">
                <img className="chin-heart2" src="./chin-img/heart.svg" alt="" />
                <img className="chin-bag2" src="./chin-img/shopping-bag.svg" alt="" />
              </li>
            </ul>
            <img
              className="chin-watch2"
              src="./chin-img/images/watch.jpg"
              alt=""
            />
            <h6>Apple</h6>
            <p>Apple Watch Nike</p>
            <h5>NT$6,400</h5>
          </div>
        </div>
        <button>
          <img src="./chin-img/chevron-right.svg" alt="" />
        </button>
      </div>
    </main>
    </>
    )
  }

  // 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getItemId}
}

//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    commidtyItemId
  },dispatch)
}

export default withRouter (connect(mapStateToProps,mapDispatchToProps)(Commidty))
