import React from 'react'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'

function  ComparepagesOther(props){
    return(
    <>
    <div className="chin-hardwarespecifications-col">
        <div><p>安卓系統</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data35}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>蘋果系統</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data36}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>視窗</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data37}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>均衡器</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data38}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>ANC控制</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data39}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>麥克風控制</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data40}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>房間效果</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data41}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>播放控制</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data42}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>按鈕映射</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data43}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>環繞聲支持</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data44}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>類型</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data45}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>USB輸入</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data46}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>線入</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data47}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>線路輸出</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data48}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>光學輸入</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data49}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>RCA輸入</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data50}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>碼頭充電</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data51}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>電源</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data52}</p></div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ComparepagesOther)