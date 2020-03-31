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
import ComparepagesSoundBattery from './components/ComparepagesSoundBattery'
import ComparepagesOther from './components/ComparepagesOther'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {
  AddCartNewItem_sendcal
} from  '../../mao/actions/ShopCartAction'


function ComparepagesHeadset(props){

  document.documentElement.scrollTop = document.body.scrollTop =0;
return(
    <>
    <main className="chin-main-item">
            <div className="chin-peritem-item">
                <div className="chin-functionfield">
                    <Link to="/headset"><p>選擇其他產品進行比較 ></p></Link>
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
                              props.AddCartNewItem_sendcal(val,props.AddItem)
                            }}><button>立即購買</button></Link>
                            </div>
                        </div>
                    </> 
                    )
                })}
            </div>
            <div className="chin-hardwarespecifications">
                <h2>耳機規格</h2>
                <ComparepagesHardwareSpecifications />
            </div>
            <div className="chin-hardwarespecifications">
                <h2>聲音/電池</h2>
            <ComparepagesSoundBattery/>
            </div>
            <div className="chin-hardwarespecifications">
                <h2>其他功能</h2>
            <ComparepagesOther/>
            </div>
    </main>
    </>
)
}
// 選擇對應的reducer
const mapStateToProps = store => {
    return {compare:store.getItemscompare,
      AddItem:store.AddItem
    }
  }
  
  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {AddCartNewItem_sendcal
      },
      dispatch
    )
  }
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ComparepagesHeadset)
  )