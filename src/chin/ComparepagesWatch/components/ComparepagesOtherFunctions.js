import React from 'react'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'

function  ComparepagesOtherFunctions(props){
    return(
    <>
    <div className="chin-hardwarespecifications-col">
        <div><p>GroupTrack多人即時追蹤</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data34}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>內建地圖</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data35}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>地圖導航功能</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data36}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>航線規畫</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data37}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>固定距離航線規劃</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data38}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>預載專用自行車道地圖</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data39}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>熱門路線導航功能</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data40}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>計算機</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data41}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>左右雙腳功率</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data42}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>亮度流明</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data43}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>血氧感測功能</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data44}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>全天候壓力偵測</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data45}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>REM睡眠偵測</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data46}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>呼吸頻率偵測</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data47}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>異常心率警示</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data48}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>音樂播放(MP3/AAC)</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data49}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>熱適應力</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data50}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>高度適應力</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data51}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>訓練負荷焦點</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data52}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>事故偵測</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data53}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>援助通知</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data54}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>防盜警報</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data55}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>飲水追蹤</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data56}</p></div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ComparepagesOtherFunctions)