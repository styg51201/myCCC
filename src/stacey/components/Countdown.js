import React ,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import classNames from 'classnames'

import '../css/countdown.scss'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {} from '../actions/couponAction'

function Countdown(props){

   


    return (
        <>
            <div className="sty-countdown">
              <p>剩餘時間</p>
              <div className="sty-time">
              <div>
                    <p className="hour-ten">
                        <span>0</span>
                  </p>
                </div>
                <div>
                    <p className="hour-one">
                        <span>0</span>
                        <span>9</span>
                        <span>8</span>
                        <span>7</span>
                        <span>6</span>
                        <span>5</span>
                        <span>4</span>
                        <span>3</span>
                        <span>2</span>
                        <span>1</span>
                        <span>0</span>

                  </p>
                </div>
                <div className="sty-space">
                  <span> : </span>
                </div>              
                <div>
                    <p className="min-ten">
                        <span>0</span>
                        <span>5</span>
                        <span>4</span>
                        <span>3</span>
                        <span>2</span>
                        <span>1</span>
                        <span>0</span>
                  </p>
                </div>
                <div>
                    <p className="min-one">
                        <span>0</span>
                        <span>9</span>
                        <span>8</span>
                        <span>7</span>
                        <span>6</span>
                        <span>5</span>
                        <span>4</span>
                        <span>3</span>
                        <span>2</span>
                        <span>1</span>
                        <span>0</span>

                  </p>
                </div>
                <div className="sty-space">
                  <span> : </span>
                </div>
                <div>
                    <p className="sec-ten">
                        <span>0</span>
                        <span>5</span>
                        <span>4</span>
                        <span>3</span>
                        <span>2</span>
                        <span>1</span>
                        <span>0</span>
                     
                  </p>
                </div>
                <div>
                    <p className="sec-one">
                        <span>0</span>
                        <span>9</span>
                        <span>8</span>
                        <span>7</span>
                        <span>6</span>
                        <span>5</span>
                        <span>4</span>
                        <span>3</span>
                        <span>2</span>
                        <span>1</span>
                        <span>0</span>
                  </p>
                </div>
              </div>
          </div>
        </>
    )

}

// 選擇對應的reducer
const mapStateToProps = store => {
    return {  filterList: store.filterCoupon,}
  }
  
  //action
  const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
      
    },dispatch)
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Countdown)