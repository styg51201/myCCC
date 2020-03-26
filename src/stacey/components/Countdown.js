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

const now = new Date()
const today = `${now.getFullYear()}/${(now.getMonth())+1}/${now.getDate()}`
const endTime = new Date(`${today} 12:00:00`)

const countdownTime = (endTime.getTime() - now.getTime() )/1000 


const hour = Math.floor(countdownTime/3600)
const min = Math.floor( (countdownTime % 3600)/ 60 )
const sec = Math.floor( (countdownTime % 3600) % 60 )

// console.log(`${hour}小時 ${min} 分鐘 ${sec}秒`)

// let min = 10
// let sec = 10
// let hour =12

let secOne,secTen,minOne,minTen,hourOne

if(sec >= 10){
  secOne = 10 - (sec % 10)
  secTen = (6 - Math.floor(sec / 10) ) * 10 + (9 - (sec % 10) )
}else{
  secOne = 10 - sec
  secTen = 9 - sec
}

if(min >= 10 ){
  minOne = ( 10 - (min % 10) ) * 60 + (59 - sec)
  minTen = (6 - Math.floor(min / 10) ) * 600 + (599 - ( (min % 10) * 60 + sec) )
 }else{
  minOne = ( 10 - min ) * 60 + (59 - sec)
  minTen = 599 - ( (min % 10) * 60 + sec )  
 }

 
hourOne = (10 - (hour % 10))  * 3600 + (min * 60) + sec
 

 const secOneStyle = {animationDelay:0-secOne+'s'}
 
 const secTenStyle = {animationDelay:0-secTen+'s'}
 
 const minOneStyle = {animationDelay:0-minOne+'s'}
 
 const minTenStyle = {animationDelay:0-minTen+'s'}
 
 const hourOneStyle = {animationDelay:0-hourOne+'s'}

// const minOne = (10 - (min % 10) )* 60
// const minTen = (6 - (min / 10)) * 600
   


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
                    <p className="hour-one" style={hourOneStyle}>
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
                    <p className="min-ten" style={minTenStyle}>
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
                    <p className="min-one" style={minOneStyle}>
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
                    <p className="sec-ten" style={secTenStyle}>
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
                    <p className="sec-one" style={secOneStyle}>
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