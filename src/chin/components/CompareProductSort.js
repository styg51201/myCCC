import React, { useState, useEffect } from 'react'

//classnames
import classNames from 'classnames'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {
  PriceHightToLow,
  PriceLowToHight,
  NewTimeSort,
  HotItemsSort,
  AllItemsSort,
} from '../actions/itemsActions'

function CompareProductSort(props) {
  const [featuredproducts, setFeaturedproducts] = useState(false)
  const [sortname, setSortname] = useState('排序方式')
  const SortClassName = classNames('chin-sort-featuredproducts', {
    active: featuredproducts,
  })

    const comparegoods =()=>{
        console.log('123')
    }

    return(
      <>
    <div className="chin-title">
        <div className="chin-title-text">
            <span>{props.englishname}</span>
            <span>{props.data[0] ? props.data[0].itemCategoryId : ''}</span>
        </div>
        <div className="chin-rwd-sort-features">
            <button className="chin-rwd-features">功能</button>
            <button className="chin-rwd-sort">排序方式</button>
        </div>
        <div className="chin-comparegoods-sort">
            <button className="chin-comparegoods" onClick={comparegoods}>
                <span>比較商品</span>
                <img src="./chin-img/align-justify.svg" alt=""/>
            </button>
            <div className={SortClassName}>
                <label className="chin-sort" onClick={()=>{setFeaturedproducts(!featuredproducts)}}>
                        <span>{sortname}</span>
                        <img src="./chin-img/chevron-down-black.svg" alt=""/>
                </label>
                <ul className="chin-featuredproducts">
                    <li onClick={()=>{
                                      setFeaturedproducts(!featuredproducts)
                                      setSortname("排序方式")
                                      props.AllItemsSort(props.data)}}>全部商品</li>
                    <li onClick={()=>{
                                      setFeaturedproducts(!featuredproducts)
                                      setSortname("熱銷商品")
                                      props.HotItemsSort(props.data)}}>熱銷商品</li>
                    <li onClick={()=>{
                                      setFeaturedproducts(!featuredproducts)
                                      setSortname("最新商品")
                                     props.NewTimeSort(props.data)}}>最新商品</li>
                    <li onClick={()=>{
                                      setFeaturedproducts(!featuredproducts)
                                      setSortname("價格:從高到低")
                                     props.PriceHightToLow(props.data)}}>價格:從高到低</li>
                    <li onClick={()=>{
                                      setFeaturedproducts(!featuredproducts)
                                      setSortname("價格:從低到高")
                                     props.PriceLowToHight(props.data)}}>價格:從低到高</li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.getItems }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      PriceHightToLow,
      PriceLowToHight,
      NewTimeSort,
      HotItemsSort,
      AllItemsSort,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CompareProductSort)
