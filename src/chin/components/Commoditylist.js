import React, { useState, useEffect } from 'react'
import Features from '../small components/Features'
import Brand from '../small components/Brand'
// import Price from '../small components/Price'
import Discount from '../small components/Discount'
import { withRouter } from 'react-router-dom'
//classnames
import classNames from 'classnames'
//redux
import { connect ,useDispatch } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {ListItemPrice,ListItemPrice2,ResetListItemPrice} from '../actions/itemsActions'


function Commoditylist(props) {

const [price,setPrice] = useState(false)
const [volume, setVolume] = useState([0,40000]);
const PriceClassName= classNames('chin-totalprice',{active:price})
  const dispatch = useDispatch()
  useEffect(()=>{
    return ()=>dispatch({type:'SHOW_DISCOUNT',value:{isShow:false,value:{}}})
  },[])

  
  let nameList = []
  for (let i = 0; i < props.data.length; i++) {
    if (nameList.indexOf(props.data[i].name) === -1) {
      nameList.push(props.data[i].name)
    }
  }
  nameList.sort()

  const Itemprice = function (e){
    props.ListItemPrice({itemPrice:e.target.value})
  }
  const Itemprice2 = function (e){
    props.ListItemPrice2({itemPrice2:e.target.value})
  }
  return (
    <ul className="chin-commoditylist">
    <li className={PriceClassName} >
                <div className="chin-price" onClick={()=>{setPrice(!price)
                                                          props.sendprice(!props.price)
                                                          props.ResetListItemPrice()
                                                          }}>
                    <span>價格</span>
                    <img src="./chin-img/chevron-down-black.svg" alt=""/>
                </div>
                <div className="chin-slide">
                    <div className="chin-price-input">
                        <input type="text" placeholder="$0"  onBlur={(e)=>Itemprice(e)}/>
                        <input type="text" placeholder="$40,000" onBlur={(e)=>Itemprice2(e)}/>
                    </div>
                    {/* {CustomizedSlider()} */}
                </div>
      </li>
      {/* <Price price={props.data} /> */}
      {props.showDiscount.isShow ? <Discount data={props.showDiscount.value}/> : ''}
      <Brand list={nameList} />
      <Features />
    </ul>
  )
}



// 選擇對應的reducer
const mapStateToProps = store => {
  return { showDiscount: store.showDiscount, 
            ItemPrice: store.getListitemPrice,
          ItemPrice2:store.getListitemPrice2
           }
}
//action
const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    ListItemPrice,
    ListItemPrice2,
    ResetListItemPrice
  },dispatch)
}

export default withRouter(
  connect(mapStateToProps,mapDispatchToProps)(Commoditylist)
)


