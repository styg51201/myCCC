import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router,Route,Link,Switch,withRouter} from 'react-router-dom'
import './chin-css/commidty.scss'
import '../css/main.scss'

//components
import ProductDescription from './components/ProductDescription'
import DescriptionTechnique from './components/DescriptionTechnique'
import UserComment from './components/UserComment'
import RelatedHistory from './components/RelatedHistory'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { commidtyItemId } from './actions/itemsActions'

function Commidty(props) {
  console.log('back', props.data)
  let imgUrl = props.data[0] ? `/chin-img/images/${props.data[0].itemImg}` : ''
  const itemId = props.match.params.itemId ? props.match.params.itemId : ''

  useEffect(() => {
    props.commidtyItemId(itemId)
    console.log('hello', props.data)
  }, [])

  return (
    <>
      <main>
        <div>
          <div className="chin-productdetails">
            <div>
              <div className="chin-bigitem">
                <img src={imgUrl} alt="" />
              </div>
              <div className="chin-smallitem">
                <img src="/chin-img/chevron-left.svg" alt="" />
                <img src="/chin-img/images/headset7.jpg" alt="" />
                <img src="/chin-img/images/headset8.jpg" alt="" />
                <img src="/chin-img/images/headset9.jpg" alt="" />
                <img src="/chin-img/images/headset10.jpg" alt="" />
                <img src="/chin-img/chevron-right.svg" alt="" />
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
        <RelatedHistory/>
      </main>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getItemId }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      commidtyItemId,
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Commidty)
)
