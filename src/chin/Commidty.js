import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router,Route,Link,Switch,withRouter} from 'react-router-dom'
import './chin-css/commidty.scss'
import './chin-css/commidtyRWD.scss'
import '../css/main.scss'

//components
import ProductDescription from './components/ProductDescription'
import DescriptionTechnique from './components/DescriptionTechnique'
import UserComment from './components/UserComment'
import RelatedHistory from './components/RelatedHistory'
import Bigitem from './components/Bigitem'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { commidtyItemId,multiple_imagesItemId } from './actions/itemsActions'

function Commidty(props) {
  console.log('back', props.data)
  console.log('back2', props)
  const itemId = props.match.params.itemId ? props.match.params.itemId : ''

  useEffect(() => {
    props.commidtyItemId(itemId)
    props.multiple_imagesItemId(itemId)
    console.log('hello', props.data)
  }, [])
  return (
    <>
      <main>
        <div>
          <div className="chin-productdetails">
            <Bigitem data={props}/>
            <ProductDescription data={props.data}/>
          </div>
        </div>
        <DescriptionTechnique data={props.data}/>
        <UserComment/>
        <RelatedHistory/>
      </main>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getItemId ,
           multiple: store.getMultipleItemId
        }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      commidtyItemId,multiple_imagesItemId
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Commidty)
)
