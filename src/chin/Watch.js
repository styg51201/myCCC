import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Link, Switch ,withRouter} from 'react-router-dom'
import { Col } from 'react-bootstrap'
//scss
import './chin-css/items.scss'
import '../css/main.scss'
//components
import Commoditycomponents from './components/Commoditycomponents'
import Commoditylist from './components/Commoditylist'
import CompareProductSort from './components/CompareProductSort'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { formServerItemsData } from './actions/itemsActions'


function Watch(props){
    console.log(props)
    console.log(props.data)
    useEffect(()=>{
        props.formServerItemsData("watch")
      },[])

    if(!props.data) return <></>

    return(
        <>
            <main className="chin-main">
                <section className="chin-section">
                <Commoditylist/>
                    <div className="chin-commodity-title">
                    <CompareProductSort/>
                        <div className="chin-commodity">
                            {props.data.map((val,ind)=>{
                                return(
                        <Commoditycomponents key={ind} data={props.data[ind]}/>
                        )
                                })}
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
    return { data: store.getItems}
  }

//action
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        formServerItemsData
    },dispatch)
  }

export default withRouter (connect(mapStateToProps,mapDispatchToProps)(Watch))