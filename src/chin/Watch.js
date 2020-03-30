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
import { formServerItemsData, ResetListItemName,ResetListItemNameCom,ItemscompareNo} from './actions/itemsActions'

import {fromServerMbLikeData} from '../stacey/actions/couponAction'


function Watch(props) {
  const [englishnameWatch, setEnglishnameWatch] = useState('WEARABLE DEVICES')
  const [delitems,setDelitems] = useState()
  const [commodity, setCommdity] = useState(false)
  const [commodityPrice, setCommdityPrice] = useState(false)

  //會員id
  const mb_id = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0




  useEffect(() => {
    props.formServerItemsData('watch')
    if(mb_id) {
      props.fromServerMbLikeData(mb_id)
    }
    return ()=> props.ResetListItemName()
  }, [])

  const itemlist = props.data.map((val, ind) => {
    //判斷是否我的最愛
    let mbLike = false
    if(props.mbLikeData.findIndex((v)=>v.itemId === val.itemId) > -1 ){
      mbLike = true
    }
    if (props.watch.indexOf(val.name) > -1) {
      return <Commoditycomponents key={val.itemId} data={val} arrIndex={ind} mbLike={mbLike} />
    }
  })

  const allitemlist = props.data.map((val, ind) => {
    //判斷是否我的最愛
    let mbLike = false
    if(props.mbLikeData.findIndex((v)=>v.itemId === val.itemId) > -1 ){
      mbLike = true
    }
    return <Commoditycomponents key={val.itemId} data={val} arrIndex={ind}  mbLike={mbLike}/>

  })


  const commodityItems = props.data.map((val, ind) => {
    if (props.watch.indexOf(val.name) > -1) {
      return <Commoditycomponents2 key={val.itemId} data={val} arrIndex={ind} delitems={delitems} sendx={v=>{setDelitems(v)}}/>
    }
  })
  const allcommodityItems = props.data.map((val, ind) => {
    return <Commoditycomponents2 key={val.itemId} data={val} arrIndex={ind} delitems={delitems} sendx={v=>{setDelitems(v)}}/>
  })
  const ItemPrice = props.data.map((val,ind)=>{
    if(props.ItemPrice.itemPrice < val.itemPrice || props.ItemPrice2.itemPrice2 > val.itemPrice){
        console.log(val)
      return <Commoditycomponents key={val.itemId} data={val} arrIndex={ind} />
    }
  })
  


  return (
    <>
      <main className="chin-main">
        <section className="chin-section">
          <Commoditylist data={props.data} price={commodityPrice}  sendprice={v => {
                setCommdityPrice(v)
              }}/>
          <div className="chin-commodity-title">
            <CompareProductSort
              data={props.data}
              englishname={englishnameWatch}
              test={commodity}
              sendText={text => {
                setCommdity(text)
              }}
            />
            <div className="chin-commodity">
              {commodityPrice?ItemPrice:commodity
                  ? 
                  props.watch.length
                  ? commodityItems
                  : allcommodityItems
                  : 
                  props.watch.length
                  ? itemlist
                  : allitemlist}
              {/* {allitemlist} */}
            </div>
            {commodity ? (
              <div className="chin-article">
                <div className="chin-itemcompares">
                {props.compare.map((val,ind)=>{
                  return(
                      <div className="chin-compares">
                        <img src="./chin-img/x.svg" className="chin-x" onClick={()=>{
                                                                                props.ItemscompareNo(false,val,props.compare)
                                                                                setDelitems(val.itemId)
                                                                                }}/>
                        <div><img src={`/chin-img/images/${val.itemName}/${val.itemImg}`} className="chin-watch3"/></div>
                        <span>{val.itemName}</span>
                      </div>
                      )
                })}
                </div>
                <div className="chin-button-compares">{props.compare.length>1?
                  <Link to="/ComparepagesWatch" className="chin-com-a"><button>功能比較</button></Link>:
                    <Link to="/ComparepagesWatch" className="chin-com-a"><button disabled='true' style={{cursor:"no-drop"}}>功能比較</button></Link>}
                    <button onClick={()=>{setCommdity(!commodity)
                                        props.ResetListItemNameCom()}}>關閉</button>
                </div>
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
  return { data: store.getItems, 
           watch: store.getListitemName,
           compare:store.getItemscompare,
           ItemPrice: store.getListitemPrice,
          ItemPrice2:store.getListitemPrice2,
          mbLikeData:store.memberLikeData,
          rest:store.rest}
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      formServerItemsData,
      ResetListItemName,
      ResetListItemNameCom,
      ItemscompareNo,
      fromServerMbLikeData,
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Watch)
)
