import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router,Route,Link,Switch,withRouter} from 'react-router-dom'
import './chin-css/commidty.scss'
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
import {fromServerMbLikeData} from '../stacey/actions/couponAction'


function Commidty(props) {
  // console.log('back', props.data)

  const itemId = props.match.params.itemId ? props.match.params.itemId : ''

  //會員id
  const mb_id = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0

  let mbLike = false

  useEffect(() => {
    props.commidtyItemId(itemId)

    props.multiple_imagesItemId(itemId)
    if(mb_id) {
      props.fromServerMbLikeData(mb_id)
    }

  }, [itemId])
 
  if(props.mbLikeData && props.data[0]){
    if(props.mbLikeData.findIndex((v)=>v.itemId === props.data[0].itemId) > -1 ){
      mbLike = true
    }
  }


  return (
    <>
      <main>
        <div>
          <div className="chin-productdetails">
            <Bigitem data={props}/>
            <ProductDescription data={props.data} mbLike={mbLike}/>
          </div>
        </div>
        <DescriptionTechnique data={props.data}/>
        <UserComment/>
        <RelatedHistory data={props.data}/>
      </main>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getItemId ,
           multiple: store.getMultipleItemId,
           AddItem: store.AddItem,
           mbLikeData:store.memberLikeData,
        }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      commidtyItemId,multiple_imagesItemId,fromServerMbLikeData,
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Commidty)
)
