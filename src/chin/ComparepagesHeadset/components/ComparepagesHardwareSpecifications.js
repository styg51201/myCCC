import React from 'react'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'

function  ComparepagesHardwareSpecifications(props){
    return(
    <>
    <div className="chin-hardwarespecifications-col">
        <div><p>類型</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>外殼</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data2}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>無線</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data3}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>降噪</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data4}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>麥克風</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data5}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>傳感器</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data6}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>使用方便</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data7}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>反饋</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data8}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>通話/音樂控制</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data9}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>音量控制</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data10}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>麥克風控制</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data11}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>頻道混音</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data12}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>降噪控制</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data13}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>談一談</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data14}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>附加控制</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data15}</p></div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ComparepagesHardwareSpecifications)