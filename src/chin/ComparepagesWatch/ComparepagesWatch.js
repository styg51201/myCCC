import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter,
  } from 'react-router-dom'
import '../chin-css/comparepages.scss'
import '../../css/main.css'
//components
import ComparepagesHardwareSpecifications from './components/ComparepagesHardwareSpecifications'
import ComparepagesSmartWatch from './components/ComparepagesSmartWatch'
import ComparepagesOtherFunctions from './components/ComparepagesOtherFunctions'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'


function ComparepagesWatch(props){

  document.documentElement.scrollTop = document.body.scrollTop =0;
return(
    <>
    <main className="chin-main-item">
            <div className="chin-peritem-item">
                <div className="chin-functionfield">
                    <Link to="/watch"><p>選擇其他產品進行比較 ></p></Link>
                </div>
                {props.compare.map((val,ind)=>{
                return( 
                        <>
                        <div className="chin-item-field">
                            <div className="chin-peritem">
                                <img src={`/chin-img/images/${val.itemName}/${val.itemImg}`} alt="" />
                                <h6>{val.name}</h6>
                                <p>{val.itemName}</p>
                                <h5>NT{val.itemPrice}</h5>
                            </div>
                            <div className="chin-item">
                            <Link to={'/commidty/'+ val.itemId}><button>了解更多</button></Link>
                            <Link to='/OrderInfo' onClick={()=>{
                              props.AddCartNewItem_sendcal(props.data[0],props.AddItem)
                            }}><button>立即購買</button></Link>
                            </div>
                        </div>
                    </> 
                    )
                })}
            </div>
            <div className="chin-hardwarespecifications">
                <h2>硬體規格</h2>
                <ComparepagesHardwareSpecifications />
            </div>
            <div className="chin-hardwarespecifications">
                <h2>智慧手錶</h2>
            <ComparepagesSmartWatch/>
            </div>
            <div className="chin-hardwarespecifications">
                <h2>其他功能</h2>
            <ComparepagesOtherFunctions/>
            </div>
    </main>
    </>
)
}
// 選擇對應的reducer
const mapStateToProps = store => {
    return {compare:store.getItemscompare,}
  }
  
  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
      },
      dispatch
    )
  }
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ComparepagesWatch)
  )