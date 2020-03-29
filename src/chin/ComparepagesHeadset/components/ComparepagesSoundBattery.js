import React,{useState,useEffect} from 'react'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'

function  ComparepagesSoundBattery(props){

    return(
    <>
        <div className="chin-hardwarespecifications-col">
            <div><p>低音量</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data16}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>高音量</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data17}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>低低音</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data18}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>中低音</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data19}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>高低音</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data20}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>PRTF精度（標準偏差）</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data21}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>PRTF大小（平均）</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data22}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>PRTF距離</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data23}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>開放性</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data24}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>聲空間激勵</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data25}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>電池類型</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data26}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>連續電池壽命</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data27}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>附加費用</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data28}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>總電池壽命</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data29}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>充電時間</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data30}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>省電功能</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data31}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>充電時音頻</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data32}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>被動播放</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data33}</p></div>
                </>
                    )
            })}
        </div>
        <div className="chin-hardwarespecifications-col">
            <div><p>充電口</p></div>
            {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data34}</p></div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ComparepagesSoundBattery)
  
  