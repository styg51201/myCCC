import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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

function Headset(props) {
  const dispatch = useDispatch()
  const reset = useSelector(state => state.reset)

  const data = useSelector(state => state.getItems)
  const Headset = useSelector(state => state.getListitemName)
  const [englishnameHeadset, setEnglishnameHeadset] = useState(
    'HEADPHONE/SPEAKER'
  )
  const [commodity, setCommdity] = useState(false)
  console.log(props)
  console.log(data)

  const itemlist = data.map((val, ind) => {
    if (Headset.indexOf(val.name) > -1) {
      return <Commoditycomponents key={val.itemId} data={val} arrIndex={ind} />
    }
  })
  const allitemlist = data.map((val, ind) => {
    return <Commoditycomponents key={val.itemId} data={val} arrIndex={ind} />
  })
  const commodityItems = data.map((val, ind) => {
    if (Headset.indexOf(val.name) > -1) {
      return <Commoditycomponents2 key={val.itemId} data={val} arrIndex={ind} />
    }
  })
  const allcommodityItems = data.map((val, ind) => {
    return <Commoditycomponents2 key={val.itemId} data={val} arrIndex={ind} />
  })

  const showItems = val => {
    return { type: 'SHOW_ITEMS', value: val }
  }

  async function formServerItemsData2(val) {
    const request = new Request(`http://localhost:5500/items/${val}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(request)
    const data = await res.json()

    console.log('ddddddd', data)
    dispatch(showItems(data))
  }

  const ListItemName = (obj, val) => {
    if (obj.isChecked) {
      dispatch({ type: 'ITEMNAME_VALUE', value: [obj.name, ...val] })
    } else {
      let ind = val.indexOf(obj.name)
      //有空可以解bug => 只用splice失靈??? 一定要splice+map
      val.splice(ind, 1)
      let newList = val.map((val, ind) => {
        if (val !== obj.name) {
          return val
        }
      })
      dispatch({ type: 'ITEMNAME_VALUE', value: newList })
    }
  }

  const ResetListItemName = (obj, val) => {
    const newList = []
    dispatch({ type: 'ITEMNAME_RESET', value: newList })
  }

  useEffect(() => {
    formServerItemsData2('headset')
    if(reset) ResetListItemName()
  }, [])

  if (!data) return <></>

  return (
    <>
      <main className="chin-main">
        <section className="chin-section">
          <Commoditylist data={data} />
          <div className="chin-commodity-title">
            <CompareProductSort
              data={data}
              englishname={englishnameHeadset}
              test={commodity}
              sendText={text => {
                setCommdity(text)
              }}
            />
            <div className="chin-commodity">
              {commodity
                ? Headset.length
                  ? commodityItems
                  : allcommodityItems
                : Headset.length
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

export default withRouter(Headset)
