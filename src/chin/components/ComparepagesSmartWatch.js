import React,{useState,useEffect} from 'react'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { formServercomparepagesData} from '../actions/itemsActions'

function  ComparepagesSmartWatch(props){
    console.log(props.compare)
   
    const formServercomparepages = props.compare.map((val, ind) => {
        return (props.formServercomparepagesData(val.itemId))
    })
    console.log(formServercomparepages)
    useEffect(() => {
        // formServercomparepages()
      }, [])
    
    return(
    <>
    <div className="chin-hardwarespecifications-col">
        <div><p>手錶模式</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>智慧提示</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>音樂控制</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>尋找手機</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>尋找裝置</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>VIRB控制</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
    </div>
    <div className="chin-hardwarespecifications-col">
        <div><p>鬧鐘功能</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
        <div><p>活動追蹤/ 跑步/ 有氧/ 重訓</p></div>
    </div>
    </>
    )
}
// 選擇對應的reducer
const mapStateToProps = store => {
    return {  compare: store.getItemscompare,
              comparepages:store.getComparepages,
            }
  }
  
  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        formServercomparepagesData
      },
      dispatch
    )
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ComparepagesSmartWatch)
  
  