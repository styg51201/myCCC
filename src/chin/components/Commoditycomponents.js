import React from 'react'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    AddCart,
    getShopCart,
    AddCartItem,
    DelCartItem,
    CalShopCart,
    Handle_AddMyFavorite,AddCartNewItem_sendcal} from '../../mao/actions/ShopCartAction'


function Commoditycomponents(props){
    // console.log('Commmm',props)
    return(
        <>
              <div className="chin-commodity-item">
                    <ul className="chin-star-heart-bag">
                        <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                        <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                        <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                        <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                        <li><img className="chin-star" src="./chin-img/star.svg" alt=""/></li>
                        <li className="chin-heart-bag">
                            <img className="chin-heart" src="./chin-img/heart.svg" alt="" onClick={()=>{
                                props.Handle_AddMyFavorite('true', props.data, props.MyFavorite)
                            }}
                                
                            />
                            <img className="chin-bag" src="./chin-img/shopping-bag.svg" alt="" onClick={()=>{
                                props.AddCartNewItem_sendcal(props.data,props.AddItem)
                            }}/>
                        </li>
                    </ul>
                    <Link to={'/commidty/'+props.data.itemId}>
                      <img className="chin-watchs" src={`./chin-img/images/${props.data.itemName}/${props.data.itemImg}`} alt=""/>
                      <h6>{props.data.name}</h6>
                      <h4>{props.data.itemName}</h4>
                      <h5>NT{props.data.itemPrice}</h5>
                    </Link>
            </div>
          
        </>
    )
}


// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
    return {
      AddItem: store.AddItem,
      MyFavorite: store.MyFavorite,
      CtrlData: store.ControlDataState,
    }
  }
  
  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        AddCart,
        getShopCart,
        AddCartItem,
        DelCartItem,
        CalShopCart,
        Handle_AddMyFavorite,
        AddCartNewItem_sendcal,
      },
      dispatch
    )
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Commoditycomponents)
  

// export default Commoditycomponents