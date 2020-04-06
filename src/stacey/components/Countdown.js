import React ,{useEffect,useState} from 'react'
import ReactTransitionGroup from 'react-addons-css-transition-group'
import moment from 'moment'

import '../css/countdown.scss'


function Countdown(props){

const [countdownTime,setCountdownTime] = useState(props.countdownTime+1)

// console.log('props.countdownTime',props.countdownTime)

const hour = Math.floor(countdownTime/3600)
const min = Math.floor( (countdownTime % 3600)/ 60 )
const sec = Math.floor( (countdownTime % 3600) % 60 )

console.log('min',min)
console.log('sec',sec)


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
 
console.log('secOne',secOne,'secTen',secTen,'minOne',minOne,'minTen',minTen)

 const secOneStyle = {animationDelay:0-secOne+'s'}
 
 const secTenStyle = {animationDelay:0-secTen+'s'}
 
 const minOneStyle = {animationDelay:0-minOne+'s'}
 
 const minTenStyle = {animationDelay:0-minTen+'s'}
 
 const hourOneStyle = {animationDelay:0-hourOne+'s'}



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
                    {/* <p className="hour-one" style={hourOneStyle}> */}
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
                <div>
                    <p
                      className="min-ten"
                      style={minTenStyle} 
                      >
                        <span>0</span>
                        <span>5</span>
                        <span>4</span>
                        <span>3</span>
                        <span>2</span>
                        <span>1</span>
                        <span>0</span>
                  </p>
                </div>

                </div>
                <div>
                    <p className="min-one" 
                    style={minOneStyle}
                    >
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
                    <p className="sec-ten" 
                    style={secTenStyle}
                    >
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
                    <p
                      className="sec-one" 
                      style={secOneStyle}
                      >
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


  
  
export default Countdown