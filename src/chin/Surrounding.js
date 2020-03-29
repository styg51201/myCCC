import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
//scss
import './chin-css/items.scss'
import '../css/main.scss'
//components
import Commoditycomponents2 from './components/Commoditycomponents2'
import Commoditycomponents from './components/Commoditycomponents'
import Commoditylist from './components/Commoditylist'
import CompareProductSort from './components/CompareProductSort'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { formServerItemsData, ResetListItemName } from './actions/itemsActions'

function Surrounding(props) {
  const [englishnameSurrounding, setEnglishnameSurrounding] = useState(
    'SURROUNDING'
  )
  const [commodity, setCommdity] = useState(false)
  // document.documentElement.scrollTop = document.body.scrollTop =0;
  const itemlist = props.data.map((val, ind) => {
    if (props.surrounding.indexOf(val.name) > -1) {
      return <Commoditycomponents key={val.itemId} data={val} arrIndex={ind} />
    }
  })
  const allitemlist = props.data.map((val, ind) => {
    return <Commoditycomponents key={val.itemId} data={val} arrIndex={ind} />
  })
  const commodityItems = props.data.map((val, ind) => {
    if (props.surrounding.indexOf(val.name) > -1) {
      return <Commoditycomponents2 key={val.itemId} data={val} arrIndex={ind} />
    }
  })
  const allcommodityItems = props.data.map((val, ind) => {
    return <Commoditycomponents2 key={val.itemId} data={val} arrIndex={ind} />
  })
  useEffect(() => {
    props.formServerItemsData('surrounding')
    return ()=> props.ResetListItemName()
  }, [])

  return (
    <>
      <main className="chin-main">
        <section className="chin-section">
          <Commoditylist data={props.data} />
          <div className="chin-commodity-title">
            <CompareProductSort
              data={props.data}
              englishname={englishnameSurrounding}
              test={commodity}
              sendText={text => {
                setCommdity(text)
              }}
            />
            <div className="chin-commodity">
              {commodity
                ? props.surrounding.length
                  ? commodityItems
                  : allcommodityItems
                :  props.surrounding.length
                ? itemlist
                : allitemlist}
            </div>
            <div className="circle">
              <div className="circle1">
                <div className="circle3"></div>
                <div className="circle3"></div>
                <div className="circle3"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getItems, 
          surrounding: store.getListitemName,
          rest:store.rest}
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      formServerItemsData,
      ResetListItemName,
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Surrounding)
)
