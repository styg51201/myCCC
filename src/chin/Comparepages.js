import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter,
  } from 'react-router-dom'
import './chin-css/comparepages.scss'
import '../css/main.css'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { SelectItemscompare } from './actions/itemsActions'


function Comparepages(props){
    console.log(props.compare)
  document.documentElement.scrollTop = document.body.scrollTop =0;
return(
    <>
    <main>
        <div className="chin-peritem-item">
            <Link to="/watch"><span>選擇其他產品進行比較 ></span></Link>
            {props.compare.map((val,ind)=>{
            return( <div>
                        <div className="chin-peritem">
                            <img src={`/chin-img/images/${val.itemName}/${val.itemImg}`} alt="" />
                            <h6>{val.name}</h6>
                            <p>{val.itemName}</p>
                            <h5>NT{val.itemPrice}</h5>
                        </div>
                        <div className="chin-item">
                        <Link to={'/commidty/'+ val.itemId}><button>了解更多</button></Link>
                            <button>立即購買</button>
                        </div>
                    </div>)
        })}
        </div>
        <div className="chin-hardwarespecifications">
            <h2>硬體規格</h2>
                <div className="chin-producttypes">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
        </div>
        <div className="chin-hardwarespecifications">
            <h2>智慧手錶</h2>
                <div className="chin-producttypes">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chin-hardwarespecifications">
            <h2>健身功能</h2>
                <div className="chin-producttypes">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chin-hardwarespecifications">
            <h2>跑步功能</h2>
                <div className="chin-producttypes">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
                <div className="chin-producttypes-narrative">
                    <div className="chin-producttypes-item-title">
                        <p>類型</p>
                    </div>
                    <div className="chin-grid">
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                        <div className="chin-grid-producttypes-item">
                            <p>類型</p>
                        </div>
                    </div>
                </div>
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
        SelectItemscompare
      },
      dispatch
    )
  }
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Comparepages)
  )