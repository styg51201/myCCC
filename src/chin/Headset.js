import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import { Col } from 'react-bootstrap'
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

function Headset(props) {
  const [englishnameHeadset, setEnglishnameHeadset] = useState(
    'HEADPHONE/SPEAKER'
  )
  const [commodity, setCommdity] = useState(false)
  console.log(props)
  console.log(props.data)

  const itemlist = props.data.map((val, ind) => {
    if (props.Headset.indexOf(val.name) > -1) {
      return <Commoditycomponents key={val.itemId} data={val} arrIndex={ind} />
    }
  })
  const allitemlist = props.data.map((val, ind) => {
    return <Commoditycomponents key={val.itemId} data={val} arrIndex={ind} />
  })
  const commodityItems = props.data.map((val, ind) => {
    if (props.Headset.indexOf(val.name) > -1) {
      return <Commoditycomponents2 key={val.itemId} data={val} arrIndex={ind} />
    }
  })
  const allcommodityItems = props.data.map((val, ind) => {
    return <Commoditycomponents2 key={val.itemId} data={val} arrIndex={ind} />
  })
  useEffect(() => {
    props.formServerItemsData('headset')
    props.ResetListItemName()
  }, [])

  if (!props.data) return <></>

  return (
    <>
      <main className="chin-main">
        <section className="chin-section">
          <Commoditylist data={props.data} />
          <div className="chin-commodity-title">
            <CompareProductSort
              data={props.data}
              englishname={englishnameHeadset}
              test={commodity}
              sendText={text => {
                setCommdity(text)
              }}
            />
            <div className="chin-commodity">
              {commodity
                ? props.Headset.length
                  ? commodityItems
                  : allcommodityItems
                : props.Headset.length
                ? itemlist
                : allitemlist}
            </div>
            {commodity ? (
              <div className="chin-article">
                <button>功能比較</button>
                <button>關閉</button>
              </div>
            ) : (
              ''
            )}
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
  return { data: store.getItems, Headset: store.getListitemName }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Headset))
