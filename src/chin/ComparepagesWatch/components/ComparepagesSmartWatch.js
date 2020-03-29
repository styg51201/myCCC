import React,{useState,useEffect} from 'react'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'

function  ComparepagesSmartWatch(props){

    return(
    <>
        <div className="chin-hardwarespecifications-col">
            <div><p>手錶模式</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data27}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>智慧提示</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data28}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>音樂控制</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data29}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>尋找手機</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data30}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>尋找裝置</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data31}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>VIRB控制</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data32}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>鬧鐘功能</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data33}</p></div>
                </>
                    )
            })}
        </div>
        
    </>
    )
}
// 選擇對應的reducer
const mapStateToProps = store => {
    return {  compare: store.getItemscompare,
            }
  }
  
  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
      },
      dispatch
    )
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ComparepagesSmartWatch)
  
  