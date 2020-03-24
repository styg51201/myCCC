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

    const [time,setTime] = useState(true)

    // let secTenStyle = `time0`
    // let secOneStyle = `time0`

    // console.log( sec)

    let setIntervalId = setInterval(() => {
        setTime(!time)
    }, 30);

        let secTenNum = null
        let secOneNum = null
        let td = new Date()
        let sec = (td.getSeconds()+"").split("")
    
        if(sec.length > 1){
            secTenNum = sec[0]
            secOneNum = sec[1]
        }else{
            secTenNum = '0'
            secOneNum = sec[0]
        }
    
        let secTenStyle = `time${secTenNum}`
        let secOneStyle = `time${secOneNum}`
        // console.log(sec)
   

    


    return (
        <>
            <div className="row sty-countdown">
            <div className="col">
              <h3>剩餘時間</h3>
              <div className="sty-time">
              
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