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
        <div><p>介面語言</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data2}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>機台尺寸(不含錶帶)</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data3}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>螢幕尺寸</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data4}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>螢幕解析度</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data5}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>螢幕類型</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data6}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>機器重量</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data7}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>腕帶材質</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data8}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>錶殼材質</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data9}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>特殊材質</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data10}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>電池種類</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data11}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>電池效能(最長可達)</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data12}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>防水等級</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data13}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>儲存空間</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data14}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>無線傳輸介面</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data15}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>電腦傳輸介面</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data16}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>GPS高感度晶片</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data17}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>內建加速度計</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data18}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>氣壓式高度計</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data19}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>振動提示</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data20}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>聲音提示</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data21}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>手腕式心率感測</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data22}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>支援心率廣播</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data23}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>電子羅盤</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data24}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>支援ANT+感測器</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data25}</p></div>
                </>
                    )
            })}
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>自動同步</p></div>
        {props.compare.map((val,ind)=>{
            return(
                <>
                <div><p>{val.data26}</p></div>
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