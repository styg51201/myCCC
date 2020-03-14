import React,{useState,useEffect} from 'react'
import { Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch ,withRouter} from 'react-router-dom'
import './chin-css/items.scss'
import '../css/main.scss'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {formServerItemsData } from '../actions/index'

function Watch(props){

    console.log(props)
    console.log(props.data)
    useEffect(()=>{
        props.formServerItemsData("watch")
      },[])

    if(!props.data) return <></>


    const items= (
        <div className="chin-commodity">
                    {props.data.map((val,ind)=>{
                        return(<div className="chin-commodity" key={ind}>
                                <div className="chin-commodity-item">
                                    <ul className="chin-star-heart-bag">
                                        <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                                        <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                                        <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                                        <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                                        <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                                        <li className="chin-heart-bag">
                                            <img className="chin-heart" src="./chin-img/heart.svg" alt=""/>
                                            <img className="chin-bag" src="./chin-img/shopping-bag.svg" alt=""/>
                                        </li>
                                    </ul>
                                    <img className="chin-watch" src={`./chin-img/images/${val.itemImg}`} alt=""/>
                                    <h6>{val.name}</h6>
                                    <p>{val.itemName}</p>
                                    <h5>NT${val.itemPrice}</h5>
                                </div>
                            </div>)
                        })}
                </div>
    )

    return(
        <>
    <main className="chin-main">
        <section className="chin-section">
            <div className="chin-commoditylist">
                <div className="chin-price">
                    <span>價格</span>
                    <img src="./chin-img/chevron-up.svg" alt=""/>
                </div>
                <div className="chin-price">
                    <span>品牌</span>
                    <img src="./chin-img/chevron-up.svg" alt=""/>
                </div>
                <div className="chin-price">
                    <span>功能</span>
                    <img src="./chin-img/chevron-up.svg" alt=""/>
                </div>
                <div className="chin-price">
                    <span>優惠</span>
                    <img src="./chin-img/chevron-up.svg" alt=""/>
                </div>
            </div>
            <div className="chin-commodity-title">
                <div className="chin-title">
                    <div className="chin-title-text">
                        <span>WEARABLE DEVICES</span>
                        <span>穿戴式裝置</span>
                    </div>
                    <div className="chin-comparegoods-sort">
                        <button className="chin-comparegoods">
                            <span>比較商品</span>
                            <img src="./chin-img/align-justify.svg" alt=""/>
                        </button>
                        <button className="chin-sort">
                            <span>排序</span>
                            <img src="./chin-img/chevron-down-white.svg" alt=""/>
                        </button>
                    </div>
                </div>
                {items}
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
    return { data: store.getItems}
  }

//action
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        formServerItemsData
    },dispatch)
  }

export default withRouter (connect(mapStateToProps,mapDispatchToProps)(Watch)) 