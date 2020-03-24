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

function Watch(props) {
  const [englishnameWatch, setEnglishnameWatch] = useState('WEARABLE DEVICES')
  const [commodity, setCommdity] = useState(false)
  const [comparegoods,setComparegoods]=useState('')
  const dispatch = useDispatch()
  console.log(comparegoods)
  
  const reset = useSelector(state => state.reset)
  const data = useSelector(state => state.getItems)
  const watch = useSelector(state => state.getListitemName)
  const itemlist = data.map((val, ind) => {
    if (watch.indexOf(val.name) > -1) {
      return <Commoditycomponents key={val.itemId} data={val} arrIndex={ind} />
    }
  })
  const allitemlist = data.map((val, ind) => {
    return <Commoditycomponents key={val.itemId} data={val} arrIndex={ind} />
  })
  const commodityItems = data.map((val, ind) => {
    if (watch.indexOf(val.name) > -1) {
      return <Commoditycomponents2 key={val.itemId} data={val} arrIndex={ind} itemId={comparegoods} sendId={itemId=>{
          setComparegoods(itemId)
      }}/>
    }
  })
  const allcommodityItems = data.map((val, ind) => {
    return <Commoditycomponents2 key={val.itemId} data={val} arrIndex={ind} itemId={comparegoods} sendId={itemId=>{
      setComparegoods(itemId)
  }}/>
  })
  const showItems = val => {
    return { type: 'SHOW_ITEMS', value: val }
  }
  async function formServerItemsData(val) {
    const request = new Request(`http://localhost:5500/items/${val}`, {
      method: 'GET',
      credentials: 'include',
    })
    const res = await fetch(request)
    const data = await res.json()
    dispatch(showItems(data))
  }
  const ResetListItemName = (val) => {
    const newList = []
    dispatch({ type: 'ITEMNAME_RESET', value: newList })
  }

  // const commodityItems =
  useEffect(() => {
    formServerItemsData('watch')
    if(reset)  ResetListItemName()
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
              englishname={englishnameWatch}
              test={commodity}
              sendText={text => {
                setCommdity(text)
              }}
            />
            <div className="chin-commodity">
              {commodity
                ? watch.length
                  ? commodityItems
                  : allcommodityItems
                : watch.length
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

export default withRouter(Watch)
