import React from 'react'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'

function  ComparepagesPhotographySpecifications(props){
    return(
    <>
    <div className="chin-hardwarespecifications-col">
        <div><p>重量</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>大小</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data2}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>畫質</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data3}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>廣角</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data4}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>特色</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data5}</p></div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ComparepagesPhotographySpecifications)